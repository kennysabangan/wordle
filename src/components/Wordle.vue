<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';

export default {
  setup() {
    // The solution to the game
    const solution = ref('');

    const keyboard = {
        topRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        middleRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        bottomRow: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    };
    const gameRows = ref([
        { letters: [' ', ' ', ' ', ' ', ' '], length: 5 },
        { letters: [' ', ' ', ' ', ' ', ' '], length: 5 },
        { letters: [' ', ' ', ' ', ' ', ' '], length: 5 },
        { letters: [' ', ' ', ' ', ' ', ' '], length: 5 },
        { letters: [' ', ' ', ' ', ' ', ' '], length: 5 },
    ]);

    // Handles the click event on the keyboard to add letters to the game board
    function handleAddLetter(letter) {

      // Find the first row with an empty letter slow
      const rowIndex = gameRows.value.findIndex(row => row.letters.includes(' '));
      if (rowIndex === -1) {
        // No empty slots, do nothing
        return;
      }

      // Find the first empty letter slow in the row
      const letterIndex = gameRows.value[rowIndex].letters.findIndex(letter => letter === ' ');

      // Add the letter to the slot
      gameRows.value[rowIndex].letters[letterIndex] = letter;

      // Check if the row is complete
      const isComplete = gameRows.value[rowIndex].letters.every(letter => letter !== ' ');

      if (isComplete) {

        // Remove the keydown event listener while revealing letters
        document.removeEventListener('keydown', handleKeyDown);

        // Pause for a second and reveal each letter's color
        let index = 0;
        const interval = setInterval(() => {
          gameRows.value[rowIndex].letters[index] = gameRows.value[rowIndex].letters[index];
          console.log(`do something here to ${gameRows.value[rowIndex].letters[index]}`);
          index++;
          if (index === gameRows.value[rowIndex].length) {
            clearInterval(interval);
            // Add the keydown event listener back
            document.addEventListener('keydown', handleKeyDown);
          }
        }, 500);

      }
    }

    // If the user presses a key on the keyboard, pass it to handleClick
    function handleKeyDown(event) {
      // Identify the key pressed
      const letter = event.key.toUpperCase();
      console.log(letter);

      // Check if the key is on the game keyboard
      if (keyboard.topRow.includes(letter) || keyboard.middleRow.includes(letter) || keyboard.bottomRow.includes(letter)) {
        handleAddLetter(letter);
      }
    }

    function pickRandomWord(words) {
      const randomIndex = Math.floor(Math.random() * words.length);
      solution.value = words[randomIndex];
      console.log(solution.value);
    }

    onMounted(async () => {
      fetch('./words.txt')
        .then(res => res.text())
        .then(text => {
          const words = text.split('\n');
          pickRandomWord(words);
        });

      // Add event listener for keydown
      document.addEventListener('keydown', handleKeyDown);
    });

    onBeforeUnmount(() => {
      // Remove event listener for keydown
      document.removeEventListener('keydown', handleKeyDown);
    });

    return { keyboard, gameRows, handleKeyDown, solution };
  },
  methods: {
    handleClick(event) {
      console.log(event);
      // handleAddLetter(letter);
    }
  }
};

</script>

<template>
  <!-- App Header -->
  <div class="mx-auto max-w-3xl sm:px-4 lg:px-6 flex justify-between mt-20 bg-gray-700 py-4 rounded-xl bg-opacity-60">
    <button>
      <font-awesome-icon icon="fa-solid fa-circle-question" class="text-2xl"/>
    </button>
    <h1 class="text-4xl tracking-widest">WORDLE</h1>
    <button>
      <font-awesome-icon icon="fa-solid fa-gear" class="text-2xl"/>
    </button>
  </div>

  <!-- Wordle Game Board -->
  <div class="flex flex-col items-center">
    <div class="flex flex-col my-10">
      <div v-for="(row, index) in gameRows" :key="index" class="flex flex-row justify-between items-center select-none" >
        <div class="flex flex-row">
          <div v-for="(letter, letterIndex) in row.letters" :key="letterIndex" class="flex justify-center items-center text-2xl m-1.5 w-16 h-16 text-white bg-gray-700 rounded-sm font-bold">
            {{ letter }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Keyboard -->
  <div class="flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl mx-auto py-4 w-[40rem]">
    <div class="flex flex-row justify-center">
      <button v-for="char in keyboard.topRow" :key="char" class="keyboard-key text-white font-semibold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline" @click="handleClick(char)">
        {{ char }}
      </button>
    </div>
    <div class="flex flex-row justify-center">
      <button v-for="char in keyboard.middleRow" :key="char" class="keyboard-key bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" @click="handleClick(char)">
        {{ char }}
      </button>
    </div>
    <div class="flex flex-row justify-center">
      <button class="keyboard-key bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="36">
          <path fill="white" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
        </svg>
      </button>
      <button v-for="char in keyboard.bottomRow" :key="char" class="keyboard-key bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline" @click="handleClick(char)">
        {{ char }}
      </button>
      <button class="keyboard-key text-sm bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline" @click="handleClick(e)">
        ENTER
      </button>
    </div>
  </div>
</template>


<style scoped>
.keyboard-key {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 1rem;
  margin: 0.35rem;
  min-width: 3rem;
  min-height: 3rem;
  background-color: #565F7E;
  color: #DADCE0;
}

.keyboard-key:hover {
  opacity: 0.85;
}
</style>
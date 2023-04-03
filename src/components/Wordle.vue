<script>
import { Fragment, onBeforeUnmount, onMounted, ref } from "vue";
import Hammer from "hammerjs";
import click from "../assets/click.mp3";

export default {
  setup() {
    const keyboard = {
      topRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      middleRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      bottomRow: ["Z", "X", "C", "V", "B", "N", "M"],
    };
    const gameBoard = [
      {
        letters: [" ", " ", " ", " ", " "],
        color: ["empty", "empty", "empty", "empty", "empty"],
        isValidInput: true,
      },
      {
        letters: [" ", " ", " ", " ", " "],
        color: ["empty", "empty", "empty", "empty", "empty"],
        isValidInput: true,
      },
      {
        letters: [" ", " ", " ", " ", " "],
        color: ["empty", "empty", "empty", "empty", "empty"],
        isValidInput: true,
      },
      {
        letters: [" ", " ", " ", " ", " "],
        color: ["empty", "empty", "empty", "empty", "empty"],
        isValidInput: true,
      },
      {
        letters: [" ", " ", " ", " ", " "],
        color: ["empty", "empty", "empty", "empty", "empty"],
        isValidInput: true,
      },
    ];
    // Make a deep copy of initial gameboard
    const gameRows = ref(JSON.parse(JSON.stringify(gameBoard)));

    const dictionary = ref([]);
    const rowIndex = ref(0);
    const letterIndex = ref(0);
    const keyboardColors = ref({});
    const solution = ref("");
    const played = ref(0);
    const won = ref(0);

    // Handles the click event on the keyboard to add letters to the game board
    function handleAddLetter(letter) {

      // Find the first available row
      const row = gameRows.value[rowIndex.value];

      // Check if the row is complete
      const isComplete = row.letters.every((letter) => letter !== " ");

      // On BACKSPACE, if index is not the first letter, delete the letter
      if (letter === "BACKSPACE") {
        if (letterIndex.value !== 0) {
          letterIndex.value--;
          row.letters[letterIndex.value] = " ";
          row.color[letterIndex.value] = "empty";
        }
        return;
      }

      // Add the letter to the next available slot in row
      if (letterIndex.value <= 4 && letter !== "ENTER") {
        row.letters[letterIndex.value] = letter;
        row.color[letterIndex.value] = "pending";
        letterIndex.value++;
        return;
      }

      // If not complete and user is trying to enter a word, show error
      if (letter === "ENTER" && !isComplete) {
        row.isValidInput = false;
        setTimeout(() => {
          row.isValidInput = true;
        }, 400);
        showToast("Not enough letters");
        return;
      }

      // Check if word is in dictionary.txt
      if (
        letter === "ENTER" &&
        isComplete &&
        !dictionary.value.includes(row.letters.join("").toLowerCase())
      ) {
        row.isValidInput = false;
        setTimeout(() => {
          row.isValidInput = true;
        }, 400);
        showToast("Not in word list");
        return;
      }

      // If all slots are full and ENTER is pressed, submit the word
      if (letter === "ENTER" && isComplete) {

        // Remove the keydown event listener while revealing letters
        document.removeEventListener("keydown", handleKeyDown);
        const solutionLetters = solution.value.split("");

        // If letter already in right spot, don't color next instances yellow - keep track of unsolved letters
        // Create a table of available letters
        const availableLetters = {};
        solutionLetters.map((letter) => {
          if (!availableLetters[letter]) {
            availableLetters[letter] = 1;
          } else {
            availableLetters[letter] += 1;
          }
        });

        // Remove letters from table if the answers are in the right place
        for (let i = 0; i < solutionLetters.length; i++) {
          const char = row.letters[i];
          if (char === solutionLetters[i]) {
            if (availableLetters[char] === 1) {
              delete availableLetters[char];
            } else {
              availableLetters[char]--;
            }
          }
          // console.log(availableLetters);
        }
        let index = 0;
        const interval = setInterval(() => {
          const animationLetter = row.letters[index];

          // Animate each letter if the tile is in the wrong place, right place, or not exist
          if (animationLetter === solutionLetters[index]) {
            row.color[index] = "flip right-place";
            keyboardColors.value[animationLetter] = "key-right-place";
          } else if (animationLetter in availableLetters) {

            // Removes letter from available letters to prevent duplicate 'wrong places' if only 1 letter instance exists
            if (availableLetters[animationLetter] === 1) {
              delete availableLetters[animationLetter];
            } else {
              availableLetters[animationLetter]--;
            }
            row.color[index] = "flip wrong-place";

            // Colors keyboard letter to wrong place, ignoring higher tier
            if (keyboardColors.value[animationLetter] !== "key-right-place") {
              keyboardColors.value[animationLetter] = "key-wrong-place";
            }
          } else {
            row.color[index] = "flip not-exist";

            // Colors keyboard color to wrong place, but ignores higher tier
            if (
              keyboardColors.value[animationLetter] !== "key-right-place" &&
              keyboardColors.value[animationLetter] !== "key-wrong-place"
            ) {
              keyboardColors.value[animationLetter] = "key-not-exist";
            }
          }

          // At the end of the final letter animation, check if game is finished
          index++;
          if (index === 5) {
            clearInterval(interval);
            rowIndex.value++;
            letterIndex.value = 0;

            // If user gets the solution correct, end the game with a win
            if (solution.value === row.letters.join("")) {
              setTimeout(() => {
                endGame("win");
              }, 500);

            // If user runs out of guesses, end the game with a loss
            } else if (rowIndex.value === 5) {
              setTimeout(() => {
                endGame("lose");
              }, 500);

            // Else keep going with the game
            } else {
              document.addEventListener("keydown", handleKeyDown);
            }
          }
        }, 300);
      }
    }

    // Handle click on keyboard the same as pressing it on the keyboard
    function handleClick(char) {
      handleAddLetter(char);
    }

    // If the user presses a key on the keyboard, pass it to handleClick
    function handleKeyDown(event) {

      // Identify the key pressed
      const letter = event.key.toUpperCase();

      // Check if the key is on the game keyboard
      if (
        keyboard.topRow.includes(letter) ||
        keyboard.middleRow.includes(letter) ||
        keyboard.bottomRow.includes(letter)
      ) {
        handleAddLetter(letter);
      }

      // Check if the key is Backspace or Enter
      if (letter === "BACKSPACE" || letter === "ENTER") {
        handleAddLetter(letter);
      }
    }
    function showToast(message, time = 1500) {
      const toast = document.createElement("div");
      toast.innerText = message;
      toast.style.position = "absolute";
      toast.style.top = "30%";
      toast.style.left = "50%";
      toast.style.transform = "translate(-50%, -50%)";
      toast.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      toast.style.color = "white";
      toast.style.padding = "10px";
      toast.style.borderRadius = "5px";
      toast.style.zIndex = "9999";
      toast.style.userSelect = "none";
      document.body.appendChild(toast);
      toast.addEventListener("click", () => {
        toast.style.animation = "fade-out 0.4s";
        toast.addEventListener("animationend", () => {
          toast.remove();
        });
      });
      setTimeout(() => {
        toast.style.animation = "fade-out 0.4s";
        toast.addEventListener("animationend", () => {
          toast.remove();
        });
      }, time);
    }

    function pickRandomWord() {
      // Load Wordle List
      fetch("./words.txt")
        .then((res) => res.text())
        .then((text) => {
          let words = text.replace(/\r/g, "").split("\n");
          const randomIndex = Math.floor(Math.random() * words.length);
          solution.value = words[randomIndex].toUpperCase();
          console.log(solution.value);
        });
    }

    function endGame(result) {
      let message;
      played.value++;

      if (result === "win") {
        won.value++;
        message = `You win! You've won ${won.value} out of ${played.value} games! (${(won.value / played.value * 100).toFixed(2)}%)`
      } else {
        message = `The word was: ${solution.value}! You've won ${won.value} out of ${played.value} games! (${(won.value / played.value * 100).toFixed(2)}%)`
      }

      showToast(message, 3000);
      setTimeout(() => {
        gameRows.value = JSON.parse(JSON.stringify(gameBoard));
        keyboardColors.value = {};
        rowIndex.value = 0;
        letterIndex.value = 0;
        pickRandomWord();
        document.addEventListener("keydown", handleKeyDown);
      }, 4000);
    }

    onMounted(async () => {
      // Load Wordle List
      pickRandomWord();

      // Load large dictionary of 5-letter words
      fetch("./dictionary.txt")
        .then((res) => res.text())
        .then((text) => {
          dictionary.value = text.replace(/\r/g, "").split("\n");
        });

      // Add event listener for keydown
      document.addEventListener("keydown", handleKeyDown);

      // Disable double tapping to zoom for mobile devices
      const el = document.querySelector('body');
      const hammer = new Hammer.Manager(el);
      const doubleTap = new Hammer.Tap({
        event: 'doubletap',
        taps: 2,
      });

      hammer.add(doubleTap);
      hammer.on('doubletap', (e) => {
        e.preventDefault();
      });
    });

    onBeforeUnmount(() => {

      // Remove event listener for keydown
      document.removeEventListener("keydown", handleKeyDown);
    });

    const alert = (msg) => window.alert(msg)

    return {
      solution,
      dictionary,
      keyboard,
      keyboardColors,
      gameRows,
      handleKeyDown,
      handleClick,
      played,
      won,
      alert
    };
  },
  components: { Fragment },
};
</script>

<template>
  <div class="max-h-full min-h-full flex flex-col justify-center items-center">
  <!-- App Header -->
    <div
      class="-mt-12 lg:mt-0 mx-auto flex justify-between w-[80%] max-w-[80%] sm:max-w-lg md:max-w-xl px-4 sm:px-8 bg-gray-700 py-4 rounded-xl bg-opacity-60"
    >
      <button @click="alert('the cake is a lie')">
        <font-awesome-icon icon="fa-solid fa-circle-question" class="text-xl lg:text-2xl" />
      </button>
      <h1 class="text-2xl sm:text-3xl md:text-4xl tracking-widest">WORDLE</h1>
      <button @click="alert('42')">
        <font-awesome-icon icon="fa-solid fa-gear" class="text-xl lg:text-2xl" />
      </button>
    </div>

    <!-- Wordle Game Board -->
    <div class="flex flex-col items-center">
      <div class="flex flex-col my-10">
        <div
          v-for="(row, index) in gameRows"
          :key="index"
          :class="{ jiggle: !row.isValidInput }"
          class="flex flex-row justify-between items-center select-none"
        >
          <div class="flex flex-row">
            <div
              v-for="(letter, letterIndex) in row.letters"
              :key="letterIndex"
              :class="row.color[letterIndex]"
              class="flex justify-center items-center text-xl sm:text-2xl m-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-sm font-bold"
            >
              {{ letter }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Keyboard -->
    <div
      class="flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl py-4 px-2 sm:px-6"
    >
      <div class="flex flex-row justify-center">
        <button
          v-for="char in keyboard.topRow"
          :key="char"
          :class="keyboardColors[char]"
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="handleClick(char)"
        >
          {{ char }}
        </button>
      </div>
      <div class="flex flex-row justify-center">
        <button
          v-for="char in keyboard.middleRow"
          :key="char"
          :class="keyboardColors[char]"
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="handleClick(char)"
        >
          {{ char }}
        </button>
      </div>
      <div class="flex flex-row justify-center">
        <button
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-1.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="handleClick('BACKSPACE')"
        >
          <svg
            xmlns="http
            ://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 24"
            width="36"
          >
            <path
              fill="white"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
        <button
          v-for="char in keyboard.bottomRow"
          :key="char"
          :class="keyboardColors[char]"
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="handleClick(char)"
        >
          {{ char }}
        </button>
        <button
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="handleClick('ENTER')"
        >
          ENTER
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keyboard-key {
  @apply rounded-md drop-shadow-lg font-bold;
  min-width: 1.75rem;
  background-color: #565f7e;
  color: #dadce0;
}

.keyboard-key:hover {
  opacity: 0.85;
}

.empty {
  @apply bg-gray-700;
}

.pending {
  color: #565f7e;
  @apply bg-gray-200;
  animation: pop 0.15s;
}

.right-place {
  background-color: #6aaa64d0;
  transition: background-color 0.1s ease, color 0.1s ease;
  transition-delay: 0.2s;
}
.wrong-place {
  background-color: #c9b458c0;
  transition: background-color 0.1s ease, color 0.1s ease;
  transition-delay: 0.2s;
}
.not-exist {
  @apply text-white bg-gray-500;
  transition: background-color 0.1s ease, color 0.1s ease;
  transition-delay: 0.2s;
}

.key-right-place {
  background-color: #6aaa64d0;
  transition-delay: 0.5s;
  animation-delay: 0.5s;
  transition: background-color 0.1s ease;
  animation: pop 0.3s;
}

.key-wrong-place {
  background-color: #c9b458c0;
  transition-delay: 0.5s;
  animation-delay: 0.5s;
  transition: background-color 0.1s ease;
  animation: pop 0.3s;
}

.key-not-exist {
  @apply bg-gray-700 text-gray-300;
  transition-delay: 0.5s;
  animation-delay: 0.5s;
  transition: background-color 0.1s ease;
  animation: pop 0.3s;
}

.flip {
  animation: reveal-flip 0.5s ease;
  transform-style: preserve-3d;
}

@keyframes reveal-flip {
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.jiggle {
  animation: jiggle 0.45s ease-in;
}

@keyframes jiggle {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-10px);
  }
  30% {
    transform: translateX(9px);
  }
  45% {
    transform: translateX(-8px);
  }
  60% {
    transform: translateX(7px);
  }
  70% {
    transform: translateX(-5px);
  }
  85% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

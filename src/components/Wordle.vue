<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import { onMounted, onBeforeUnmount, ref } from "vue";
  import Hammer from "hammerjs";
  import toast from "../utils/toast";

  const GUESSES = 6;
  const keyboard = {
    topRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    middleRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    bottomRow: ["Z", "X", "C", "V", "B", "N", "M"],
  };

  // Initialize all other reactive variables
  const dictionary = ref([]);
  const gameRows = ref(createNewBoard());
  const rowIndex = ref(0);
  const letterIndex = ref(0);
  const keyboardColors = ref({});
  const solution = ref("");
  const played = ref(0);
  const won = ref(0);
  const thinhMode = ref(false);
  const animationFinished = ref(true);

  function createNewBoard() {
    return [
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
      {
        letters: [" ", " ", " ", " ", " "],
        color: ["empty", "empty", "empty", "empty", "empty"],
        isValidInput: true,
      },
    ];
  }

  function handleThinhMode() {
    // Handle toggle of wordle board colors
    gameRows.value.forEach(row => {
      for (let i = 0; i < row.color.length; i++) {
        row.color[i] = row.color[i].includes('color-blind-mode') ? row.color[i].split(' ').filter(c => c !== 'color-blind-mode').join(' ') : row.color[i] + ' color-blind-mode';
      }
    })

    // Handle toggle of keyboard colors
    for (const keyColor in keyboardColors.value) {
      keyboardColors.value[keyColor] = keyboardColors.value[keyColor].includes('color-blind-mode') ? keyboardColors.value[keyColor].split(' ').filter(c => c !== 'color-blind-mode').join(' ') : keyboardColors.value[keyColor] + ' color-blind-mode';
    }
  }


  // Main Game Function, handles all input from user to run Wordle
  function game(letter) {

    // Find the first available row
    const row = gameRows.value[rowIndex.value];

    // Check if the row is complete
    const isComplete = row.letters.every((letter) => letter !== " ");

    // On BACKSPACE, Remove a letter
    if (letter === "BACKSPACE") {
      if (letterIndex.value !== 0) {
        letterIndex.value--;
        row.letters[letterIndex.value] = " ";
        row.color[letterIndex.value] = "empty";
      }
      return;
    }

    // Add the next letter to the next available slot
    if (letterIndex.value <= 4 && letter !== "ENTER") {
      row.letters[letterIndex.value] = letter;
      row.color[letterIndex.value] = "pending";
      letterIndex.value++;
      return;
    }

    // If row is not complete and user is trying to ENTER a word, show error
    if (letter === "ENTER" && !isComplete) {
      row.isValidInput = false;
      setTimeout(() => {
        row.isValidInput = true;
      }, 400);
      toast("Not enough letters");
      return;
    }

    // Check if word is in dictionary.txt, show error if not
    if (
      letter === "ENTER" &&
      isComplete &&
      !dictionary.value.includes(row.letters.join("").toLowerCase())
    ) {
      row.isValidInput = false;
      setTimeout(() => {
        row.isValidInput = true;
      }, 400);
      toast("Not in word list");
      return;
    }

    // If input is valid and ENTER is pressed, Submit the word
    if (letter === "ENTER" && isComplete) {
      document.removeEventListener("keydown", handleKeyDown);
      checkEndgame(row);
    }
  }

  function animateReveal(row) {
    return new Promise(resolve => {

      // Remove the keydown event listener while revealing letters
      const solutionLetters = solution.value.split("");

      // Create a table of available letters to keep track of unsolved letters
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
      }

    // Animate each letter using an interval
    let index = 0;
    animationFinished.value = false;
    console.log(animationFinished.value);
      const interval = setInterval(() => {
        const animationLetter = row.letters[index];

        // Animate each letter if the tile is in the wrong place, right place, or not exist
        if (animationLetter === solutionLetters[index]) {
          row.color[index] = thinhMode.value ? "flip color-blind-mode right-place" : "flip right-place";
          keyboardColors.value[animationLetter] = thinhMode.value ? "color-blind-mode key-right-place" : "key-right-place";
        } else if (animationLetter in availableLetters) {

          // Removes letter from available letters to prevent duplicate 'wrong places' if only 1 letter instance exists
          if (availableLetters[animationLetter] === 1) {
            delete availableLetters[animationLetter];
          } else {
            availableLetters[animationLetter]--;
          }
          row.color[index] = thinhMode.value ? "flip color-blind-mode wrong-place" : "flip wrong-place";

          // Colors keyboard letter to wrong place, ignoring higher tier
          if (!keyboardColors.value[animationLetter]?.includes("key-right-place")) {
            keyboardColors.value[animationLetter] = thinhMode.value ? "color-blind-mode key-wrong-place" : "key-wrong-place";
          }
        } else {
          row.color[index] = "flip not-exist";

          // Colors keyboard color to wrong place, but ignores higher tier
          if (
            !keyboardColors.value[animationLetter]?.includes("key-right-place") &&
            !keyboardColors.value[animationLetter]?.includes("key-wrong-place")
          ) {
            keyboardColors.value[animationLetter] = "key-not-exist";
          }
        }

        // At the end of the final letter animation, check if game is finished
        index++;
        if (index === 5) {
          clearInterval(interval);
          resolve();
        }
      }, 300);
    })
  }

  async function checkEndgame(row) {

    // Wait for animation to finish
    await animateReveal(row)

    // If user gets the solution correct, end the game with a win
    if (solution.value === row.letters.join("")) {
      setTimeout(() => {
        endGame("win");
        return;
      }, 500);

    // If user runs out of guesses, end the game with a loss
    } else if (rowIndex.value === GUESSES - 1) {
      setTimeout(() => {
        endGame("lose");
        return
      }, 500);

    // Else keep going with the game
    } else {
      if (!animationFinished.value) {
        animationFinished.value = true;
        rowIndex.value++;
        letterIndex.value = 0;
        document.addEventListener("keydown", handleKeyDown);
      }
    }
  }

  // Handle user input from keyboard
  function handleKeyDown(event) {
    const letter = event.key.toUpperCase();

    // Check if the key is on the game keyboard
    if (
      keyboard.topRow.includes(letter) ||
      keyboard.middleRow.includes(letter) ||
      keyboard.bottomRow.includes(letter)
    ) {
      game(letter);
    }

    // Check if the key is Backspace or Enter
    if (letter === "BACKSPACE" || letter === "ENTER") {
      game(letter);
    }
  }

  // Picks a random word from the Wordle word list
  function pickRandomWord() {
    // Load Wordle List
    fetch("./filtered-words.txt")
      .then((res) => res.text())
      .then((text) => {
        let words = text.replace(/\r/g, "").split("\n");
        const randomIndex = Math.floor(Math.random() * words.length);
        solution.value = words[randomIndex].toUpperCase();
        console.log(solution.value);
      });
  }

  // Handles the end of the game messages & reset
  function endGame(result) {
    let message;
    played.value++;

    if (result === "win") {
      won.value++;
      message = `You win! You've won ${won.value} out of ${played.value} games! (${(won.value / played.value * 100).toFixed(2)}%)`
    } else {
      message = `The word was: ${solution.value}! You've won ${won.value} out of ${played.value} games! (${(won.value / played.value * 100).toFixed(2)}%)`
    }

    toast(message, 3000);
    setTimeout(() => {
      gameRows.value = createNewBoard();
      keyboardColors.value = {};
      rowIndex.value = 0;
      letterIndex.value = 0;
      pickRandomWord();
      document.addEventListener("keydown", handleKeyDown);
    }, 4000);
  }

  /* -- Lifecycle Hooks -- */
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
</script>

<template>
  <div class="max-h-full min-h-full flex flex-col justify-center items-center">
  <!-- App Header -->
    <div
      class="-mt-12 md:mt-0 lg:mt-2 mx-auto flex justify-between w-[80%] max-w-[80%] sm:max-w-lg md:max-w-xl px-4 sm:px-8 bg-gray-700 py-4 rounded-xl bg-opacity-60"
    >
      <!-- Help Button -->
      <Menu as="div" class="relative">
        <div class="h-full flex items-center mt-0.5">
          <MenuButton>
            <font-awesome-icon icon="fa-solid fa-circle-question" class="text-xl lg:text-2xl" />
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="absolute px-2 pb-4 centered max-w-[72vw] sm:left-2 z-10 mt-1 w-22 md:w-[25rem] rounded-md bg-gray-100 shadow-lg bg-opacity-90 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1 p-3">
              <div class="flex justify-center">
                <p class="text-gray-700 block px-4 py-2 mb-1 font-bold">HOW TO PLAY</p>
                <MenuButton class="absolute right-0 p-2 text-gray-700 hover:text-gray-900">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </MenuButton>
              </div>
              <p class="text-sm text-black">
                Try to guess the random 5-letter word!
                <br/><br/>
                Each guess requires a valid 5-letter word and is played over 6 rounds. Guess the word as soon as possible! After each submission, the tiles will change colors like so:
                <br/>
              </p>
              <div class="relative inset-0 flex items-center my-4" aria-hidden="true">
                <div class="w-80 mx-auto border-t border-gray-500" />
              </div>
              <div class="flex my-4">
                <div :class="thinhMode ? 'color-blind-mode right-place' : 'right-place'" class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl ml-0 m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">B</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">E</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">A</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">C</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">H</div>
              </div>
              <h2 class="text-black text-sm">The letter <b>B</b> is in the word - and is in the right spot!</h2>
              <div class="flex my-4">
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl ml-0 m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">Y</div>
                <div :class="thinhMode ? 'color-blind-mode wrong-place' : 'wrong-place'" class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">O</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">U</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">T</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">H</div>
              </div>
              <h2 class="text-black text-sm">The letter <b>O</b> is in the word - but at the wrong spot.</h2>
              <div class="flex my-4">
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl ml-0 m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">S</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">U</div>
                <div class="flex justify-center items-center bg-gray-800 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">N</div>
                <div class="flex justify-center items-center bg-gray-800 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">N</div>
                <div class="flex justify-center items-center bg-gray-500 text-xl sm:text-2xl m-0.5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm font-bold">Y</div>
              </div>
              <h2 class="text-black text-sm">The letter <b>N</b> is NOT in the word in any spot.</h2>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <!-- End Help Button -->

      <!-- Title -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl tracking-widest">WORDLE</h1>

      <!-- Settings Button -->
      <Menu as="div" class="relative inline-block">
        <div class="h-full flex items-center mt-0.5">
          <MenuButton>
            <font-awesome-icon icon="fa-solid fa-gear" class="text-xl lg:text-2xl" />
          </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="absolute px-2 pb-4 right-2 z-10 mt-2 w-60 origin-top-right rounded-md bg-gray-100 shadow-lg bg-opacity-90 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <div class="flex justify-center">
                <p class="text-gray-700 block px-4 py-2 mb-1 font-bold">SETTINGS</p>
                <MenuButton class="absolute right-0 p-2 text-gray-700 hover:text-gray-900">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </MenuButton>
              </div>
              <SwitchGroup as="div" class="flex items-center justify-between px-4">
                <SwitchLabel as="span" class="font-medium leading-6 text-gray-900" passive>Thinh Mode</SwitchLabel>
                  <Switch v-model="thinhMode" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" @click="handleThinhMode">
                  <span class="sr-only">Use setting</span>
                  <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md" />
                  <span aria-hidden="true" :class="[thinhMode ? 'bg-indigo-600' : 'bg-gray-500', 'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
                  <span aria-hidden="true" :class="[thinhMode ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out']" />
                </Switch>
              </SwitchGroup>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <!-- End Settings -->
    </div>

    <!-- Wordle Game Board -->
    <div class="flex flex-col items-center">
      <div class="flex flex-col my-4">
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
      class="flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl py-4 px-2 sm:px-4"
    >
      <div class="flex flex-row justify-center">
        <button
          v-for="char in keyboard.topRow"
          :key="char"
          :class="keyboardColors[char]"
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="game(char)"
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
          @click="game(char)"
        >
          {{ char }}
        </button>
      </div>
      <div class="flex flex-row justify-center">
        <button
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-1.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="game('BACKSPACE')"
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
          @click="game(char)"
        >
          {{ char }}
        </button>
        <button
          class="keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"
          @click="game('ENTER')"
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
  background-color: var(--color-right);
  transition: background-color 0.1s ease, color 0.1s ease;
  transition-delay: 0.2s;
}
.color-blind-mode.right-place {
  background-color: var(--colorblind-right);
}

.wrong-place {
  background-color: var(--color-wrong);
  transition: background-color 0.1s ease, color 0.1s ease;
  transition-delay: 0.2s;
}

.color-blind-mode.wrong-place {
  background-color: var(--colorblind-wrong);
}
.not-exist {
  @apply text-white bg-gray-500;
  transition: background-color 0.1s ease, color 0.1s ease;
  transition-delay: 0.2s;
}

.key-right-place {
  background-color: var(--color-right);
  transition-delay: 0.5s;
  animation-delay: 0.5s;
  transition: background-color 0.1s ease;
  animation: pop 0.3s;
}

.color-blind-mode.key-right-place {
  background-color: var(--colorblind-right);
  transition-delay: 0.5s;
  animation-delay: 0.5s;
  transition: background-color 0.1s ease;
  animation: pop 0.3s;
}

.key-wrong-place {
  background-color: var(--color-wrong);
  transition-delay: 0.5s;
  animation-delay: 0.5s;
  transition: background-color 0.1s ease;
  animation: pop 0.3s;
}

.color-blind-mode.key-wrong-place {
  background-color: var(--colorblind-wrong);
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

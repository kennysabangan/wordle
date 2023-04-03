# Wordle

Wordle is a word-guessing game where players try to guess a random 5-letter word. The game is played over 6 rounds and the player must guess the correct word within the allotted number of guesses to win.

## Getting Started
### Prerequisites
* Node.js (version 12 or later)
* npm (version 6 or later)
### Installation
1. Clone the repository:

```
git clone https://github.com/kennysabangan/wordle.git
cd wordle
```

2. Install the dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open the game in your web browser by navigating to:
```
http://localhost:5173/wordle/
```

### Usage
The game consists of 5 rounds, and in each round, the player has to guess a random 5-letter word. The player has 5 attempts to guess the correct word, and after each guess, they will receive feedback on whether each letter in their guess is in the correct position or not.

To make a guess, click on the keyboard buttons or type directly into the game board. If a letter turns red, it means that the letter is not in the word. If a letter turns yellow, it means that the letter is in the word but not in the correct position. If a letter turns green, it means that the letter is in the word and in the correct position.

The game is won if the player guesses the correct word within the allotted number of attempts. If the player loses, the correct word will be revealed.

### Technologies Used
* Vue.js
* Tailwind CSS
* Vite
* ES6

### Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request. Otherwise, email me directly at codingwithkenny@gmail.com

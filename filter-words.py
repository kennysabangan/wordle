def main():
    with open('words.txt', 'r') as f:
        words = f.read().splitlines()

    with open('rare.txt', 'r') as f:
        rareWords = [word.lower() for word in f.read().splitlines()]

    with open('filtered-words.txt', 'w') as f:
        for word in words:
            if (word not in rareWords):
                f.write(word + '\n');

if __name__ == '__main__':
    main()
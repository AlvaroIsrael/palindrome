import log from 'debug';

const isPalindrome = (word: string) => {
  let wordLength = Math.floor(word.length / 2);
  for (let i = 0; i < wordLength; i++) {
    const fristLetter = word[i];
    const lastLetter = word[word.length - i - 1];
    if (fristLetter !== lastLetter) {
      return false;
    }
  }
  return true;
};

const isPalindromeTunned = (word: string) => {
  return word === word.split('').reverse().join('');
};


log.log(isPalindrome('arara'));
log.log(isPalindromeTunned('arara'));

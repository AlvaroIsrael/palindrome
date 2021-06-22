import { isPalindrome, isPalindromeTunned } from '../main';

describe('Palindrome unity tests', () => {
  describe('isPalindrome', () => {
    it('Should return [false] if a word is not a palindrome.', () => {
      const palindrome = isPalindrome('mada');

      expect(palindrome).toBeFalsy();
    });

    it('Should return [true] if a word is a palindrome.', async () => {
      const palindrome = isPalindrome('madam');

      expect(palindrome).toBeTruthy();
    });
  });

  describe('isPalindromeTunned', () => {
    it('Should return [false] if a word is not a palindrome.', () => {
      const palindrome = isPalindromeTunned('arar');

      expect(palindrome).toBeFalsy();
    });

    it('Should return [true] if a word is a palindrome.', async () => {
      const palindrome = isPalindromeTunned('arara');

      expect(palindrome).toBeTruthy();
    });
  });
});

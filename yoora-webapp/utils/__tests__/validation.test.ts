// Constants
import { MESSAGE, TEXT } from '@webapp/mocks';

// Utils
import { capitalizeWord, validateForm } from '../validation';

describe('validation test', () => {
  test('should capitalize the first letter of a word', () => {
    expect(capitalizeWord(TEXT.EMAIL_KEY)).toBe('Email');
  });

  test('validate form before submitting', () => {
    // Valid input
    expect(validateForm('', '')).toBe('');
    expect(validateForm(TEXT.VALID_EMAIL, TEXT.EMAIL_KEY)).toBe('');
    expect(validateForm(TEXT.VALID_PWD, TEXT.PWD_KEY)).toBe('');
    expect(validateForm(TEXT.VALID_NAME, TEXT.NAME_KEY)).toBe('');
    expect(validateForm(MESSAGE.VALID_MESSAGE_INPUT, TEXT.MESSAGE_KEY)).toBe('');

    // Invalid input
    expect(validateForm('', TEXT.PWD_KEY)).toBe(MESSAGE.REQUIRED_PWD);
    expect(validateForm(TEXT.INVALID_EMAIL, TEXT.EMAIL_KEY)).toBe(MESSAGE.INVALID_EMAIL);
    expect(validateForm(TEXT.INVALID_PWD, TEXT.PWD_KEY)).toBe(MESSAGE.INVALID_PWD);
    expect(validateForm(TEXT.INVALID_NAME, TEXT.NAME_KEY)).toBe(MESSAGE.INVALID_NAME);
    expect(validateForm(MESSAGE.INVALID_MESSAGE_INPUT, TEXT.MESSAGE_KEY)).toBe(
      MESSAGE.INVALID_MESSAGE,
    );
  });
});

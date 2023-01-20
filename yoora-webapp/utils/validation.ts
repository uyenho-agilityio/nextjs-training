export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PWD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

/**
 * Capitalize the first letter of the word
 * @param {string} word
 * @returns {string}
 */
export const capitalizeWord = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

/**
 * Validate form value
 * @param value
 * @param type
 * @returns
 */
export const validateForm = (value: string, type: string): string => {
  if (!value && !!type) {
    return `${capitalizeWord(type)} is required`;
  }

  switch (type) {
    case 'email':
      return EMAIL_PATTERN.test(value) ? '' : `${capitalizeWord(type)} is invalid`;
    case 'password':
      return PWD_PATTERN.test(value) ? '' : `${capitalizeWord(type)} is invalid`;
    default:
      return '';
  }
};

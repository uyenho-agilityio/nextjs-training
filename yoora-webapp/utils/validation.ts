const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_PATTERN = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;

const MESSAGE_PATTERN = /^.{40,}$/;

/**
 * Capitalize the first letter of the word
 * @param word
 * @returns
 */
export const capitalizeWord = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

/**
 * Validate form's value
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
    case 'name':
      return value.length > 4
        ? ''
        : `${capitalizeWord(type)} should be a minimum of five characters in length`;
    case 'message':
      return MESSAGE_PATTERN.test(value.replace(/\s/g, ' '))
        ? ''
        : `${capitalizeWord(type)} should be at least 40 characters`;
    default:
      return '';
  }
};

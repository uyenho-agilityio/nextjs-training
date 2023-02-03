export const setStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key: string): string => {
  const object: string = JSON.parse(localStorage.getItem(key) as string);

  return localStorage.getItem(key) ? object : '';
};

export const clearStorage = (key?: string): void => {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};

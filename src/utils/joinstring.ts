export const joinString = (str: string | string[]): string => {
  return Array.isArray(str) ? str.join('') : str;
};

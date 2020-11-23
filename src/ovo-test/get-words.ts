export const getWords = (str: string) => str.split(/[\s.]/g).filter((str) => str.length)

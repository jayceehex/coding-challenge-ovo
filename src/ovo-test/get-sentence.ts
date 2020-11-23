export const getSentences = (str: string) => str.split(/[.]/g).filter((str) => str.length)

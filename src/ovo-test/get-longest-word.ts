export const getLongestWord = (arr: string[]): number => {
  const sortedArr = [...arr]
  sortedArr.sort((strA: string, strB: string) => strA.length > strB.length ? -1 : 1)
  return sortedArr[0].length
}

import { getLongestWord } from '../../src/ovo-test/get-longest-word'
import { getWords } from '../../src/ovo-test/get-words'
import { lorem } from '../../src/ovo-test/lorem-ipsum'

describe('getLongestWord', () => {
  test('should return length of longest word as number', () => {
    expect(getLongestWord(getWords(lorem))).toBe(15)
  })
})

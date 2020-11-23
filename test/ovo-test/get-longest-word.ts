import { getLongestWord } from '../../src/ovo-test/get-longest-word'
import { getWords } from '../../src/ovo-test/get-words'
import { lorem } from '../../src/ovo-test/lorem-ipsum'

describe('getLongestWord', () => {
  test('should return array of words in string', () => {
    expect(getLongestWord(getWords(lorem))).toBe(15)
  })
})

import { getWords } from '../../src/ovo-test/get-words'
import { getWordsAmount } from '../../src/ovo-test/get-words-amount'
import { lorem } from '../../src/ovo-test/lorem-ipsum'

describe('getWords', () => {
  test('should return amount of words in string as number', () => {
    expect(getWordsAmount(getWords(lorem))).toBe(260)
  })
})

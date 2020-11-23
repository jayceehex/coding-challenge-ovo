import { getSentences } from '../../src/ovo-test/get-sentence'
import { getSentencesAmount } from '../../src/ovo-test/get-sentence-amount'
import { lorem } from '../../src/ovo-test/lorem-ipsum'

describe('getWords', () => {
  test('should return array of words in string', () => {
    expect(getSentencesAmount(getSentences(lorem))).toBe(22)
  })
})

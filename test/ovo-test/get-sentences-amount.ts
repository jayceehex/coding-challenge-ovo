import { getSentences } from '../../src/ovo-test/get-sentence'
import { getSentencesAmount } from '../../src/ovo-test/get-sentence-amount'
import { lorem } from '../../src/ovo-test/lorem-ipsum'

describe('getWords', () => {
  test('should return amount of sentences in string as number', () => {
    expect(getSentencesAmount(getSentences(lorem))).toBe(22)
  })
})

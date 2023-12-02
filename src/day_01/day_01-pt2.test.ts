import { getCalibrationValue, getCalibrationValuesAndSum } from './day_01'

const testDataWithCalibrationValues = [
  /* spell-checker: disable */
  { input: 'two1nine', expected: 29 },
  { input: 'eightwothree', expected: 83 },
  { input: 'abcone2threexyz', expected: 13 },
  { input: 'xtwone3four', expected: 24 },
  { input: '4nineeightseven2', expected: 42 },
  { input: 'zoneight234', expected: 14 },
  { input: '7pqrstsixteen', expected: 76 },
  { input: 'eightwo', expected: 82 },
  /* spell-checker: enable */
]

describe('getCalibrationValue', () => {
  // spell-checker: disable
  test.each`
    input                                     | expected
    ${testDataWithCalibrationValues[0].input} | ${testDataWithCalibrationValues[0].expected}
    ${testDataWithCalibrationValues[1].input} | ${testDataWithCalibrationValues[1].expected}
    ${testDataWithCalibrationValues[2].input} | ${testDataWithCalibrationValues[2].expected}
    ${testDataWithCalibrationValues[3].input} | ${testDataWithCalibrationValues[3].expected}
    ${testDataWithCalibrationValues[4].input} | ${testDataWithCalibrationValues[4].expected}
    ${testDataWithCalibrationValues[5].input} | ${testDataWithCalibrationValues[5].expected}
    ${testDataWithCalibrationValues[6].input} | ${testDataWithCalibrationValues[6].expected}
    ${testDataWithCalibrationValues[7].input} | ${testDataWithCalibrationValues[7].expected}
  `(
    // spell-checker: enable
    'given an input of $input, returns $expected',
    ({ input, expected }) => {
      const result = getCalibrationValue(input)

      expect(result).toBe(expected)
    },
  )
})


describe('getCalibrationValuesAndSum', () => {
  test('given an array of calibration values including spelled out numbers, returns the sum of the calibration values', () => {
    const input = [
      testDataWithCalibrationValues[0].input,
      testDataWithCalibrationValues[1].input,
      testDataWithCalibrationValues[2].input,
      testDataWithCalibrationValues[3].input,
      testDataWithCalibrationValues[4].input,
      testDataWithCalibrationValues[5].input,
      testDataWithCalibrationValues[6].input,
      testDataWithCalibrationValues[7].input,
    ]

    const result = getCalibrationValuesAndSum(input)

    expect(result).toBe(363)
  })
})
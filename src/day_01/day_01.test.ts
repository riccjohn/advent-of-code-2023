import {
  getAllCalibrationValues,
  getCalibrationValue,
  getCalibrationValuesAndSum,
} from './day_01'

describe('getCalibrationValue', () => {
  test('given an input with only two numbers, returns those two numbers', () => {
    const input = 'pqr3stu8vwx'

    const result = getCalibrationValue(input)

    expect(result).toBe(38)
  })

  test('given an input with more than two numbers, returns the first and last numbers', () => {
    const input = 'a1b2c3d4e5f'

    const result = getCalibrationValue(input)

    expect(result).toBe(15)
  })

  test('given an input with only one number, returns that number twice', () => {
    // cspell:disable-next-line
    const input = 'treb7uchet'

    const result = getCalibrationValue(input)

    expect(result).toBe(77)
  })

  test('given an input with no numbers, throws an error', () => {
    const input = 'abcde'

    expect(() => getCalibrationValue(input)).toThrowErrorMatchingInlineSnapshot(
      `"No numbers found in input"`,
    )
  })
})

describe('getAllCalibrationValues', () => {
  test('given an array of inputs, returns array of calibration values', () => {
    // cspell:disable-next-line
    const input = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']

    const result = getAllCalibrationValues(input)

    expect(result).toEqual([12, 38, 15, 77])
  })
})

describe('getCalibrationValuesAndSum', () => {
  test('returns the sum of all calibration values', () => {
    // cspell:disable-next-line
    const input = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']

    const result = getCalibrationValuesAndSum(input)

    expect(result).toBe(142)
  })
})

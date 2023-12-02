export const getCalibrationValue = (inputValue: string): number => {
  const numberNameDictionary: { [key: string]: string } = {
    // spell-checker: disable
    one: 'o1ne',
    two: 't2wo',
    three: 't3hree',
    four: 'f4our',
    five: 'f5ive',
    six: 's6ix',
    seven: 's7even',
    eight: 'e8ight',
    nine: 'n9ine',
    // spell-checker: enable
  }

  while (
    Object.keys(numberNameDictionary).some(key => inputValue.includes(key))
  ) {
    Object.keys(numberNameDictionary).forEach(key => {
      inputValue = inputValue.replace(key, numberNameDictionary[key])
    })
  }

  const numbers = inputValue.match(/\d/gm)

  if (!numbers) {
    return 0
  }

  const firstNumber = numbers[0]
  const lastNumber = numbers[numbers.length - 1]

  return Number(firstNumber + lastNumber)
}

export const getAllCalibrationValues = (inputValues: string[]): number[] => {
  return inputValues.map(input => {
    const calibrationValue = getCalibrationValue(input)
    return calibrationValue
  })
}

export const getCalibrationValuesAndSum = (input: string[]): number => {
  return getAllCalibrationValues(input).reduce((acc, curr) => acc + curr, 0)
}

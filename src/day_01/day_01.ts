export const getCalibrationValue = (inputValue: string): number => {
  const numberNameDictionary: { [key: string]: string } = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  }

  const numberNameRegex = new RegExp(Object.keys(numberNameDictionary).join('|'), 'gm')
  const numberNameMatches = inputValue.match(numberNameRegex)

  if (numberNameMatches) {
    numberNameMatches.forEach(match => {
      inputValue = inputValue.replace(match, numberNameDictionary[match])
    })
  }

  const numbers = inputValue.trim().match(/\d/gm)

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

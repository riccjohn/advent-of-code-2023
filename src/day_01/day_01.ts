export const getCalibrationValue = (inputValue: string): number => {
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

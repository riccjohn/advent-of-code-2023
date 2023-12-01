import { readFileSync } from 'fs'
import { getCalibrationValuesAndSum } from './day_01'

const solve = (): number => {
  const input = readFileSync('./input.txt', 'utf-8')

  const lines = input.split('\n')

  return getCalibrationValuesAndSum(lines)
}

const solution = solve()

console.log(solution)

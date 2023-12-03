import { readFileSync } from 'fs'
import {
  parseGame,
  getSumOfPossibleGameIds,
  Game,
  getPowerOfMinimumBag,
} from './day_02'

const solvePartOne = (): number => {
  const input = readFileSync('./input.txt', 'utf-8').trim()

  const lines = input.split('\n').map(line => line.trim())

  const games = lines.map((line, idx) => {
    try {
      const parsedGame = parseGame(line)
      return parsedGame
    } catch (error) {
      console.log('ERROR =>', error)
      console.log('IDX =>', idx)
      console.log('LINE =>', line)
    }
  })

  const bag = {
    blue: 14,
    green: 13,
    red: 12,
  }

  return getSumOfPossibleGameIds(games as Game[], bag)
}

const solvePartTwo = (): number => {
  const input = readFileSync('./input.txt', 'utf-8').trim()

  const lines = input.split('\n').map(line => line.trim())

  const games = lines.map((line, idx) => {
    try {
      const parsedGame = parseGame(line)
      return parsedGame
    } catch (error) {
      console.log('ERROR =>', error)
      console.log('IDX =>', idx)
      console.log('LINE =>', line)
    }
  })

  return games.reduce((acc, curr) => {
    if (!curr) {
      return acc
    }
    const powerOfMinimumBag = getPowerOfMinimumBag(curr)
    acc = acc += powerOfMinimumBag
    return acc
  }, 0)
}

const partOneSolution = solvePartOne()

console.log('PART 01 SOLUTION =>', partOneSolution)

const partTwoSolution = solvePartTwo()

console.log('PART 02 SOLUTION =>', partTwoSolution)

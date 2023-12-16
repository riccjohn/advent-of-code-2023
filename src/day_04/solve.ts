import { readFileSync } from 'fs'
import ScratchCardSolver from "./day_04";

const solvePartOne = (): number => {
  const input = readFileSync('./input.txt', 'utf-8').trim()

  return ScratchCardSolver.getScoreForAllCards(input)
}

const partOneSolution = solvePartOne()

console.log('Part One:', partOneSolution)
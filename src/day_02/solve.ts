import { readFileSync } from 'fs'
import { parseGame, getSumOfPossibleGameIds, Game } from './day_02'

const solve = (): number => {
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

const solution = solve()

console.log(solution)

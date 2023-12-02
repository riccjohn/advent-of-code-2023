import { parseGame } from "./day_02"

describe('parseGame()', () => {
  test('returns array of game sets', () => {
    const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'

    const expectedResult = {
        game: 1,
        sets: [
            { blue: 3, green: 0, red: 4 },
            { blue: 6, green: 2, red: 1 },
            { blue: 0, green: 2, red: 0 },
        ]
    }

    expect(parseGame(input)).toBe(expectedResult)
  })
})

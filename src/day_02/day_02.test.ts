import { parseGame } from './day_02'

describe('parseGame()', () => {
  const testInputWithAnswers = [
    {
      input: 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      expected: {
        game: 1,
        sets: [
          { blue: 3, red: 4 },
          { blue: 6, green: 2, red: 1 },
          { green: 2 },
        ],
      },
    },
    {
      input: 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      expected: {
        game: 2,
        sets: [
          { blue: 1, green: 2 },
          { green: 3, blue: 4, red: 1 },
          { green: 1, blue: 1 },
        ],
      },
    },
    {
      input:
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      expected: {
        game: 3,
        sets: [
          { green: 8, blue: 6, red: 20 },
          { blue: 5, red: 4, green: 13 },
          { green: 5, red: 1 },
        ],
      },
    },
    {
      input:
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      expected: {
        game: 4,
        sets: [
          { green: 1, red: 3, blue: 6 },
          { green: 3, red: 6 },
          { green: 3, blue: 15, red: 14 },
        ],
      },
    },
    {
      input: 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
      expected: {
        game: 5,
        sets: [
          { red: 6, blue: 1, green: 3 },
          { blue: 2, red: 1, green: 2 },
        ],
      },
    },
  ]

  test.each`
    input                            | expected
    ${testInputWithAnswers[0].input} | ${testInputWithAnswers[0].expected}
    ${testInputWithAnswers[1].input} | ${testInputWithAnswers[1].expected}
    ${testInputWithAnswers[2].input} | ${testInputWithAnswers[2].expected}
    ${testInputWithAnswers[3].input} | ${testInputWithAnswers[3].expected}
    ${testInputWithAnswers[4].input} | ${testInputWithAnswers[4].expected}
  `('given an input of $input, returns $expected', ({ input, expected }) => {
    const result = parseGame(input)

    expect(result).toStrictEqual(expected)
  })
})

import {
  Game,
  checkIfPossible,
  getPowerOfMinimumBag,
  getSumOfPossibleGameIds,
  parseGame,
} from './day_02'

describe('parseGame()', () => {
  const testInputWithAnswers = [
    {
      input: 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      expected: {
        id: 1,
        sets: [
          { blue: 3, red: 4, green: 0 },
          { blue: 6, green: 2, red: 1 },
          { green: 2, blue: 0, red: 0 },
        ],
      },
    },
    {
      input: 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      expected: {
        id: 2,
        sets: [
          { blue: 1, green: 2, red: 0 },
          { green: 3, blue: 4, red: 1 },
          { green: 1, blue: 1, red: 0 },
        ],
      },
    },
    {
      input:
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      expected: {
        id: 3,
        sets: [
          { green: 8, blue: 6, red: 20 },
          { blue: 5, red: 4, green: 13 },
          { green: 5, red: 1, blue: 0 },
        ],
      },
    },
    {
      input:
        'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      expected: {
        id: 4,
        sets: [
          { green: 1, red: 3, blue: 6 },
          { green: 3, red: 6, blue: 0 },
          { green: 3, blue: 15, red: 14 },
        ],
      },
    },
    {
      input: 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
      expected: {
        id: 5,
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
  `('parses the input string into a Game format', ({ input, expected }) => {
    const result = parseGame(input)

    expect(result).toStrictEqual(expected)
  })
})

describe('checkIfPossible', () => {
  const bag = {
    blue: 14,
    green: 13,
    red: 12,
  }

  const testInputWithAnswers = [
    {
      input: [{ blue: 3, red: 4 }, { blue: 6, green: 2, red: 1 }, { green: 2 }],
      expected: true,
    },
    {
      input: [
        { blue: 1, green: 2 },
        { green: 3, blue: 4, red: 1 },
        { green: 1, blue: 1 },
      ],
      expected: true,
    },
    {
      input: [
        { green: 8, blue: 6, red: 20 },
        { blue: 5, red: 4, green: 13 },
        { green: 5, red: 1 },
      ],
      expected: false,
    },
    {
      input: [
        { green: 1, red: 3, blue: 6 },
        { green: 3, red: 6 },
        { green: 3, blue: 15, red: 14 },
      ],
      expected: false,
    },
    {
      input: [
        { red: 6, blue: 1, green: 3 },
        { blue: 2, red: 1, green: 2 },
      ],
      expected: true,
    },
  ]

  test.each`
    input                            | expected
    ${testInputWithAnswers[0].input} | ${testInputWithAnswers[0].expected}
    ${testInputWithAnswers[1].input} | ${testInputWithAnswers[1].expected}
    ${testInputWithAnswers[2].input} | ${testInputWithAnswers[2].expected}
    ${testInputWithAnswers[3].input} | ${testInputWithAnswers[3].expected}
    ${testInputWithAnswers[4].input} | ${testInputWithAnswers[4].expected}
  `(
    'returns whether the guessed bag contents are possible given the observed results',
    ({ input, expected }) => {
      const result = checkIfPossible(input, bag)

      expect(result).toBe(expected)
    },
  )
})

describe('getSumOfPossibleGameIds', () => {
  const expected = 8

  const input: Game[] = [
    {
      id: 1,
      sets: [
        { blue: 3, red: 4, green: 0 },
        { blue: 6, green: 2, red: 1 },
        { green: 2, red: 0, blue: 0 },
      ],
    },
    {
      id: 2,
      sets: [
        { blue: 1, green: 2, red: 0 },
        { green: 3, blue: 4, red: 1 },
        { green: 1, blue: 1, red: 0 },
      ],
    },
    {
      id: 3,
      sets: [
        { green: 8, blue: 6, red: 20 },
        { blue: 5, red: 4, green: 13 },
        { green: 5, red: 1, blue: 0 },
      ],
    },
    {
      id: 4,
      sets: [
        { green: 1, red: 3, blue: 6 },
        { green: 3, red: 6, blue: 0 },
        { green: 3, blue: 15, red: 14 },
      ],
    },
    {
      id: 5,
      sets: [
        { red: 6, blue: 1, green: 3 },
        { blue: 2, red: 1, green: 2 },
      ],
    },
  ]

  const bag = {
    blue: 14,
    green: 13,
    red: 12,
  }

  expect(getSumOfPossibleGameIds(input, bag)).toBe(expected)
})

describe('getPowerOfMinimumBag', () => {
  const testInputWithAnswers = [
    {
      input: {
        id: 1,
        sets: [
          { blue: 3, red: 4, green: 0 },
          { blue: 6, green: 2, red: 1 },
          { green: 2, blue: 0, red: 0 },
        ],
      },
      expected: 48,
    },
    {
      input: {
        id: 2,
        sets: [
          { blue: 1, green: 2, red: 0 },
          { green: 3, blue: 4, red: 1 },
          { green: 1, blue: 1, red: 0 },
        ],
      },
      expected: 12,
    },
    {
      input: {
        id: 3,
        sets: [
          { green: 8, blue: 6, red: 20 },
          { blue: 5, red: 4, green: 13 },
          { green: 5, red: 1, blue: 0 },
        ],
      },
      expected: 1560,
    },
    {
      input: {
        id: 4,
        sets: [
          { green: 1, red: 3, blue: 6 },
          { green: 3, red: 6, blue: 0 },
          { green: 3, blue: 15, red: 14 },
        ],
      },
      expected: 630,
    },
    {
      input: {
        id: 5,
        sets: [
          { red: 6, blue: 1, green: 3 },
          { blue: 2, red: 1, green: 2 },
        ],
      },
      expected: 36,
    },
  ]

  test.each`
    input                            | expected
    ${testInputWithAnswers[0].input} | ${testInputWithAnswers[0].expected}
    ${testInputWithAnswers[1].input} | ${testInputWithAnswers[1].expected}
    ${testInputWithAnswers[2].input} | ${testInputWithAnswers[2].expected}
    ${testInputWithAnswers[3].input} | ${testInputWithAnswers[3].expected}
    ${testInputWithAnswers[4].input} | ${testInputWithAnswers[4].expected}
  `('returns the power of the minimum bag', ({ input, expected }) => {
    const result = getPowerOfMinimumBag(input)

    expect(result).toBe(expected)
  })
})

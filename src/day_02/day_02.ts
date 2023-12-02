type Color = 'blue' | 'green' | 'red'

type Set = {
  [key in Color]: number
}

interface Game {
  game: number
  sets: Set[]
}

export const parseGame = (input: string): Game => {
  const [rawGame, rawSets] = input.split(':')

  const game = Number(rawGame.split(' ')[1])

  const sets = rawSets
    .split(';')
    .map(set => set.trim())
    .map(set => set.split(', '))
    .map(set =>
      set.reduce((acc, curr) => {
        const [occurrances, color] = curr.split(' ') as [string, Color]

        acc[color] = Number(occurrances)

        return acc
      }, {} as Set),
    )

  return {
    game,
    sets,
  }
}

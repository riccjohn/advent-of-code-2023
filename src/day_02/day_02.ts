type Color = 'blue' | 'green' | 'red'

type Set = {
  [key in Color]: number
}

export interface Game {
  id: number
  sets: Set[]
}

export const parseGame = (input: string): Game => {
  const colors: Color[] = ['blue', 'green', 'red']
  const [rawGame, rawSets] = input.split(':')

  const id = Number(rawGame.split(' ')[1])

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
    .map(set => {
      const setKeys = Object.keys(set)

      colors.forEach(color => {
        if (!setKeys.includes(color)) {
          set[color] = 0
        }
      })

      return set
    })

  return {
    id,
    sets,
  }
}

const getMaxValues = (sets: Set[]) => {
  return sets.reduce((acc, curr) => {
    const keys = Object.keys(curr) as Color[]

    keys.map(key => {
      if (!acc[key]) {
        acc[key] = curr[key]
      } else {
        acc[key] = Math.max(acc[key], curr[key])
      }
    })

    return acc
  })
}

export const checkIfPossible = (sets: Set[], bag: Set): boolean => {
  const maxValues = getMaxValues(sets)

  const possibleColors = (Object.keys(bag) as Color[]).map(color => {
    if (maxValues[color] <= bag[color]) {
      return true
    } else {
      return false
    }
  })

  return possibleColors.every(value => value === true)
}

export const getSumOfPossibleGameIds = (games: Game[], bag: Set): number => {
  const gamesWithPossibility = games.map(game => {
    const { id, sets } = game
    const possibility = checkIfPossible(sets, bag)
    return {
      id,
      possibile: possibility,
    }
  })

  const possibleGames = gamesWithPossibility.filter( game => game.possibile )

  const sum = possibleGames.reduce((acc, curr) => {
    acc += curr.id
    return acc
  }, 0)

  return sum
}

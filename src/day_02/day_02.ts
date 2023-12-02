
type Color = 'blue' | 'green' | 'red'

interface Set {
    
}


interface Game {
  game: number
  sets: [

  ]
  results: {
    blue: number
    green: number
    red: number
  }
}

export const parseGame = (input: string): Game => {
  return {
    game: 1,
    results: {
      blue: 0,
      green: 0,
      red: 0,
    },
  }
}

type Card = {
  id: number
  winningNumbers: number[]
  yourNumbers: number[]
}

class ScratchCardSolver {

  public static getScoreForAllCards(rawCards: string): number {
    const cards = rawCards.split('\n')

    return cards.reduce((totalScore, card) => {
      return totalScore + this.getScore(card)
    }, 0)
  }

  public static parseCard(card: string): Card {
    const [cardTitle, values] = card.split(':')

    const cardNumber = parseInt(cardTitle.split(' ')[1])

    const [winningList, yourList] = values.split('|')

    return {
      id: cardNumber,
      winningNumbers: this.parseNumberList(winningList),
      yourNumbers: this.parseNumberList(yourList)
    }
  }

  public static getScore(rawCard: string): number {
    const parsedCard = this.parseCard(rawCard)

    const numberOfMatches = parsedCard.winningNumbers.filter(
      (winningNumber) => parsedCard.yourNumbers.includes(winningNumber)
    ).length

    if (numberOfMatches === 0) return 0

    return Math.pow(2, numberOfMatches - 1)
  }

  private static parseNumberList(numberList: string): number[] {
    const matcher = /\d+/g
    return numberList.match(matcher)?.map(Number) || []
  }
}

export default ScratchCardSolver

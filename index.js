const prompt = require('prompt-sync')({ sigint: true });
const { cards } = require('./cards');

class Pokdeng {
    constructor() {
        this.totalBet = 0
        this.currentBet = 0
        this.cards = cards
    }

    setBet() {
        let bet
        // check if bet is not number, then request it again
        while (bet !== Number(bet)) {
            bet = Number(prompt('Please put your bet '))
        }
        
        this.currentBet = bet
    }

    randomCard() {
        // random out 1 card of all the cards in deck
        const cardIndex = Math.floor(Math.random() * this.cards.length)
        const randomizedCard = this.cards[cardIndex]
        this.cards = this.cards.filter(card => card.name != randomizedCard.name)
        return randomizedCard
    }

    resetCard() {
        // reset to 52 cards (every new turn)
        this.cards = cards
    }

    calculateScore(userScore, dealerScore) {
        // check win-lose-tie condition: if user wins, got the bet back, if lose, lost the bet, else got nothing. then reset current bet.
        if (userScore > dealerScore) {
            console.log(`You won!!!, you received ${this.currentBet} chips`)
            this.totalBet += this.currentBet
            this.currentBet = 0
        } else if (userScore < dealerScore) {
            console.log(`You Lose!!!, you lost ${this.currentBet} chips`)
            this.totalBet -= this.currentBet
            this.currentBet = 0
        } else {
            console.log(`It's tie!!!, you got nothing`)
            this.currentBet = 0
        }
    }

    shuffleDeck() {
        // random each 2 cards for user and dealer
        const userCard1 = this.randomCard()
        const userCard2 = this.randomCard()

        console.log(`You got ${userCard1.name}, ${userCard2.name}`)

        const dealerCard1 = this.randomCard()
        const dealerCard2 = this.randomCard()

        console.log(`The dealer got ${dealerCard1.name}, ${dealerCard2.name}`)

        // total card score 
        const userScore = (userCard1.score + userCard2.score) % 10
        const dealerScore = (dealerCard1.score + dealerCard2.score) % 10

        this.calculateScore(userScore, dealerScore)
    }

    gameContinue() {
        // after finished one game, ask user if they want to continue. if not, ended with total bet
        const gameStatus = prompt('Wanna play more (Yes/No)? ').toLowerCase()
        switch (gameStatus) {
            case 'y':
            case 'yes':
                this.resetCard()
                this.gameStart()
                break;
            case 'n':
            case 'no':
                console.log(`You got total ${this.totalBet} chips`)
                break;
            default:
                this.gameContinue()
                break;
        }
    }

    gameStart() {
        this.setBet()
        this.shuffleDeck()
        this.gameContinue()
    }
}

const pokdeng = new Pokdeng();
pokdeng.gameStart();
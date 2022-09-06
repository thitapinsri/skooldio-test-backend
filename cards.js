const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

const getCard = (suit, rank) => {
    let score
    switch (rank) {
        case 'Ace':
            score = 1;
            break;
        case '2':
            score = 2;
            break;
        case '3':
            score = 3;
            break;
        case '4':
            score = 4;
            break;
        case '5':
            score = 5;
            break;
        case '6':
            score = 6;
            break;
        case '7':
            score = 7;
            break;
        case '8':
            score = 8;
            break;
        case '9':
            score = 9;
            break;
        case '10':
        case 'Jack':
        case 'Queen':
        case 'King':
            score = 10;
            break;
    }

    const card = {
        name: `${suit}-${rank}`,
        score: score
    };

    return card;
}

const cards = suits.map(suit => {
    return ranks.map(rank => {
      return getCard(suit, rank)
    })
}).flat()

module.exports = {
    getCard,
    cards,
}
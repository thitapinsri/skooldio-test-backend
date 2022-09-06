const { getCard, cards } = require('./cards')

test('Spades-Ace has correct name as \'Spades-Ace\'', () => {
    expect(getCard('Spades', 'Ace').name).toBe('Spades-Ace')
})

test('Diamonds-Jack has 10 scores', () => {
    expect(getCard('Diamonds', 'Jack').score).toBe(10)
})

test('cards array has total 52 cards', () => {
    expect(cards.length).toBe(52)
})
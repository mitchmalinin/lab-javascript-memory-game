class MemoryGame {
	constructor(card) {
		this.cards = cards;
		this.comapareArray = [];
		this.finalArray = [];
	}
	shuffleCards() {
		this.cards.sort((a, b) => {
			return Math.floor(Math.random() * 3) - 1;
		});
	}
	checkIfPair(card1, card2) {}
	isFinished() {}
}

var cards = [
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
];
var memoryGame = new MemoryGame(cards);

// memoryGame.shuffleCards();

document.addEventListener('DOMContentLoaded', function(event) {
	var html = '';
	memoryGame.cards.forEach(function(pic, i) {
		html += '<div class="card" id=' + i + ' data-card-name="' + pic.name + '">';
		html += '  <div class="back" name="' + pic.img + '"></div>';
		html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
		html += '</div>';
	});

	// Add all the div's to the HTML
	document.querySelector('#memory_board').innerHTML = html;
	//html variables
	let pairsClicked = document.getElementById('pairs_clicked');
	let pairsGuessed = document.getElementById('pairs_guessed');
	let i = 0;
	$('.card').click(function() {
		let childNodeFirst = $(this).children(':first');
		let childNodeLast = $(this).children(':last');
		childNodeFirst.removeClass('back').addClass('front');
		childNodeLast.addClass('back');

		let obj = { name: $(this).data('card-name'), index: $(this).attr('id') };
		memoryGame.comapareArray.push(obj);
		console.log(memoryGame.comapareArray[0]);
		if (memoryGame.comapareArray.length == 2) {
			$('.back').addClass('blocked');
			if (
				memoryGame.comapareArray[0].name == memoryGame.comapareArray[1].name &&
				memoryGame.comapareArray[0].index != memoryGame.comapareArray[1].index
			) {
				memoryGame.finalArray.push(memoryGame.comapareArray[0]);
				pairsClicked.innerHTML = memoryGame.finalArray.length;
				//end game
				setTimeout(() => {
					if (memoryGame.finalArray.length === 12) {
						alert('YOU WON THE GAME!');
						$('#memory_board').css('display', 'none');
						memoryGame = new MemoryGame(cards);
					}
				}, 1000);
				$('.back').removeClass('blocked');
				// console.log(memoryGame.comapareArray);
			} else {
				// childNodeFirst.removeClass('front').addClass('back');
				// childNodeLast.removeClass('back');
				i++;
				pairsGuessed.innerHTML = i;

				setTimeout(() => {
					let firstWrongOne = $('#' + memoryGame.comapareArray[1].index).children(':first');
					let secondWrongOne = $('#' + memoryGame.comapareArray[1].index).children(':last');
					firstWrongOne.toggleClass('front back');
					secondWrongOne.toggleClass('front back');
					let firstWrongTwo = $('#' + memoryGame.comapareArray[0].index).children(':first');
					let secondWrongTwo = $('#' + memoryGame.comapareArray[0].index).children(':last');
					firstWrongTwo.toggleClass('front back');
					secondWrongTwo.toggleClass('front back');
					$('.back').removeClass('blocked');
				}, 1000);
			}
		} else if (memoryGame.comapareArray.length > 2) {
			memoryGame.comapareArray = [];
			memoryGame.comapareArray[0] = obj;
		}
	});
});

// trivia questions and answers: https://docs.google.com/document/d/1uSRyqfCXcpJpNpuzCX2-dwizAlfnxl1_rvLsHgh5FzA/edit?usp=sharing

$(document).ready(function() {

	// setting up the varriables
	// tiriva questions with the answers and false answers
	var triviaQandA = [ 
		{ 
			question: "What is the only entirely non-Muggle village in Great Britain?", 
			answer: "Hogsmeade", 
			incorrect: ["London", "Liverpool", "Godric's Hollow", "Hogsmeade"] 
		},
		{ 
			question: "A witch or wizard who can transform into an animal at will is known as what?", 
			answer: "Animagus", 
			incorrect: ["Halfblood", "Ravenclaw", "Grubby-Plank", "Animagus"]
		},
		{ 
			question: "What two countries’ teams played in the Quidditch World Cup Harry attended before his fourth year at Hogwarts?", 
			answer: "Ireland", 
			incorrect: ["Spain", "France", "Brazil", "Ireland"]
		},

	];

	var count = 0;
	var correct = 0;
	var incorrect = 0;
	//on click of an answer, then increment the count. count++

	$('.button-answer').click(function() {
		
		count++
		console.log(triviaQandA[count].question);
		triviaQandA[count].answer;
		triviaQandA[count].incorrect;
	})


	// for(var i = 0; i < triviaQandA.length; i++) {
	// 	// console.log(triviaQandA[i].question)
	// 	for(var j =0; j < triviaQandA[i].incorrect.length; j++) {
	// 		// $('.button-answer').text(triviaQandA[i].incorrect[j]);
	// 	}
	// }
});

// function to populate the div with the question, and buttons with answers .append the buttons?


// addClass('active')
// removeClass('in-active')
// .hide()
// .empty()

	


/*
1. on page load: 1 question with 4 possible answers and the timer begins when click the first answer
2. when you select an answer the count goes up and the score and time appears on the screen
3. New question and answers appear on screen and timer continues to count down (repeat until you get 3 wrong answers)
4. When player chooses they can restart the game 




*/
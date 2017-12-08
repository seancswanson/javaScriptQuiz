var score = 0;
var correctAnswerIndex = 0;
var questionIndex = 0;
var selections = []
var quizDiv = $("#quiz");
var next = $("#next");

var radioButtons = $("input");

var allQuestions = [{
        question: "What race is Frodo?",
        choices: ["Orc", "Hobbit", "Man", "Elf"],
        correctAnswerIndex: 1
    },
    {
        question: "Who is the oldest creature in Middle Earth?",
        choices: ["Treebeard", "Gandalf", "Elrond", "Aragorn"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the name of the Dark Lord's Tower?",
        choices: ["Amon Amarth", "Dimmu Borgir", "Isengard", "Barad-dur"],
        correctAnswerIndex: 3
    },
    {
        question: "How old did Bilbo turning during the celebration in \"The Fellowship Of The Ring?\"",
        choices: ["Ninety-third", "Twenty-fifty-second", "Eleventy-first", "Seventy-seventh"],
        correctAnswerIndex: 2
    },
    {
        question: "What was the name of J.R.R. Tolkien's literary discussion group at Oxford which included C.S. Lewis?",
        choices: ["Inklings", "Inksters", "Inkmen", "Oxford Commas"],
        correctAnswerIndex: 0
    },
];

function showQuestion() {
    // console.log(questionIndex);
    // console.log(allQuestions[questionIndex]["question"]);
    $(".questionField").hide().fadeIn(1000);
    if (questionIndex <= 4) {
        $("#questionText").hide().fadeIn(1000).text(allQuestions[questionIndex]["question"]);
        $("#next").text("Next question");
        // console.log(questionIndex);
    }
}

function showChoices() {
    // console.log(allQuestions[questionIndex]["choices"]);
    if (questionIndex <= 4) {
        $("#questionForm").hide().fadeIn(1200);
        $("#q0choice").text(allQuestions[questionIndex]["choices"][0]);
        $("#q1choice").text(allQuestions[questionIndex]["choices"][1]);
        $("#q2choice").text(allQuestions[questionIndex]["choices"][2]);
        $("#q3choice").text(allQuestions[questionIndex]["choices"][3]);
    }
}

function checkQuestion() {
	// console.log("checkquestion runs");
    if (questionIndex === 0) {
        $("#q1button").attr("value", "answer");
        console.log("sets hobbit to answer");
        $("#q0button,#q2button,#q3button").attr("value","");
    } 
    if (questionIndex === 1) {
        $("#q0button").attr("value", "answer");
        console.log("sets treebeard to answer");
        $("#q1button,#q2button,#q3button").attr("value","");
    }
    if (questionIndex === 2) {
        $("#q3button").attr("value", "answer");
        $("#q0button,#q1button,#q2button").attr("value","");
    }
    if (questionIndex === 3) {
        $("#q2button").attr("value", "answer");
        $("#q0button,#q1button,#q3button").attr("value","");
    } 
    if(questionIndex===4){
    	$("#q0button").attr("value", "answer");
        $("#q1button,#q2button,#q3button").attr("value","");
    }
      $("input").on("click",function(){
      	if($(this).attr("value")==="answer"){
    		console.log("answer was clicked");
    		score++;
      	} else {
      		console.log("wrong answer clicked");
      	}
})
};



$("#next").on("click", function() {
    if (questionIndex <= 4) {
        console.log("score is " + score);
        questionIndex++;
        checkQuestion();
        showQuestion();
        showChoices();
        triggerNext();
    }
})


function triggerNext() {
    if (questionIndex === 4) {
        $("#next").html("Tally score");
        $("#next").on("click", showScore);
        }
    }

function showScore(){
	Math.floor(score);
	if (score ===15){
		$(".quiz").html("<h1> You answered all " + score/3 +" correctly! Nerd.");
	} else if (score === 10) {
		$(".quiz").html("<h1> You answered " + (score-6) +" correctly! Decent.");
	} else if (score === 6) {
		$(".quiz").html("<h1> You answered " + (score-3) +" correctly! Meh ok.");
	} else if (score === 3) {
		$(".quiz").html("<h1> You answered " + (score-1) +" correctly! Meh ok.");
	} else {
		$(".quiz").html("<h1> You answered " + (score) +" correctly! GET GOOD NOOB.");
	}
}
showQuestion();
showChoices();
checkQuestion();
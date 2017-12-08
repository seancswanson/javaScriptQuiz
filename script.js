var score = 0;

const quizDiv = $(".quiz");
const resultsDiv = $("#results");
const next = $("#next");


var allQuestions = [{
        question: "What race is Frodo?",
        choices: {
            a: "Orc",
            b: "Hobbit",
            c: "Man",
            d: "Elf"
        },
        correctAnswerIndex: "b"
    },
    {
        question: "Who is the oldest creature in Middle Earth?",
        choices: {
            a: "Treebeard",
            b: "Gandalf",
            c: "Elrond",
            d: "Aragorn"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the Dark Lord's Tower?",
        choices: {
            a: "Amon Amarth",
            b: "Dimmu Borgir",
            c: "Isengard",
            d: "Barad-dur"
        },
        correctAnswer: "d"
    },
    {
        question: "How old did Bilbo turning during the celebration in \"The Fellowship Of The Ring?\"",
        choices: {
            a: "Ninety-third",
            b: "Twenty-fifty-second",
            c: "Eleventy-first",
            d: "Seventy-seventh"
        },
        correctAnswer: "c"
    },
    {
        question: "What was the name of J.R.R. Tolkien's literary discussion group at Oxford which included C.S. Lewis?",
        choices: {
            a: "Inklings",
            b: "Inksters",
            c: "Inkmen",
            d: "Oxford Commas"
        },
        correctAnswer: "a"
    }
];

function generateQandA() {
    //store output to be generated
    const output = [];

    allQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //store list of answer chouces
            const choices = [];

            // for each answer within each question index
            for (letter in currentQuestion.choices) {

                //create a radio button
                 choices.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.choices[letter]}
    </label>`
  );
            }

            //add the question and the choices to the output in html
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
  				<div class="answers"> ${choices.join('')} </div>`
            );
        }
    );

    quizDiv.innterHTML = output.join('');
}

function generateScore() {

}

next.on("click", generateScore);

generateQandA();


// var q0 = allQuestions[questionIndex]["question"]["choices"][0];
// var q1 = allQuestions[questionIndex]["question"]["choices"][0];
// var q2 = allQuestions[questionIndex]["question"]["choices"][0];
// var q3 = allQuestions[questionIndex]["question"]["choices"][0];

// function showQuestion() {
//     // console.log(questionIndex);
//     // console.log(allQuestions[questionIndex]["question"]);
//     $(".questionField").hide().fadeIn(1000);
//     if (questionIndex <= 4) {
//         $("#questionText").hide().fadeIn(1000).text(allQuestions[questionIndex]["question"]);
//         $("#next").text("Next question");
//         console.log(questionIndex);
//     }
// }

// function showChoices() {
//     // console.log(allQuestions[questionIndex]["choices"]);
//     if (questionIndex <= 4) {
//     	$("#questionForm").hide().fadeIn(1200);
//         $("#q0choice").text(allQuestions[questionIndex]["choices"][0]);
//         $("#q1choice").text(allQuestions[questionIndex]["choices"][1]);
//         $("#q2choice").text(allQuestions[questionIndex]["choices"][2]);
//         $("#q3choice").text(allQuestions[questionIndex]["choices"][3]);
//     }
// }
// // function checkQuestion()

// $("#next").on("click", function() {
//     if (questionIndex <= 4) {
//     	console.log("score is "+ score);
//         questionIndex++;
//         showQuestion();
//         showChoices();
//         triggerNext();
//     }
// })

// $("input").on("click", function(){
// 	console.log("logged");
// 		if(questionIndex===0){

// 		}
// });

// function triggerNext() {
// 	if(questionIndex === 4) {
// 		$("#next").html("Tally score");

// 	}
// }
// $(":radio[name='portion_num'][value='1']").attr('checked', 'checked');
// showQuestion();
// showChoices();
// // showQuestion
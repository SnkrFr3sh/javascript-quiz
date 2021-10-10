// 1:c,2:d,3:d,4:b,5:c,6:a,7:d,8:a,9:c,10:b


var quizContainer = document.querySelector(".container");
var startQuizBtn = document.getElementById("startButton");
var timer = document.querySelector("#timer");
var score = document.querySelector('#score');
var scoreDisplay = document.querySelector('.scoreDisplay')
var containerEl = $('#container');
var cardContents = $('#card-contents');
var questionPrompt = $('#questionPrompt');
var statusBar = $('#statusbar');
var allQuestions = ['What is Javascript?', 'Which syntax is correct when logging ‘Monday morning’ onto the console?', 'Which typographical convention does Javascript use?', 'Which syntax is correct for declaring “Monday morning” as a new variable?', 'Which syntax is correct for setting the  ‘mondayMorning’ variable’s text-color to #FF2247?', 'Which syntax is correct for adding click functionality to the ‘mondayMorning’ variable?', 'Boolean variables have either of these two values:', 'Which method is used to store data locally in the browser?', 'Which method is used to retrieve data locally from the browser?', 'What method do you use to store the properties of a variable locally in a format that can later be translated into code when retrieved?'];
var resultCardQ = $('.resultCardQs');
var cardContentsResult = $('#card-contents-results');
var correctAnswer = $('.correct');
var scoreCard = [0]
var totalScore = 0;
var userInitials = ""
var scoreDisplay=0;
var resultsButton = $('.resultsBtn');
var timeLeft 
localStorage.setItem('scoreCard', scoreCard);




function totalSumScore() {
    var totalScore = 0;
    for (let i = 0; i < scoreCard.length; i++) {
        totalScore += scoreCard[i];
    
        console.log(totalScore);

    }

    return totalScore;

}



function inputInitials(){   
        var initials = prompt('Please enter your initials'); 
        if (initials != null){
            userInitials = initials
        }
        console.log(userInitials)
    }



var secondsLeft = 100;


function setTime() {
    var timeLeft = setInterval(function() {
    secondsLeft--;
    timer.textContent =  "Timer: " + secondsLeft;
        if (secondsLeft === 0){
            clearInterval(timeLeft);
            timesUp();
        // } else (resultsButton == false);{
        //     clearInterval(timeLeft);
        }
    }, 1000);
}



function plusTime(){
    secondsLeft -= 10;
}



function stopTime(){
    secondsLeft = 0;
}

function timesUp(){
    alert('Your time ran out')
    $('.incorrect').fadeOut(50);
    $('.correct').fadeOut(50);
    $('.h2Incorrect').fadeOut(50);
    $('.h2Correct').fadeOut(50);
    $('.next').fadeOut(50);
    $('.resultsBtn').fadeOut(50);
    $('.h2Correct').fadeOut(50);
    questionPrompt.text('Time is Up');
    console.log('timesUp');
    var nextQuestion = $('<button>');
    nextQuestion.attr('class', 'resultsBtn');
    nextQuestion.text('SEE RESULTS');
    cardContents.append(nextQuestion);
    var endOfQuiz = $('<h2>');
    endOfQuiz.attr('class', 'resultsTitle');
    endOfQuiz.text('END OF QUIZ')
    $('.resultsBtn').click(function(){
        results();
    })
}

$('.startQuiz').click(function(){
    $('.startQuiz').fadeOut(50);
    $('#intro').fadeOut(50);
    $('.container').fadeOut(50);
    setTime();
    scoreDisplay=0;
    questionOne();
    
})



// Question 1
function questionOne(){
    console.log(totalScore);
    console.log(scoreCard);
    statusBar.text('Question 1 of 10');
    questionPrompt.text('What is Javascript?');
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','incorrect');
    optionC.attr('class','correct');
    optionD.attr('class','incorrect');
    optionA.text('A form of latte foam art lettering normally practiced in boutique coffee shops');
    optionB.text('Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.');
    optionC.text('An object-oriented computer programming language commonly used to create interactive effects within web browsers.');
    optionD.text('None of the above.');
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){

    //     console.log(scoreCard);
    //    console.log(totalSumScore());
    //     userPoints = $('<h4>');
    //     userPoints.attr('class', 'points');
    //     userPoints.text('test');
    //     alert(JSON.stringify(userPoints));
    //     score.append(userPoints);

        

        console.log('1. correct');
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        totalSumScore();
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionTwo();
    
        })
    })

    
    $('.incorrect').click(function(){
        localStorage.setItem("q1", 'incorrect');
        console.log('1. Incorrect');
        plusTime()
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionTwo();

        })
    })
}

// Question 2
function questionTwo (){
    statusBar.text('Question 2 of 10');
    questionPrompt.text('Which syntax is correct when logging ‘Monday morning’ onto the console?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','incorrect');
    optionC.attr('class','incorrect');
    optionD.attr('class','correct');
    optionA.text('console log = ‘monday morning’;');
    optionB.text('console.log : ‘monday morning’;');
    optionC.text('log.mondayMorning.console;');
    optionD.text('console.log(‘monday morning’);');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        totalSumScore();
        console.log('2. Correct');
        
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionThree();
            
        })

    })
    
    $('.incorrect').click(function(){
        plusTime();
        console.log('2. Incorrect');
        localStorage.setItem("q2", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionThree();
        })
    })
};

// Question 3
function questionThree (){
    statusBar.text('Question 3 of 10');
    questionPrompt.text('Which typographical convention does Javascript use?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','incorrect');
    optionC.attr('class','incorrect');
    optionD.attr('class','correct');
    optionA.text('Letter Case = MondayMorning');
    optionB.text('Lower Case = mondaymorning');
    optionC.text('Upper Case = MONDAYMORNING');
    optionD.text('Camel Case = mondayMorning');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('3. Correct');
        localStorage.setItem("q3", 'correct');
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionFour();
        })

    })
    
    $('.incorrect').click(function(){
        plusTime();
        console.log('3. Incorrect');
        localStorage.setItem("q3", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionFour();
        })
    })
}

// Question 4

function questionFour (){
    statusBar.text('Question 4 of 10');
    questionPrompt.text('Which syntax is correct for declaring “Monday morning” as a new variable?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','correct');
    optionC.attr('class','incorrect');
    optionD.attr('class','incorrect');
    optionA.text('declare.variable = ‘mondayMorning’;');
    optionB.text('var mondayMorning;');
    optionC.text('variable ‘mondayMorning’;');
    optionD.text('var ‘mondayMorning’;');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('4. Correct');
        localStorage.setItem("q4", 'correct');
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionFive();
        })

    })
    
    $('.incorrect').click(function(){
        plusTime();
        console.log('4. Incorrect');
        localStorage.setItem("q4", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionFive();
        })
    })
}

// Question 5

function questionFive (){
    statusBar.text('Question 5 of 10');
    questionPrompt.text('Which syntax is correct for setting the  ‘mondayMorning’ variable’s text-color to #FF2247?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','incorrect');
    optionC.attr('class','correct');
    optionD.attr('class','incorrect');
    optionA.text('mondayMorning.setAttribute(style = color:#FF2247);');
    optionB.text('setAttribute.mondayMorning.style(color=#FF2247);');
    optionC.text('mondayMorning.setAttribute(‘style’, ‘color:#FF2247’);');
    optionD.text('mondayMorning.setAttribute.style.color(‘#FF2247’);');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('5. Correct');
        localStorage.setItem("q5", 'correct');
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionSix();
        })

    })
    
    $('.incorrect').click(function(){
        plusTime();
        console.log('5. Incorrect');
        localStorage.setItem("q5", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionSix();
        })
    })
}

// Question 6

function questionSix (){
    statusBar.text('Question 6 of 10');
    questionPrompt.text('Which syntax is correct for adding click functionality to the ‘mondayMorning’ variable?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','correct');
    optionB.attr('class','incorrect');
    optionC.attr('class','incorrect');
    optionD.attr('class','incorrect');
    optionA.text('mondayMorning.addEventListener(‘click’, function() { });');
    optionB.text('mondayMorning.click(function());');
    optionC.text('mondayMorning.style.function.click();');
    optionD.text('mondayMorning.addeventlistener(‘click’, function() { });');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('6. Correct');
        localStorage.setItem("q6", 'correct');
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionSeven();
        })

    })
    
    $('.incorrect').click(function(){
        plusTime();
        console.log('6. Incorrect');
        localStorage.setItem("q6", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionSeven();
        })
    })
}

// Question 7

function questionSeven (){
    statusBar.text('Question 7 of 10');
    questionPrompt.text('Boolean variables have either of these two values:').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','incorrect');
    optionC.attr('class','incorrect');
    optionD.attr('class','correct');
    optionA.text('1 & 0');
    optionB.text('yes & no');
    optionC.text('accept & decline');
    optionD.text('true & false');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('7. Correct');
        localStorage.setItem("q7", 'correct');
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionEight();
        })

    })
    
    $('.incorrect').click(function(){
        console.log('7. Incorrect');
        plusTime();
        localStorage.setItem("q7", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionEight();
        })
    })
}

// Question 8

function questionEight (){
    statusBar.text('Question 8 of 10');
    questionPrompt.text('Which method is used to store data locally in the browser?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','correct');
    optionB.attr('class','incorrect');
    optionC.attr('class','incorrect');
    optionD.attr('class','incorrect');
    optionA.text('localStorage.setItem();');
    optionB.text('localStorage.storeItem();');
    optionC.text('localStorage.getItem();');
    optionD.text('localStorage.retrieveItem();');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('8. Correct');
        localStorage.setItem("q8", 'correct');
        $('.incorrect').fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionNine();
        })
    })
    
    $('.incorrect').click(function(){
        console.log('8. Incorrect');
        plusTime();
        localStorage.setItem("q8", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionNine();
        })
    })
}

// Question 9

function questionNine (){
    statusBar.text('Question 9 of 10');
    questionPrompt.text('Which method is used to retrieve data locally from the browser?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','incorrect');
    optionC.attr('class','correct');
    optionD.attr('class','incorrect');
    optionA.text('localStorage.setItem();');
    optionB.text('localStorage.storeItem();');
    optionC.text('localStorage.getItem();');
    optionD.text('localStorage.retrieveItem();');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('9. Correct');
        $('.incorrect').fadeOut(50);
        localStorage.setItem("q9", 'correct');
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $(".correct").attr("disabled", true);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Correct').fadeOut(50);
            $('.next').fadeOut(50);
            questionTen();
        })

    })
    
    $('.incorrect').click(function(){
        console.log('9. Incorrect');
        plusTime();
        localStorage.setItem("q9", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'next');
        nextQuestion.text('Next Question >>');
        cardContents.append(nextQuestion);
        $('.next').click(function(){
            $('.correct').fadeOut(50);
            $('.h2Incorrect').fadeOut(50);
            $('.next').fadeOut(50);
            questionTen();
        })
    })

}

function questionTen (){
    statusBar.text('Question 10 of 10');
    questionPrompt.text('What method do you use to store the properties of a variable locally in a format that can later be translated into code when retrieved?').fadeIn(50);
    var optionA = $('<button>');
    var optionB = $('<button>');
    var optionC = $('<button>');
    var optionD = $('<button>');
    optionA.attr('class','incorrect');
    optionB.attr('class','correct');
    optionC.attr('class','incorrect');
    optionD.attr('class','incorrect');
    optionA.text('setItem.object()');
    optionB.text('JSON.stringify()');
    optionC.text('JSON.parse()');
    optionD.text('setObject()');
    
    cardContents.append(optionA);
    cardContents.append(optionB);
    cardContents.append(optionC);
    cardContents.append(optionD);

    $('.correct').click(function(){
        var scoreValue= 10;
        scoreCard.push(scoreValue);
        console.log(scoreCard);
        console.log('10. Correct');
        localStorage.setItem("q10", 'correct');
        $('.incorrect').fadeOut(50);
        $(".correct").attr("disabled", true);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Correct');
        correctMessage.text('CORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'resultsBtn');
        nextQuestion.text('SEE RESULTS');
        cardContents.append(nextQuestion);
   
        $('.resultsBtn').click(function(){
            clearInterval(timeLeft);
            results();
        })
    })
    
    $('.incorrect').click(function(){
        plusTime();
        console.log('10. Incorrect');
        localStorage.setItem("q10", 'incorrect');
        $('.correct').fadeOut(50);
        $('.incorrect').fadeOut(50);
        questionPrompt.fadeOut(50);
        var correctMessage=$('<h2>');
        correctMessage.attr('class', 'h2Incorrect');
        correctMessage.text('INCORRECT');
        cardContents.append(correctMessage);
        var nextQuestion = $('<button>');
        nextQuestion.attr('class', 'resultsBtn');
        nextQuestion.text('SEE RESULTS');
        cardContents.append(nextQuestion);
        $('.resultsBtn').click(function(){

            results();
        })
    })
}

function results(){
    stopTime()
    $('.incorrect').fadeOut(50);
    $('.correct').fadeOut(50);
    $('.h2Incorrect').fadeOut(50);
    $('.next').fadeOut(50);
    $('.resultsBtn').fadeOut(50);
    $('.h2Correct').fadeOut(50);
    questionPrompt.fadeOut(50);

    statusBar.text('End of quiz');
    var endOfQuiz = $('<h2>');
    endOfQuiz.attr('class', 'resultsTitle');
    endOfQuiz.text('Your Results')
    cardContents.append(endOfQuiz);

    var userName = $('<h2>');
    userName.attr('class', 'resultsTitle');
    userName.text("");
    cardContents.append(userName);
    inputInitials();
    // totalSumScore();
    userName.text('Hey '+ userInitials +'! Your Score is ' + totalSumScore());
    // scoreDisplay.text('Score: ' + 10);
    
    


}


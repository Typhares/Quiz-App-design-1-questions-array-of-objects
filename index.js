let score= 0;
let currentQuestion= 0; // keeps track of what question we are on
let questionsArray = [  // the array of questions each question is an Object with key value pairs or `keys`
  { 
   title: "Question 1",
   answers: [ "first", "second", "third", "fourth"],
   correct: 0
  }, 

 { 
   title: "Question 2",
   answers: [ "first", "second", "third", "fourth"],
   correct: 1 //index of correct answer
  }, 


 { 
   title: "Question 3",
   answers: [ "first", "second", "third", "fourth"],
   correct: 2 //index of correct answer
  }, 


 { 
   title: "Question 4",
   answers: [ "first", "second", "third", "fourth"],
   correct: 3 //index of correct answer
  }, 
    
];
//event listeners

$(document).ready(function(){

    $('.start a').click(function(element){
        element.preventDefault();
        $('.start').hide();
        $('.quiz').show();   
        showQuestion(); //calling line 47 showQuestion
    });
    // for giggles and grins, the.append method methodinserts html code 
        $('ul').append('<li> added choice .append() </li>');
    
});
//these functions will run each time the player clicks on a question title and renders HTML elements to the page

function showQuestion() {
    let question = questionsArray[currentQuestion]; 
    //question.title will access the first Key from the Questions Objects in the Array 
    $('.quiz h2').text(question.title);//method to select h2 and access the Object Key
    $('.quiz ul').html(``) //makes other questions go away
    $('.quiz ul').append(`<li> ${question.title} </li>`) //.append the list of choices with the question title and render it to the page
        console.log(question);
   //questionsArray[i].title I dont' know how to access the answers

}

function checkAnswer() {

}

function showSummary() {

}


















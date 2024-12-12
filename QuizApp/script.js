let questions = [
{
   "question": "wer hat HTML erfunden?",
   "answer_1": "Robbie williams",
   "answer_2": "Lady Gaga",
   "answer_3": "Time Berner-Lee",
   "answer_4": "Justin Bieber",
   "right_answer":3


},
{
    "question": "was bedeutet das HTML Tag &alt;a&gt;?",
    "answer_1": "Text fett",
    "answer_2": "container",
    "answer_3": "Ein Link",
    "answer_4": "kursive",
    "right_answer":3
 
 
 },

 {
    "question": "wie bindet man eine website in eine website ein?",
    "answer_1": "&alt;iframegt;, &alt;frame&gt; and &alt;frameset&gt;",
    "answer_2": "&alt;iframegt;",
    "answer_3": "&alt;iframegt;",
    "answer_4": "&alt;iframegt;",
    "right_answer":2
 
 
 },
 {
    "question": "wer hat css erfunden?",
    "answer_1": "Marc Andreessen",
    "answer_2": "Time Berners-Lee",
    "answer_3": "Hakon wium Lie",
    "answer_4": "Brendan Eich",
    "right_answer":3
 
 
 },
 {
    "question": "wer hat Javascript erfunden?",
    "answer_1": "Tim Berners-Lee",
    "answer_2": "Brendan Eich",
    "answer_3": "Tom Logen",
    "answer_4": "Mike Lee",
    "right_answer":2
 
 
 },
 {
    "question": "wer hat die Computer erfunden?",
    "answer_1": "Charles Babbage",
    "answer_2": "Alan Turing",
    "answer_3": "John von Neumann",
    "answer_4": "Ada Lovelace",
    "right_answer":1
 
 
 },
 {
    "question": "wer hat der Handy erfunden?",
    "answer_1": "Martin cooper",
    "answer_2": "Alexander Bell",
    "answer_3": "Steve jobs",
    "answer_4": "Nikola Tesla",
    "right_answer":1
 
 
 }
];

let rightQuestions = 0;
let currentQuestion = 0;   // global variable
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL =    new Audio('audio/fail.wav');

function init() {
 document.getElementById('all-question').innerHTML = questions.length;
    
    showQuestion();
}




function showQuestion(){
   
   if(currentQuestion >= questions.length){
      //  End screen
      document.getElementById('endscreen').style = '';
      document.getElementById('questionBody').style = 'display:none';
      document.getElementById('amount-of-question').innerHTML = questions.length;
      document.getElementById('amount-of-right-question').innerHTML = rightQuestions;
      document.getElementById('header-img').src = 'img/trophy.jpg';
   }else { // show question

 let percent =   (currentQuestion +1) / questions.length;
 console.log('progresss:',percent);
 percent = Math.round(percent *100);
 document.getElementById('progress-bar').innerHTML = `${percent}%`;
 document.getElementById('progress-bar').style = ` width: ${percent}%;`;
 let question = questions[currentQuestion];
 

 document.getElementById('question-number').innerHTML = currentQuestion +1;
 document.getElementById('questiontext').innerHTML = question['question'];
 document.getElementById('answer_1').innerHTML = question['answer_1'];
 document.getElementById('answer_2').innerHTML = question['answer_2'];
 document.getElementById('answer_3').innerHTML = question['answer_3'];
 document.getElementById('answer_4').innerHTML = question['answer_4'];
   }

}

  function answer(selection){
    let question = questions[currentQuestion];
    console.log('selected answer is ',selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('current question is  ',question['right_answer'])

   let idofRightAnswer = `answer_${question['right_answer']}`;


if(selectedQuestionNumber == question ['right_answer']) { // Richtige Frage beantwortet
   
   console.log('Richtige Antwort!');
   document.getElementById(selection).parentNode.classList.add('bg-success');
   AUDIO_SUCCESS.play();
   rightQuestions++;

   } else {
      document.getElementById(selection).parentNode.classList.add('bg-danger');
      document.getElementById(idofRightAnswer).parentNode.classList.add('bg-success');
      AUDIO_FAIL.play();
      console.log('Falsch Antwort!!');
   }
   document.getElementById('next-button').disabled = false;

}

function nextQuestion (){
   currentQuestion++;      // the variable will be increase from 0 question to question 1
   resetAnswerButtons();
   showQuestion();
   document.getElementById('next-button').disabled = true;

   
}
   
function resetAnswerButtons(){
   document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
   document.getElementById('answer_1').parentNode.classList.remove('bg-success');
   document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
   document.getElementById('answer_2').parentNode.classList.remove('bg-success');
   document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
   document.getElementById('answer_3').parentNode.classList.remove('bg-success');
   document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
   document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
   document.getElementById("header-img").src = "img/pencil.jpg";
   document.getElementById('questionBody').style = '';    //question body wieder anziegen
   document.getElementById('endscreen').style = 'display:none'; // end screen ausblenden
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}



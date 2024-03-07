const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let total;
const questions= [  ];
 
function addQuestion(question,choice,correctAnswer)
{
     
  let ques = {
    question: question,
    choice: choice,
    correctAnswer: correctAnswer
};
questions.push(ques);
total = questions.length;
};  
let scores=0;
 
  function displayQuestion(){

  const randomquestion = questions[Math.floor(Math.random()* questions.length)];
  console.log(randomquestion.question);
  randomquestion.choice.forEach((choices,index)=>{
     console.log(`${index+1}.${choices}.`);
   });
   rl.question('Enter your answer:',(answer)=>{
     if(answer.trim().toLowerCase() === randomquestion.correctAnswer.toLowerCase()){
       scores++
       console.log('Congz!!!!!');
     }
     else{
       console.log('Opps. You failed');
     }
     if(questions.length >1){
       questions.splice(questions.indexOf(randomquestion),1)
       displayQuestion();
      
     }
     else{
         
       console.log(`Game Over , Your total score is ${scores} out of ${total}.`)
}
   });
  };
    

module.exports = {displayQuestion,addQuestion};

# Generate an Online quiz.
An online quiz package.
## Installation
You can install the simple calculator package via npm.
```bash
npm install online_quiz_package
```
## Usage
``` javascript
// How to import an online quiz package
const functname = require ('online_quiz_package');
//lets add questions in our empty array called questions
const questions =[];
const addquestion = addQuestion('what is the capital city of Rwanda',['Kenya','Kigali','Huye','Nyaruguru'],'Kigali');
console.log(`The question that I have are ${questions}`);
```
## API DOCUMENTATION
### `addQuestion (question,choice,correctAnswer)`
Adds new questions in an array.
#### Parameters
-`question`: The question you need to add.
-`choice`: The choices you will pick from .
-`correctAnswer`: The correct answer of your question.
#### Returns
The result your array with  `question` ,`choice` and `correctAnswer`.
### `displayQuestion ()`
This function displays the questions randomly with their multiple choices  and prompt the user  to enter their answer.

#### Returns
The function marks whether the user passed or failed the question and at the end of the quiz , It returns the total score of the user.
# License
The package is licensed under the *ISC*.



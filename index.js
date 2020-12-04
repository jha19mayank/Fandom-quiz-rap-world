var readlineSync = require('readline-sync');

const chalk = require('chalk');

var score = 0;

console.log(chalk.green('Welcome to the show! Asli hip hop!! '))
 
var userName = readlineSync.question('May I have your name?   ');
console.log('Hello  ' + chalk.magenta(userName) + '  Rap world mein aapka swagat h!');
console.log('-------------------------------------------');

// function definition

function quiz(question , answer){
 var userAnswer = readlineSync.question(question);

 if(userAnswer.toLowerCase() === answer.toLowerCase()) 
  {
   console.log(chalk.green('Correct!'));
   score++;
   console.log(chalk.green('your score is:',score));
  } 

 else
  {
   console.log(chalk.redBright('Wrong! No load follow rappers.'));
   console.log('your score is:' + score );
  }
 
 console.log('***********************************')
}
 

quiz('Am I  a rapper?  ', 'no');
quiz('Who is my favourite rapper?  ', 'krsna');
quiz('krsna previous name was? ', 'young projpect');
quiz('Where does he live ? ', 'gurgaon');
quiz('Do he like beef or not? ', 'yes');
quiz('In which label he has been signed? ', 'kalamkaar');
quiz('which one is latest rap he released? ', 'the key');
quiz('is he a lyrical king or not ', 'yes');
quiz('Maharani was a diss to? ','muhfaad');
quiz('did he start rapping to gain attention? ', 'yes');


console.log(' ');
console.log(chalk.bgYellow('Do not forget to send the screenshot of your score!!'));

if(score===10){
 console.log('you know him very well! We are same bro!');
}
else if 
  (score===9|| score===8||score===7)

console.log('keep following bro! Saath main hip hop aage le jayenge!')
 else{
   console.log(chalk.bgRed('you need to come out of bollwood shit!!'))
   }

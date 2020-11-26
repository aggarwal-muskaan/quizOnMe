var read = require('readline-sync');
var style = require('chalk');

var title = style.bold.underline.hex('#fa6232');
var muskaan = style.bold.hex('#f7fa32');
var quesClr = style.bold.bgWhite.blue;
var optionsClr = style.bold.bgHex('#D350CC').hex('#0930D7');
var rightAnsClr = style.bgHex('#07AC4E').bold.white;
var wrongAnsClr = style.bold.bgRed.white;
var scoreClr = style.inverse.bgBlack.bold.grey;
var wrongClr = style.bold.red;

var quiz = [
  {
    qNumber: 1,
    question: "What’s my decision-making style? ",
    options: ["I often put off making decisions", "I spend a lot of time writing pros & cons before making a decision", "I trust myself to make decisions quickly and easily"],
    answer: "I trust myself to make decisions quickly and easily",
  }, {
    qNumber: 2,
    question: "Which type of person am I? ",
    options: ["Android", "iPhone"],
    answer: "Android",
  }, {
    qNumber: 3,
    question: "What is my favorite starter? ",
    options: ["Honey Chilli Potato", "Manchurian", "Spring Roll", "Dahi Kebab", "All of the above"],
    answer: "All of the above",
  }, {
    qNumber: 4,
    question: "What was my favorite subject in Std 7? ",
    options: ["Social Science", "Physical Education", "Science", "Maths"],
    answer: "Science",
  }, {
    qNumber: 5,
    question: "When do I have the most energy? ",
    options: ["6am-11am", "11am-4pm", "4pm-10pm", "10pm-6am"],
    answer: "6am-11am",
  }
]

var highScore =
{
  name: "Muskaan",
  score: 5,
  position: 1
};


//quiz function
function playQuiz(userScore) {

  for (i = 0; i < quiz.length; i++) {

    console.log(`\n \n \n \n` + quesClr(`Question ${i + 1}. ${quiz[i].question}`));
    // for(j=0;j<quiz[i].options.length;j++)
    var userAns = read.keyInSelect(quiz[i].options, optionsClr("Ans?"));

    if (quiz[i].options[userAns] === quiz[i].answer) {
      console.log("\n" + rightAnsClr("  Correct Answer!! ") + "\n ------------------ ");
      ++userScore;
    }
    else {
      console.log("\n" + wrongAnsClr(`You are not my buddy.`) + ` \n --------------------- `);
    }
    console.log(scoreClr(`  Your Score is: ${userScore}  `));
  }
  return userScore;
}

console.log("💖 💖 💖 " + title(` WELCOME TO \"How Well You Know ${muskaan('MUSKAAN')}\" `) + "💖 💖 💖");

var userName = read.question("\n What’s your name? ");
console.log(title(`Hi, ${userName}!`));

if (read.keyInYNStrict("\n Do you wanna play Quiz? ")) {
  var userScore = 0;
  score = playQuiz(userScore);
  if (score >= highScore.score) {
    console.log(`\n\n\n\t\t *** 🎀 You score ${rightAnsClr('highest')}🎀 ***\n {Send me ss😘  so that I will update my datalog.}`);
  }
  else {
    console.log(`\n\n\n\t*sobs*😥  Need to know me more! \n\t\t\t${wrongAnsClr('Your Total Score :')} ${score}/5 🙂`);
  }
}
else {
  console.log("\n" + wrongClr("That's unfair buddy. 😏"));
  // process.exit();
}
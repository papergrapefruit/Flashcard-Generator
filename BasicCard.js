var chalk = require('chalk');
var inquirer = require('inquirer');
var log = console.log;

// The constructor should accept two arguments: front and back.
function BasicCard(front, back) {

  this.front = front;
  this.back = back;
}

BasicCard.prototype.printOut = function () {
  log(chalk.magenta(("Front: " + this.front + "\nBack: " + this.back)));
};

// clear();
log("+-----------------------------------+");
inquirer.prompt([
  {
    type: 'confirm',
    name: 'confirm',
    message: '     Basic Card:                  |\n| *  shows a question text on front |\n| *  shows answer text on back      |\n|     Ready to create?              |\n+-----------------------------------+\n',
    default: true
  }
])
  .then(function (inquirerResponse) {
    if (inquirerResponse.confirm) {
      inquirer.prompt([{
        type: 'input',
        name: 'front',
        message: 'Enter question text (shows on front of card): '
      }, {
        type: 'input',
        name: 'back',
        message: 'Enter answer text (back of card): '
      
        // ,
        // validate: function validatefullText(name){
        //     return name.includes(answers.cloze)  || "Full text answer should contain the partial and cloze! ";
        // }
      }])
        .then(function (answers) {
          var newCard = new BasicCard(answers.front, answers.back);
          newCard.printOut();
        });
    } else {
      log(chalk.magenta('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'));
    }
  });

// This file should define a Node module that exports a constructor for creating cloze- deletion flashcards
module.exports = BasicCard;

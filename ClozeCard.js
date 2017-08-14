var chalk = require('chalk');
var clear = require('clear');
var inquirer = require('inquirer');
var log = console.log;
var ClozeSet = [];

// The constructor should accept two arguments: text and cloze.
function ClozeCard(partial, cloze, fullText) {

  // The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
  // The cloze deletion: "George Washington"
  this.cloze = cloze;

  // The constructed object should have a partial property that contains only the partial text.
  // The partial text: "... was the first president of the United States.
  this.partial = partial;

  // The constructed object should have a fullText property that contains only the full text.
  // The full text:"George Washington was the first president of the United States."
  this.fullText = fullText;
  // The constructor should throw or log an error when the cloze deletion does not appear in the input text.
}

ClozeCard.prototype.printOut = function () {
  log(chalk.magenta(("Cloze: " + this.cloze + "\nPartial: " + this.partial + "\nFull Text: " + this.fullText)));
  
};

// clear();
log("+-----------------------------------+");
inquirer.prompt([
  {
    type: 'confirm',
    name: 'confirm',
    message: '     Cloze Card:                  |\n| *  shows a partial text on front  |\n| *  shows full text on back        |\n|     Ready to create?              |\n+-----------------------------------+\n',
    default: true
  }
])
.then(function(inquirerResponse) { 
  if (inquirerResponse.confirm){
inquirer.prompt([{
    type: 'input',
    name: 'partial',
    message: 'Enter partial text (shows on front of card): '
  },{
    type: 'input',
    name: 'cloze',
    message: 'Enter cloze deletion (completes partial text on front of card): '
  },{
    type: 'input',
    name: 'fullText',
    message: 'Enter full text answer: '
    // ,
    // validate: function validatefullText(name){
    //     return name.includes(answers.cloze)  || "Full text answer should contain the partial and cloze! ";
    // }
  }])
  .then(function(answers){
    var newCard = new ClozeCard(answers.partial, answers.cloze, answers.fullText);
    newCard.printOut();
    ClozeSet.push(newCard);
    log(ClozeSet);
  });
  } else { 
  log(chalk.magenta('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'));
  }
});

// This file should define a Node module that exports a constructor for creating cloze- deletion flashcards
module.exports = ClozeCard;

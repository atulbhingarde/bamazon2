var inquirer = require('inquirer');
var fuzzy = require('fuzzy');

inquirer.registerPrompt('checkbox-plus'); //, require('./index'));

var colors = ['red', 'green', 'blue', 'yellow'];

inquirer.prompt([{
  type: 'checkbox-plus',
  name: 'colors',
  message: 'Enter colors',
  pageSize: 10,
  highlight: true,
  searchable: true,
  default: ['yellow', 'red'],
  source: function(answersSoFar, input) {

    input = input || '';

    return new Promise(function(resolve) {

      var fuzzyResult = fuzzy.filter(input, colors);

      var data = fuzzyResult.map(function(element) {
        return element.original;
      });

      resolve(data);
      
    });

  }
}]).then(function(answers) {

  console.log(answers.colors);

});
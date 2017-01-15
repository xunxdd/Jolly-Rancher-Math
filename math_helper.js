'use strict';
var questionGenerator = require('./question_generator');
var _ = require('lodash');

function MathHelper() {

  MathHelper.prototype.getAdditionQuestions = getAdditionQuestions;
  MathHelper.prototype.getSubtractionQuestions = getSubtractionQuestions;
  MathHelper.prototype.getQuestionSet = getQuestionSet;

  var questionHelper = new questionGenerator(),
    additionQuestions = questionHelper.additionQuestions,
    subtractionQuestions = questionHelper.subtractionQuestions,
    commonNames = questionHelper.commonNames;

  function getQuestionSet(len) {
    var additionLen = Math.ceil(len / 2),
      subtractionLen = len - additionLen,
      additionQuestions = getAdditionQuestions(additionLen),
      subtractionQuestions = getSubtractionQuestions(subtractionLen);

    var randomized = randomizeQuestions(_.concat(additionQuestions, subtractionQuestions), len);

    return randomized;
  }

  function getSubtractionQuestions(len) {
    var questions = subtractionQuestions.slice(),
      newQuestions;
    questions = randomizeQuestions(questions, len);

    newQuestions = _.map(questions, function (question, index) {
      var numbers = getRandomNumbersForSubtraction(),
        answer = numbers[0] - numbers[1] - (question.part3 ? numbers[2] : 0),
        text = getQuestionText(question, numbers, index);

      return getQuestion(index, text, answer);
    });

    return newQuestions;
  }

  function getAdditionQuestions(len) {
    var questions = additionQuestions.slice(),
      newQuestions;
    questions = randomizeQuestions(questions, len);

    newQuestions = _.map(questions, function (question, index) {
      var numbers = getRandomNumbersForAddition(),
        answer = numbers[0] + numbers[1] + (question.part3 ? numbers[2] : 0),
        text = getQuestionText(question, numbers, index);

      return getQuestion(index, text, answer);
    });

    return newQuestions;
  }

  function getQuestion(index, text, answer) {
    return {
      text: text,
      answer: answer
    };
  }

  function getQuestionText(question, numbers, index) {
    var names = getRandomNames(commonNames, index || 0),
      number1 = numbers[0], number2 = numbers[1], number3 = numbers[2],
      part3Text = '';

    var part1Text = getTemplatedText(question, 'part1', 'number1', number1, names);
    var part2Text = getTemplatedText(question, 'part2', 'number2', number2, names);

    if (question.part3) {
      part3Text = getTemplatedText(question, 'part3', 'number3', number3, names);
    }

    var questionText = getTemplatedQuestionText(question, names);
    return part1Text + part2Text + part3Text + questionText;
  }

  function getTemplatedQuestionText(question,  names) {
    var template = _.template(question.question),
      config = {
        name1: names[0],
        name2: names[1],
        name3: names[2]
      };

    var partText = template(config);

    return partText;
  }

  function getTemplatedText(question, key, numberKey, number, names) {
   // console.log('question part is ' + question[key]);
    var template = _.template(question[key]),
      obj = question.object[0],
      config = {
        name1: names[0],
        name2: names[1],
        name3: names[2],
        object: (number > 1 ? obj + 's' : obj)
      };

    config[numberKey] = number;
    var partText = template(config);

    return partText;
  }

  function getRandomNumbersForAddition() {
    var number1 = Math.ceil(Math.random() * 10 + 1),
      number2 = Math.ceil(Math.random() * 5),
      number3 = Math.ceil(Math.random() * 20);

    return [number1, number2, number3];
  }

  function getRandomNumbersForSubtraction() {
    var number1 = Math.ceil(Math.random() * 25 + 5),
      number2 = Math.ceil(Math.random() * (number1 - 2)),
      number3 = Math.ceil(Math.random() * (number1 - number2 - 2));

    return [number1, number2, number3];
  }

  function getRandomNames(names, index) {
    var nameIdx = Math.floor(Math.random() * names.length) + index,
        name1 , name2 , name3;

    if (nameIdx > names.length + 4) {
      nameIdx = names.length - 4;
    }

    if (nameIdx < 0) {
      nameIdx = 0;
    }

    name1 = names[nameIdx] || 'Young';
    name2 = names[nameIdx+1] || 'Emma';
    name3 = names[nameIdx+2] || 'Annya';
    return [name1, name2, name3];
  }


  function randomizeQuestions(questions, len) {
    var index = questions.length,
      questionSet = [],
      len = Math.min(len, questions.length);
    for (var j = 0; j < questions.length; j++) {
      var rand = Math.floor(Math.random() * index);
      index -= 1;
      var temp = questions[index];
      questions[index] = questions[rand];
      questions[rand] = temp;
      questionSet.push(questions[index]);
    }

    return questionSet.slice(0, len);
  }


}

module.exports = MathHelper;
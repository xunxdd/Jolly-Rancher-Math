'use strict';
var MathHelper = require('../math_helper');

describe('MathMagicHelper', function() {
  var mathMagic = new MathHelper();

  it ('get additions', function () {
    var questions = mathMagic.getAdditionQuestions(15);
    console.log('test addition out put');
    for (var i = 0; i < questions.length; i++) {

      console.log(questions[i]);
    }

  });

  it ('get subtraction questions', function () {
    var questions = mathMagic.getSubtractionQuestions(15);
    console.log('test subtraction out put');
    for (var i = 0; i < questions.length; i++) {

      //console.log(questions[i]);
    }

  });

  it ('get question set', function () {
    var questions = mathMagic.getQuestionSet(15);
    console.log('test question set out put', questions.length);
    for (var i = 0; i < questions.length; i++) {

      console.log(questions[i]);
    }

  });

});
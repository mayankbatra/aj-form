/**
 * AnswersController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    submit: function(req, res) {
        var answers = req.body;
        for (key in answers) {
            fn = answers[key]['calculator'];
            console.log(calculators[fn]);
            if (typeof calculators[fn] == 'function')
                calculators[fn](answers[key]);

        }
        res.send(200);
    }
};

calculators = {};

calculators.ajTextCalculator = function(answer) {
    var marks;
    if (answer.answer != null && answer.answer != undefined)
        if (answer.answer == answer.solution)
            marks = 1;
        else
            marks = 0;
    Answers.create({
        marks: marks,
        question: answer.id
    }).exec(function(err, created) {
        if(!err)
        	return console.log('Created user with id ' + created.id);
    });

    return marks;
}

calculators.ajPicklistCalculator = function(answer) {
    var marks;
    if (answer.answer != null && answer.answer != undefined)
        if (answer.answer == answer.solution)
            marks = 1;
        else
            marks = 0;
    Answers.create({
        marks: marks,
        question: answer.id
    }).exec(function(err, created) {
        if(!err)
        	return console.log('Created user with id ' + created.id);
    });

    return marks;
}

calculators.ajRadioCalculator = function(answer) {
    var marks;
    if (answer.answer != null && answer.answer != undefined)
        if (answer.answer == answer.solution)
            marks = 1;
        else
            marks = 0;
    Answers.create({
        marks: marks,
        question: answer.id
    }).exec(function(err, created) {
        if(!err)
        	return console.log('Created user with id ' + created.id);
    });

    return marks;
}
/**
 * Answers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Define an adapter to use
    adapter: 'asaanMongo',

    schema: true,

    attributes: {
        marks: {
            type: 'float',
            required: true
        },
        question: {
            model: 'Questions'
        }
    }
};
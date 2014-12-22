/**
 * Questions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Define an adapter to use
    adapter: 'asaanMongo',

    schema: true,

    attributes: {
        widget: {
            type: 'String',
            required: true
        },
        name: {
            type: 'String',
            required: true
        },
        label: {
            type: 'String',
            required: true
        },
        solution: {
            type: 'String',
            required: true
        },
        calculator: {
            type: 'String',
            required: true
        },
        skill: {
            type: 'String',
            required: true
        },
        widgetData : {
            type: 'json'
        },
        options: {
            type: 'Array'
        }
    }
};
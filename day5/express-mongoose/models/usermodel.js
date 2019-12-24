var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Define schema 
 *      |
 *      +----> Create Model from schema which creates collection 
 *                          |
 *                          +----> Operate on model object
 * 
 */

var userSchema = new Schema({
    name: { type: String , unique: true},
    city: { type: String },
    job: { type: String }
});


var userModel = mongoose.model('user', userSchema, 'userlist');
module.exports = userModel;
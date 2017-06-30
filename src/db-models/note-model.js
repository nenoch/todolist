var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
    title: String,
    content:  String,
    rank: Number
});

var Note = mongoose.model('Note', noteSchema);

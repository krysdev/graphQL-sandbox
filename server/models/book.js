const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);
// MODEL is in other words a COLLECTION on MongoDB
// here we create a collection called 'Book' that has objects that look like 'bookSchema'
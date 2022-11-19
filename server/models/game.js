let mongoose = require('mongoose');

//create model, aka the Schema, which essentially is all of the necessary data
//an element in my table needs to have
let gameModel = mongoose.Schema({
    title: String,
    completed: String,
    hours: String,
    comments: String,
    rating: String,
},
{
    collection: "list_of_games"
    //the actual name of the database
}
);

module.exports = mongoose.model('Game', gameModel);
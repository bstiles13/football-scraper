const mongoose = require('mongoose');

let passingSchema = mongoose.Schema({
    player: String,
    team: String,
    completions: Number,
    attempts: Number,
    yards: Number,
    touchdowns: Number,
    interceptions: Number,
    rating: Number,
    time_saved: {
        type: Date,
        default: Date.now
    }
})

let Passing = mongoose.model('Passing', passingSchema);

module.exports = Passing;
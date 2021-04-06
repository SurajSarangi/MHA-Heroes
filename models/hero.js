const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const heroSchema = new Schema({
    hname: {
        type: String,
        required: true
    },
    rname: {
        type: String,
        required: true
    },
    quirk: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    body: String
}, { timestamps: true });

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
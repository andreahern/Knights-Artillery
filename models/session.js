const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    joinCode: {
        type: String,
        required: true,
        unique: true   
    },
    hostID: {
        type: String,
    },
    guestID: {
        type: String,
    },
    hostName: {
        type: String,
        required: true
    },
    guestName: {
        type: String,
    }
});

const Session = mongoose.model('Session', sessionSchema);
exports.Session = Session;
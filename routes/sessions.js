const {Session} = require('../models/session');
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

router.get('/', async(req, res) => {
    try {
        const sessions = await Session.find();
        res.send(sessions);
    } catch(err) {
        res.error(err);
    }
});

router.post('/host', async(req, res) => {
    try {
        const {hostName} = req.body;
        const joinCode = uniqid();
        const session = new Session({joinCode, hostName});
        session.save();
        res.send(session);
    } catch(err) {
        res.error(err);
    }
});

router.post('/join', async(req, res) => {
    try {
        const {joinCode, guestName} = req.body;
        const session = await Session.findOneAndUpdate({joinCode}, {guestName}, {new: true});

        res.send(session);
    } catch(err) {
        res.error(err);
    }
});

module.exports = router;
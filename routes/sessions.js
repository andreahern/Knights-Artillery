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

router.post('/', async(req, res) => {
    try {
        const {hostID, hostName} = req.body;
        const joinCode = uniqid();
        const session = new Session({joinCode, hostID, hostName});
        session.save();
        res.send(session);
    } catch(err) {
        res.error(err);
    }
});

module.exports = router;
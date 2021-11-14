const User = require("../models/User");
const Track = require("../models/Track");
const History = require("../models/TrackHistory");
const express = require("express");
const dayjs = require('dayjs');

const router = express.Router();

router.post('/', async (req,res) => {
    const token = req.get('Authorization');

    if (!req.body.track) {
        return res.status(400).send('Data Not valid');
    }

    if (!token) {
        return res.status(401).send({error: "No token present"});
    }

    const user = await User.findOne({token});

    if (!user) {
        return res.status(401).send({error: "Wrong token"});
    }

    const date = dayjs(new Date());

    const historyData = {
        datetime: date,
        track: req.body.track,
        user: user._id,
    }

    const history = new History(historyData);

    try {
        await history.save();
        res.send(history);
    } catch (e) {
        res.status(500).send(e);
    }

});

module.exports = router;
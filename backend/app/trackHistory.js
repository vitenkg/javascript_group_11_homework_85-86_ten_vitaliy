const History = require("../models/TrackHistory");
const express = require("express");
const dayjs = require('dayjs');
const auth = require("../middleware/auth");

const router = express.Router();

router.get('/', auth, async (req, res) => {
    const history = await History.find(req.user._id).populate('track', 'name');

    try {
        res.send(history);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.post('/', auth, async (req, res) => {
    const date = dayjs(new Date());

    const historyData = {
        datetime: date,
        track: req.body.track,
        user: req.user._id,
    }
    console.log(historyData);

    const history = new History(historyData);

    try {
        await history.save();
        res.send(history);
    } catch (e) {
        res.status(500).send(e);
    }

});

module.exports = router;
const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const TrackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lasting: String,
    trackNumber: Number,
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }

});

TrackSchema.plugin(idValidator);

const Track = mongoose.model('Track', TrackSchema);
module.exports = Track;
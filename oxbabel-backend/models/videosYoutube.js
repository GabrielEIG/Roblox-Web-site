const mongoose = require("mongoose");

//Schema
const videosYoutubeSchema = mongoose.Schema({
    id: String,
    title: String,
    url: String,
    event: String
})

const Videos = mongoose.model('Video', videosYoutubeSchema);

module.exports = Videos;

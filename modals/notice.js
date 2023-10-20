const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    title: String,
    link: String,
    date: Date,
    semester: String,
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Notice', NoticeSchema);
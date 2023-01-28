const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    tag: { type: String },
    author: { type: String },
    content: { type: String, required: true }
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Product', BlogSchema);
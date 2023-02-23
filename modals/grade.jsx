const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    uid: String,
    marks: [String],    
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('User', GradeSchema);
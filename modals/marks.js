const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    theory_marks: Number,
    assignment_marks: Number,
    assignment_weightage: Number,
    semester: Number,
    course: String,
});

const MarksSchema = new mongoose.Schema({
    // userId: { type: String, unique: true },
    uid: String,
    marks: [marksSchema],    
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Marks', MarksSchema);
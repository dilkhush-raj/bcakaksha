const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
    name: String,
    url: String,
});

const BlockSchema = new mongoose.Schema({
    name: String,
    units: [UnitSchema],
});

const AssignmentSchema = new mongoose.Schema({
    name: String,
    url: String,
});

const CourseSchema = new mongoose.Schema({
    name: String,
    slug: String,
    semester: Number,
    examDate: Date,
    block: [BlockSchema],
    assignment: [AssignmentSchema],
});


mongoose.models = {}
export default mongoose.model('Course', CourseSchema);
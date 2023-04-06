const mongoose = require('mongoose');

const socilaLinkSchema = new mongoose.Schema({
  displayText: {
    type: String,
    required: true
  },
  link: String
});

const marksSchema = new mongoose.Schema({
    theory_marks: Number,
    assignment_marks: Number,
    assignment_weightage: Number,
    semester: Number,
});

const UserSchema = new mongoose.Schema({
    // userId: { type: String, unique: true },
    uid: String,
    name: String,
    profileImage: String,
    semester: Number,
    about: String,
    rc: String,
    github: String,
    linkedin: String,
    portfolio: String,
    social: [socilaLinkSchema],
    marks: [marksSchema],

    
    
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

const socilaLinkSchema = new mongoose.Schema({
  displayText: {
    type: String,
    required: true
  },
  link: String
});

const UserSchema = new mongoose.Schema({
    userId: { type: String, unique: true },
    uid: String,
    name: String,
    profileImage: String,
    semester: Number,
    about: String,
    rc: String,
    social: [socilaLinkSchema]

    
    
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('User', UserSchema);
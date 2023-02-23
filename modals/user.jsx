const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uid: String,
    name: String,
    profileImage: String,
    semester: String,
    about: String,
    rc: String,
    
    
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('User', UserSchema);
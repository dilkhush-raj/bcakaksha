// models/SocialLink.js

import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  displayText: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const SocialLink = mongoose.models.SocialLink || mongoose.model('SocialLink', socialLinkSchema);

export default SocialLink;

import mongoose from 'mongoose';

import User from './users';

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  first_name: {
    type: String,
    trim: true,
    lowercase: true
  },
  last_name: {
    type: String,
    trim: true,
    lowercase: true
  }
});

export default mongoose.model('UserProfile', schema);

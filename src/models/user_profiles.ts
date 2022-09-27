import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user_id: {
    type: Number
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

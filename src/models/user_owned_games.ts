import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  app_id: {
    type: Number
  },
  user_id: {
    type: Number
  },
  playtime_forever: {
    type: Number
  },
  last_played: {
    type: Date
  }
});

export default mongoose.model('UserOwnedGame', schema);

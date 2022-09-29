import mongoose from 'mongoose';

import User from './users';

const schema = new mongoose.Schema({
  app_id: {
    type: Number
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  playtime_forever: {
    type: Number
  },
  last_played: {
    type: Date
  }
});

export default mongoose.model('UserOwnedGame', schema);

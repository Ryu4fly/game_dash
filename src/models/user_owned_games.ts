import mongoose from 'mongoose';

import GameDetail from './game_details';
import User from './users';

const schema = new mongoose.Schema({
  app_id: {
    type: Number,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  playtime_forever: {
    type: Number,
    required: true
  },
  last_played: {
    type: Date,
    required: true
  },
  game_detail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: GameDetail
  }
});

export default mongoose.model('UserOwnedGame', schema);

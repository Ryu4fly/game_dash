import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  app_id: {
    type: String,
    required: true
  },
  header_image: {
    type: String
  }
});

schema.pre('save', function(){
  this.header_image = `https://cdn.cloudflare.steamstatic.com/steam/apps/${this.app_id}/header.jpg?t=1660571036`
})

export default mongoose.model('GameDetail', schema);

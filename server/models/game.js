// Creating this in case we have use for it - Janet

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: 'String', required: true },
  gameTypes: [{ type: 'String', required: true }],
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);

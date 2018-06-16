import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: 'String', required: true },
  game: { type: 'String', required: true },
  scheduledDate: { type: 'Date', required: true },
  slots: { type: 'Number', required: true },
  isFull: { type: "Boolean", default: false },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  owner: { type: 'String', required: true}
});

export default mongoose.model('Event', eventSchema);

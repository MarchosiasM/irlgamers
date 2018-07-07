import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: 'String', required: true },
  address: {type: 'String', required: true },
  city: {type: 'String', required: true },
  state: {type: 'String', required: true },
  zipcode: {type: 'String', required: true },
  game: { type: 'String', required: true },
  gameType: { type: 'String', required: true },
  scheduledDate: { type: 'String', required: true },
  scheduledTime: { type: 'String', required: true },
  slots: { type: 'Number', required: true },
  notes: { type: 'String', required: false },
  // isFull: { type: 'Boolean', default: false }, // removing this for now, will use logic to compute full status
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  owner: { type: 'String', required: true }, 
  attendees: [String], 
});

export default mongoose.model('Event', eventSchema);

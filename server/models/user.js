import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// DO NOT DELETE MAY NEED THIS - Rob
// function getFirstName(fullName) {
//    var words = fullName.toString().split(' ');
//    return words[0]
// }

// function getLastName(fullName) {
//     var words = fullName.toString().split(' ');
//     return words[1]
// }

const userSchema = new Schema({
  firstName: { type: 'String', required: true },
  lastName: { type: 'String', required: true },
  fullName: { type: 'String', required: true },
  email: { type: 'String', required: true },
  preferences: { type: 'String', required: true },
  eventsSignedUp: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);

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
    displayName: { type: 'String', required: true },
    lastName: { type: 'String', required: false },
    fullName: { type: 'String', required: false },
    email: { type: 'String', required: true },
    preferences: { type: 'String', required: false },
    eventsSignedUp: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    slug: { type: 'String', required: true },
    cuid: { type: 'String', unique : true, required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);

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
  firstName: { type: 'String', required: false },
  lastName: { type: 'String', required: false },
  fullName: { type: 'String', required: true },
  email: { type: 'String', required: true },
  photoUrl: { type: 'String', required: false},
  preferences: [String],
  eventsSignedUp: [Object],
  firebase_id: {type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

userSchema.pre('save', function(next) {
  const newUser = this
  mongoose.model('User').find({firebase_id: newUser.firebase_id})
  .exec((err, docs) => {
    if (err) return console.log(err, "error")
    console.log(docs, "docs")
    if (docs.length === 0) next()
    next (new Error("User already Exists"))
  }) 

})

export default mongoose.model('User', userSchema);

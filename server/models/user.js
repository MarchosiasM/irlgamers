import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: 'String', required: true },
    lastName: { type: 'String', required: true },
    fullName: { type: 'String', required: true },
    email: { type: 'String', required: true },
    preferences: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);

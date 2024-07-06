const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['quiz_creator', 'quiz_taker'], default: 'quiz_taker' }
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
//   cases: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Case', // Asumiendo que tienes un modelo llamado "Case"
//     }
//   ],
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;

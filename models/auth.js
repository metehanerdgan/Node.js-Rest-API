const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,  // Şifre alanı
        required: true // Zorunlu alan
    },
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('auth', AuthSchema);

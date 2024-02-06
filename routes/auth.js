const express = require('express');
const { register, login } = require('../controllers/auth.js');

const router = express.Router();

// Kullanıcı kaydı ve girişi rotalarını tanımlar
router.post('/register', register);
router.post('/login', login);

module.exports = router;

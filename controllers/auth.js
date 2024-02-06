const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.js');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body; // İstekten kullanıcı bilgilerini alır
        const user = await Auth.findOne({ email }); // E-posta adresine göre kullanıcıyı bulur
        if (user) { // Kullanıcı varsa hata döndürür
            return res.status(500).json({ message: "Bu email hesabı zaten bulunmakta !!" });
        }
        if (password.length < 6) { // Parola uzunluğunu kontrol eder
            return res.status(500).json({ message: "Parolanız 6 karakterden küçük olmamalı !!" });
        }

        const passwordHash = await bcrypt.hash(password, 12); // Parolayı hash'ler

        const newUser = await Auth.create({ username, email, password: passwordHash }); // Yeni kullanıcı oluşturur

        const userToken = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' }); // JWT token oluşturur

        res.status(201).json({ // Başarılı cevap döndürür
            status: "OK",
            newUser,
            userToken
        });

    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body; // İstekten e-posta ve parola bilgisini alır
        const user = await Auth.findOne({ email }); // E-posta adresine göre kullanıcıyı bulur
        if (!user) { // Kullanıcı yoksa hata döndürür
            return res.status(500).json({ message: "Böyle bir kullanıcı bulunamadı....." });
        }
        const comparePassword = await bcrypt.compare(password, user.password); // Parolayı karşılaştırır
        if (!comparePassword) { // Parola eşleşmiyorsa hata döndürür
            return res.status(500).json({ message: "Parolanız Yanlış...." });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' }); // JWT token oluşturur
        res.status(201).json({ // Başarılı cevap döndürür
            status: "Ok",
            user,
            token
        });
    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };

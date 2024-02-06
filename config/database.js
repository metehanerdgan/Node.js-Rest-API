const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Auth = require('./routes/auth.js');
const Post = require('./routes/post.js');

dotenv.config(); // Çevresel değişkenleri yükler

const app = express(); // Express uygulaması oluşturur

app.use(cors()); // Cross-origin resource sharing (CORS) için izin verir
app.use(express.json({ limit: '30mb', extended: true })); // JSON veri sınırlarını ve uzantıları ayarlar
app.use(express.urlencoded({ limit: '30mb', extended: true })); // URL kodlamasını ayarlar

app.use('/', Auth); // /auth rotasını Auth controller'ına yönlendirir
app.use('/', Post); // /post rotasını Post controller'ına yönlendirir

const PORT = process.env.PORT || 3000; // Port numarasını belirler
db(); // Veritabanı bağlantısını kurar

app.listen(PORT, () => {
    console.log("Server is running on port : 3000"); // Sunucunun çalıştığı portu konsola yazar
});

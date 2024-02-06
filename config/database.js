const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGO_URI, { // MongoDB'ye bağlanır
        useNewUrlParser: true, // Yeni URL parser'ı kullanır
        useUnifiedTopology: true // Birleştirilmiş topolojiyi kullanır
    }).then(() => {
        console.log("MongoDB Connected"); // Bağlantı başarılı olduğunda konsola yazılır
    }).catch((err) => {
        throw new Error(err.message); // Bağlantı hatası durumunda hata fırlatılır
    });
};

module.exports = db;

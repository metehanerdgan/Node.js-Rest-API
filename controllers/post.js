const PostSchema = require("../models/post.js");

const getPosts = async (req, res) => {
    try {
        const getPosts = await PostSchema.find(); // Tüm gönderileri getirir
        res.status(201).json({ // Başarılı cevap döndürür
            getPosts
        });
    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body); // Yeni gönderi oluşturur
        res.status(201).json({ // Başarılı cevap döndürür
            newPost
        });
    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

const getDetail = async (req, res) => {
    try {
        const { id } = req.params; // İstekten gönderi ID'sini alır
        const detailPost = await PostSchema.findById(id); // Belirli bir gönderiyi getirir
        res.status(201).json({ // Başarılı cevap döndürür
            detailPost
        });
    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

const getUpdate = async (req, res) => {
    try {
        const { id } = req.params; // İstekten gönderi ID'sini alır
        const updatePost = await PostSchema.findByIdAndUpdate(id, req.body, { new: true }); // Gönderiyi günceller
        res.status(201).json({ // Başarılı cevap döndürür
            updatePost
        });
    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params; // İstekten gönderi ID'sini alır
        const newPost = await PostSchema.findByIdAndDelete(id); // Gönderiyi siler
        res.status(201).json({ // Başarılı cevap döndürür
            message: "Silme işleminiz başarılı....."
        });
    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

const searchPost = async (req, res) => {
    const { search, tag } = req.query; // İstekten arama ve etiket bilgilerini alır
    try {
        const title = new RegExp(search, "i"); // Başlık için arama düzenli ifadesi oluşturur

        const posts = await PostSchema.find({ $or: [{ title }], tag: { $in: tag.split(",") } }); // Gönderileri arar

        res.status(200).json({ // Başarılı cevap döndürür
            posts
        });

    } catch (error) { // Hata durumunda hata döndürür
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createPost, getDetail, getUpdate, getPosts, deletePost, searchPost };

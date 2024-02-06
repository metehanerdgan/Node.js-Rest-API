Projede, kullanıcı kaydı, girişi, gönderi oluşturma, güncelleme, silme gibi temel CRUD (Create, Read, Update, Delete) işlemleri yapılabiliyor. Ayrıca, JWT token kullanılarak basit bir kimlik doğrulama sistemi uygulanmış durumda.

Bu Node.js Rest API projesi aşağıdaki öğelerden oluşuyor:

index.js:

Express, cors ve dotenv kütüphaneleri kullanılarak bir Express uygulaması oluşturuluyor.
MongoDB bağlantısı yapılmak üzere './config/database.js' dosyası çağrılıyor.
API'nin JSON ve URL kodlaması için middleware'ler tanımlanıyor.
'/auth' ve '/post' rotaları için yönlendirme yapılıyor.
Uygulama belirtilen portta dinlemeye alınıyor.

config/database.js:

MongoDB'ye bağlanmak için bir işlev sağlıyor.

controllers/auth.js:

Kullanıcı kaydı (register) ve giriş (login) işlevleri bulunuyor.
Kullanıcı bilgileri kontrol ediliyor, hatalar yönetiliyor ve JWT token'ları oluşturuluyor.

controllers/post.js:

Gönderi (post) işlemleri için işlevler içeriyor: gönderileri getirme, oluşturma, detayları alma, güncelleme ve silme.
Arama işlevi de mevcut.

middleware/auth.js:

JWT token'larını doğrulamak için bir ara yazılım işlevi sağlıyor.
İsteğin kimliğini (userID) ayarlıyor.

models/auth.js ve models/post.js:

Mongoose ile MongoDB için şema tanımları sağlıyor.
'auth' koleksiyonu için kullanıcı ve 'post' koleksiyonu için gönderi şemaları bulunuyor.

routes/auth.js ve routes/post.js:

'/auth' ve '/post' rotaları için ilgili işlevlerin bulunduğu kontrolcüleri içeriyor.
Ayrıca yetkilendirme gerektiren bazı işlemler için 'auth' middleware'ini çağırıyor.

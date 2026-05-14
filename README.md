Discord Voice Welcome Bot (Sesli Karşılama Sistemi)
Bu altyapı, sunucunuzdaki özel üyelerin (VIP, Yönetim veya belirli bir grup) ses kanallarına giriş yapmasını çok daha "anlamlı" hale getirir. Belirlediğiniz role sahip biri kanala girdiği anda bot otomatik olarak o kanala bağlanır ve seçtiğiniz ses dosyasını oynatır.

✨ Öne Çıkan Özellikler
Rol Duyarlılığı: Sadece belirlediğiniz Role ID'sine sahip kullanıcılar için çalışır.

Otomatik Kanal Takibi: Bot, kullanıcının hangi kanalda olduğunu otomatik algılar ve oraya ışınlanır.

Discord.js v14: En güncel Discord kütüphanesi ile optimize edilmiştir.

Merkezi Ayarlar: Tüm yapılandırmayı tek bir dosya (settings.json veya config.js) üzerinden yapabilirsiniz.

⚙️ Yapılandırma (Settings)
Botu kendinize göre özelleştirmek için şu bilgileri girmeniz yeterlidir:

GuildID: Sunucunuzun ID'si.

LogChannelID: (Opsiyonel) İşlem kayıtlarının tutulacağı kanal.

RoleID: Sesi tetikleyecek olan rolün ID'si.

AudioFile: Çalınacak ses dosyasının yolu (Örn: hayirlicumalar.mp3).

🛠 Kurulum
Dosyaları klasöre çıkarın.

npm install komutu ile @discordjs/voice ve diğer bağımlılıkları yükleyin.

Ayarlarınızı yapın ve node index.js ile botu ateşleyin!

💡 Geliştirici Notu
Altyapı oldukça esnektir; sadece "Hayırlı Cumalar" değil, giriş müziği (intro) veya uyarı sesleri için de kolayca modifiye edilebilir.

İyi kullanımlar! 🚀

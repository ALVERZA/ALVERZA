# ALVERZA Marketplace — MVP starter

Bu layihə ALVERZA üçün mobil uyğun, çoxsatıcılı marketplace interfeysinin başlanğıc kodudur.

## İşə salmaq
1. Node.js 18+ quraşdırın.
2. Terminalda layihə qovluğuna daxil olun.
3. `npm install`
4. `npm run dev`
5. Brauzerdə `http://localhost:3000` açın.

## Səhifələr
- `/` — ana səhifə, məhsul kataloqu, kateqoriya filtri və demo səbət sayğacı
- `/seller` — satıcı müraciət forması (hazırda demo)
- `/cart` — sifariş məlumatları forması (hazırda demo)

## Vacib: real satış üçün tamamlanmalı işlər
Bu kod işlək frontend prototipidir, hazır istehsal marketplace-i deyil. Formlar hələ serverə məlumat yazmır, giriş/çıxış, real səbət və sifariş bazası, satıcı moderasiyası, ödəniş və kuryer inteqrasiyası yoxdur.

Real buraxılışdan əvvəl:
- Supabase/PostgreSQL bazası və server-side API qoşun.
- Auth və rollar: customer, seller, admin.
- Satıcı KYC/vergi və bank hesabı yoxlaması, müqavilə və məhsul moderasiyası əlavə edin.
- Ödəniş provayderi ilə marketplace/komissiya və satıcıya payout modelini yazılı təsdiqləyin.
- Kuryer tərəfdaşları ilə müqavilə və API inteqrasiyası qurun.
- Məxfilik, istifadə şərtləri, qaytarılma, istehlakçı hüquqları və vergi tələblərini hüquqşünas/mühasiblə yoxlayın.
- Təhlükəsizlik testləri, ehtiyat nüsxə və monitorinq qurun.

## Demo məlumatlar
Məhsullar və qiymətlər nümunədir; real təklif deyil. Şəkillər Unsplash URL-lərindən yüklənir.

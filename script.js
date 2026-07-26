let tempProfilePic = null; 

const translations = {
    "English (United States)": {
        home: "Home", new: "New", library: "Library", search: "Search",
        playlists: "Playlists", artists: "Artists", albums: "Albums", songs: "Songs",
        tv_movies: "TV & Movies", music_videos: "Music Videos", genres: "Genres",
        compilations: "Compilations", composers: "Composers", play: "Play", shuffle: "Shuffle",
        unknown_art: "Unknown Art", not_playing: "Not Playing", edit_sections: "Edit Sections",
        settings: "Settings", profile: "Profile", unknown_id: "Unknown ID",
        account_info: "Account Information", enter_details: "Enter Details", edit: "Edit",
        appearance: "Appearance", user_interface: "User Interface", languages_header: "LANGUAGES",
        select_language: "Languages", edit_profile: "Edit Profile", choose_photo: "Choose Photo",
        remove_photo: "Remove Photo", clear_data: "Clear Data", theme: "Theme",
        system: "System", light: "Light", dark: "Dark", effects: "Effects",
        blur_intensity: "Blur Intensity", music: "Music", browse_music: "Browse Your Music",
        languages_title: "Languages", selected_language_label: "Selected Language",
        other_languages_label: "Other Languages", reset_order: "Reset Order",
        reset_library: "Reset Library?", reset_library_text: "Do you want to reset the library order to its default layout?",
        no: "No", yes: "Yes"
    },
    "English (United Kingdom)": {
        home: "Home", new: "New", library: "Library", search: "Search",
        playlists: "Playlists", artists: "Artists", albums: "Albums", songs: "Songs",
        tv_movies: "TV & Movies", music_videos: "Music Videos", genres: "Genres",
        compilations: "Compilations", composers: "Composers", play: "Play", shuffle: "Shuffle",
        unknown_art: "Unknown Art", not_playing: "Not Playing", edit_sections: "Edit Sections",
        settings: "Settings", profile: "Profile", unknown_id: "Unknown ID",
        account_info: "Account Information", enter_details: "Enter Details", edit: "Edit",
        appearance: "Appearance", user_interface: "User Interface", languages_header: "LANGUAGES",
        select_language: "Languages", edit_profile: "Edit Profile", choose_photo: "Choose Photo",
        remove_photo: "Remove Photo", clear_data: "Clear Data", theme: "Theme",
        system: "System", light: "Light", dark: "Dark", effects: "Effects",
        blur_intensity: "Blur Intensity", music: "Music", browse_music: "Browse Your Music",
        languages_title: "Languages", selected_language_label: "Selected Language",
        other_languages_label: "Other Languages", reset_order: "Reset Order",
        reset_library: "Reset Library?", reset_library_text: "Do you want to reset the library order to its default layout?",
        no: "No", yes: "Yes"
    },
    "English (Australia)": {
        home: "Home", new: "New", library: "Library", search: "Search",
        playlists: "Playlists", artists: "Artists", albums: "Albums", songs: "Songs",
        tv_movies: "TV & Movies", music_videos: "Music Videos", genres: "Genres",
        compilations: "Compilations", composers: "Composers", play: "Play", shuffle: "Shuffle",
        unknown_art: "Unknown Art", not_playing: "Not Playing", edit_sections: "Edit Sections",
        settings: "Settings", profile: "Profile", unknown_id: "Unknown ID",
        account_info: "Account Information", enter_details: "Enter Details", edit: "Edit",
        appearance: "Appearance", user_interface: "User Interface", languages_header: "LANGUAGES",
        select_language: "Languages", edit_profile: "Edit Profile", choose_photo: "Choose Photo",
        remove_photo: "Remove Photo", clear_data: "Clear Data", theme: "Theme",
        system: "System", light: "Light", dark: "Dark", effects: "Effects",
        blur_intensity: "Blur Intensity", music: "Music", browse_music: "Browse Your Music",
        languages_title: "Languages", selected_language_label: "Selected Language",
        other_languages_label: "Other Languages", reset_order: "Reset Order",
        reset_library: "Reset Library?", reset_library_text: "Do you want to reset the library order to its default layout?",
        no: "No", yes: "Yes"
    },
    "English (Canada)": {
        home: "Home", new: "New", library: "Library", search: "Search",
        playlists: "Playlists", artists: "Artists", albums: "Albums", songs: "Songs",
        tv_movies: "TV & Movies", music_videos: "Music Videos", genres: "Genres",
        compilations: "Compilations", composers: "Composers", play: "Play", shuffle: "Shuffle",
        unknown_art: "Unknown Art", not_playing: "Not Playing", edit_sections: "Edit Sections",
        settings: "Settings", profile: "Profile", unknown_id: "Unknown ID",
        account_info: "Account Information", enter_details: "Enter Details", edit: "Edit",
        appearance: "Appearance", user_interface: "User Interface", languages_header: "LANGUAGES",
        select_language: "Languages", edit_profile: "Edit Profile", choose_photo: "Choose Photo",
        remove_photo: "Remove Photo", clear_data: "Clear Data", theme: "Theme",
        system: "System", light: "Light", dark: "Dark", effects: "Effects",
        blur_intensity: "Blur Intensity", music: "Music", browse_music: "Browse Your Music",
        languages_title: "Languages", selected_language_label: "Selected Language",
        other_languages_label: "Other Languages", reset_order: "Reset Order",
        reset_library: "Reset Library?", reset_library_text: "Do you want to reset the library order to its default layout?",
        no: "No", yes: "Yes"
    },
    "Spanish (España)": {
        home: "Inicio", new: "Nuevo", library: "Biblioteca", search: "Buscar",
        playlists: "Listas", artists: "Artistas", albums: "Álbumes", songs: "Canciones",
        tv_movies: "TV y Películas", music_videos: "Videos musicales", genres: "Géneros",
        compilations: "Recopilaciones", composers: "Compositores", play: "Reproducir", shuffle: "Aleatorio",
        unknown_art: "Arte Desconocido", not_playing: "No se reproduce", edit_sections: "Editar secciones",
        settings: "Ajustes", profile: "Perfil", unknown_id: "ID Desconocido",
        account_info: "Información de cuenta", enter_details: "Ingresar detalles", edit: "Editar",
        appearance: "Apariencia", user_interface: "Interfaz de usuario", languages_header: "IDIOMAS",
        select_language: "Idiomas", edit_profile: "Editar perfil", choose_photo: "Elegir foto",
        remove_photo: "Eliminar foto", clear_data: "Borrar datos", theme: "Tema",
        system: "Sistema", light: "Claro", dark: "Oscuro", effects: "Efectos",
        blur_intensity: "Intensidad de desenfoque", music: "Música", browse_music: "Explorar tu música",
        languages_title: "Idiomas", selected_language_label: "Idioma seleccionado",
        other_languages_label: "Otros idiomas", reset_order: "Restablecer orden",
        reset_library: "¿Restablecer biblioteca?", reset_library_text: "¿Deseas restablecer el orden de la biblioteca al diseño predeterminado?",
        no: "No", yes: "Sí"
    },
    "Spanish (Latinoamérica)": {
        home: "Inicio", new: "Novedades", library: "Biblioteca", search: "Buscar",
        playlists: "Listas", artists: "Artistas", albums: "Álbumes", songs: "Canciones",
        tv_movies: "TV y Películas", music_videos: "Videos musicales", genres: "Géneros",
        compilations: "Recopilaciones", composers: "Compositores", play: "Reproducir", shuffle: "Aleatorio",
        unknown_art: "Carátula desconocida", not_playing: "No se está reproduciendo", edit_sections: "Editar secciones",
        settings: "Configuración", profile: "Perfil", unknown_id: "ID desconocido",
        account_info: "Información de la cuenta", enter_details: "Ingresar datos", edit: "Editar",
        appearance: "Apariencia", user_interface: "Interfaz de usuario", languages_header: "IDIOMAS",
        select_language: "Idiomas", edit_profile: "Editar perfil", choose_photo: "Elegir foto",
        remove_photo: "Eliminar foto", clear_data: "Borrar datos", theme: "Tema",
        system: "Sistema", light: "Claro", dark: "Oscuro", effects: "Efectos",
        blur_intensity: "Intensidad de desenfoque", music: "Música", browse_music: "Explorar tu música",
        languages_title: "Idiomas", selected_language_label: "Idioma seleccionado",
        other_languages_label: "Otros idiomas", reset_order: "Restablecer orden",
        reset_library: "¿Restablecer biblioteca?", reset_library_text: "¿Quieres restablecer el orden de la biblioteca al diseño predeterminado?",
        no: "No", yes: "Sí"
    },
    "French (France)": {
        home: "Accueil", new: "Nouveau", library: "Bibliothèque", search: "Rechercher",
        playlists: "Listes", artists: "Artistes", albums: "Albums", songs: "Morceaux",
        tv_movies: "TV & Films", music_videos: "Vidéos", genres: "Genres",
        compilations: "Compilations", composers: "Compositeurs", play: "Lecture", shuffle: "Aléatoire",
        unknown_art: "Art Inconnu", not_playing: "Pas de lecture", edit_sections: "Modifier les sections",
        settings: "Réglages", profile: "Profil", unknown_id: "ID Inconnu",
        account_info: "Informations de compte", enter_details: "Entrer les détails", edit: "Modifier",
        appearance: "Apparence", user_interface: "Interface utilisateur", languages_header: "LANGUES",
        select_language: "Langues", edit_profile: "Modifier le profil", choose_photo: "Choisir une photo",
        remove_photo: "Supprimer la photo", clear_data: "Effacer les données", theme: "Thème",
        system: "Système", light: "Clair", dark: "Sombre", effects: "Effets",
        blur_intensity: "Intensité du flou", music: "Musique", browse_music: "Parcourir votre musique",
        languages_title: "Langues", selected_language_label: "Langue sélectionnée",
        other_languages_label: "Autres langues", reset_order: "Réinitialiser l'ordre",
        reset_library: "Réinitialiser la bibliothèque ?", reset_library_text: "Voulez-vous réinitialiser l'ordre de la bibliothèque à sa disposition par défaut ?",
        no: "Non", yes: "Oui"
    },
    "French (Canada)": {
        home: "Accueil", new: "Nouveautés", library: "Bibliothèque", search: "Rechercher",
        playlists: "Listes de lecture", artists: "Artistes", albums: "Albums", songs: "Chansons",
        tv_movies: "Télé et films", music_videos: "Vidéoclips", genres: "Genres",
        compilations: "Compilations", composers: "Compositeurs", play: "Lecture", shuffle: "Aléatoire",
        unknown_art: "Pochette inconnue", not_playing: "Aucune lecture", edit_sections: "Modifier les sections",
        settings: "Réglages", profile: "Profil", unknown_id: "ID inconnu",
        account_info: "Information sur le compte", enter_details: "Entrer les détails", edit: "Modifier",
        appearance: "Apparence", user_interface: "Interface utilisateur", languages_header: "LANGUES",
        select_language: "Langues", edit_profile: "Modifier le profil", choose_photo: "Choisir une photo",
        remove_photo: "Supprimer la photo", clear_data: "Effacer les données", theme: "Thème",
        system: "Système", light: "Clair", dark: "Sombre", effects: "Effets",
        blur_intensity: "Intensité du flou", music: "Musique", browse_music: "Parcourir votre musique",
        languages_title: "Langues", selected_language_label: "Langue sélectionnée",
        other_languages_label: "Autres langues", reset_order: "Réinitialiser l'ordre",
        reset_library: "Réinitialiser la bibliothèque?", reset_library_text: "Voulez-vous réinitialiser l'ordre de la bibliothèque à sa disposition par défaut?",
        no: "Non", yes: "Oui"
    },
    "German (Deutschland)": {
        home: "Home", new: "Neu", library: "Mediathek", search: "Suchen",
        playlists: "Playlists", artists: "Interpret:", albums: "Alben", songs: "Titel",
        tv_movies: "TV & Filme", music_videos: "Musikvideos", genres: "Genres",
        compilations: "Sampler", composers: "Komponisten", play: "Wiedergabe", shuffle: "Zufall",
        unknown_art: "Unbekanntes Cover", not_playing: "Keine Wiedergabe", edit_sections: "Abschnitte bearbeiten",
        settings: "Einstellungen", profile: "Profil", unknown_id: "Unbekannte ID",
        account_info: "Account-Informationen", enter_details: "Details eingeben", edit: "Bearbeiten",
        appearance: "Erscheinungsbild", user_interface: "Benutzeroberfläche", languages_header: "SPRACHEN",
        select_language: "Sprachen", edit_profile: "Profil bearbeiten", choose_photo: "Foto auswählen",
        remove_photo: "Foto entfernen", clear_data: "Daten löschen", theme: "Thema",
        system: "System", light: "Hell", dark: "Dunkel", effects: "Effekte",
        blur_intensity: "Unschärfe-Intensität", music: "Musik", browse_music: "Musik durchsuchen",
        languages_title: "Sprachen", selected_language_label: "Ausgewählte Sprache",
        other_languages_label: "Andere Sprachen", reset_order: "Reihenfolge zurücksetzen",
        reset_library: "Mediathek zurücksetzen?", reset_library_text: "Möchtest du die Reihenfolge der Mediathek auf das Standardlayout zurücksetzen?",
        no: "Nein", yes: "Ja"
    },
    "Arabic (العربية)": {
        home: "الرئيسية", new: "جديد", library: "المكتبة", search: "بحث",
        playlists: "قوائم التشغيل", artists: "الفنانون", albums: "الألبومات", songs: "الأغاني",
        tv_movies: "التلفزيون والأفلام", music_videos: "فيديوهات موسيقية", genres: "الأنواع",
        compilations: "التجميعات", composers: "الملحنون", play: "تشغيل", shuffle: "خلط",
        unknown_art: "عمل فني غير معروف", not_playing: "لا يوجد قيد التشغيل", edit_sections: "تحرير الأقسام",
        settings: "الإعدادات", profile: "الملف الشخصي", unknown_id: "معرف غير معروف",
        account_info: "معلومات الحساب", enter_details: "إدخال التفاصيل", edit: "تحرير",
        appearance: "المظهر", user_interface: "واجهة المستخدم", languages_header: "اللغات",
        select_language: "اللغات", edit_profile: "تعديل الملف الشخصي", choose_photo: "اختر صورة",
        remove_photo: "إزالة الصورة", clear_data: "مسح البيانات", theme: "السمة",
        system: "النظام", light: "فاتح", dark: "داكن", effects: "التأثيرات",
        blur_intensity: "شدة التمويه", music: "الموسيقى", browse_music: "تصفح موسيقاك",
        languages_title: "اللغات", selected_language_label: "اللغة المحددة",
        other_languages_label: "لغات أخرى", reset_order: "إعادة تعيين الترتيب",
        reset_library: "إعادة تعيين المكتبة؟", reset_library_text: "هل تريد إعادة تعيين ترتيب المكتبة إلى تخطيطها الافتراضي؟",
        no: "لا", yes: "نعم"
    },
    "Armenian (Հայերեն)": {
        home: "Գլխավոր", new: "Նոր", library: "Գրադարան", search: "Որոնել",
        playlists: "Ցանկեր", artists: "Կատարողներ", albums: "Ալբոմներ", songs: "Երգեր",
        tv_movies: "TV և Ֆիլմեր", music_videos: "Տեսահոլովակներ", genres: "Ժանրեր",
        compilations: "Հավաքածուներ", composers: "Կոմպոզիտորներ", play: "Նվագարկել", shuffle: "Խառնել",
        unknown_art: "Անհայտ արվեստ", not_playing: "Չի նվագարկվում", edit_sections: "Խմբագրել բաժինները",
        settings: "Կարգավորումներ", profile: "Անձնագիր", unknown_id: "Անհայտ ID",
        account_info: "Հաշվի տեղեկություններ", enter_details: "Մուտքագրել մանրամասները", edit: "Խմբագրել",
        appearance: "Տեսք", user_interface: "Օգտագործողի միջերես", languages_header: "ԼԵԶՈՒՆԵՐ",
        select_language: "Լեզուներ", edit_profile: "Խմբագրել պրոֆիլը", choose_photo: "Ընտրել լուսանկար",
        remove_photo: "Հեռացնել լուսանկարը", clear_data: "Մաքրել տվյալները", theme: "Թեմա",
        system: "Համակարգ", light: "Բաց", dark: "Մութ", effects: "Էֆեկտներ",
        blur_intensity: "Աղոտման ինտենսիվություն", music: "Երաժշտություն", browse_music: "Զննել ձեր երաժշտությունը",
        languages_title: "Լեզուներ", selected_language_label: "Ընտրված լեզու",
        other_languages_label: "Այլ լեզուներ", reset_order: "Վերակարգավորել հերթականությունը",
        reset_library: "Վերակարգավորել՞ գրադարանը", reset_library_text: "Ցանկו՞ւմ եք վերակարգավորել գրադարանի հերթականությունը լռելյայն տեսքին:",
        no: "Ոչ", yes: "Այո"
    },
    "Asturian (Asturianu)": {
        home: "Entamu", new: "Nuevu", library: "Lliteratura", search: "Buscar",
        playlists: "Llistes", artists: "Artistes", albums: "Álbumes", songs: "Canten",
        tv_movies: "TV y Películes", music_videos: "Videos musicales", genres: "Xéneros",
        compilations: "Recopilaciones", composers: "Compositores", play: "Reproducir", shuffle: "Al debalu",
        unknown_art: "Arte desconocíu", not_playing: "Ensin reproducir", edit_sections: "Editar seiciones",
        settings: "Axustes", profile: "Perfil", unknown_id: "ID desconocíu",
        account_info: "Información de la cuenta", enter_details: "Introducir datos", edit: "Editar",
        appearance: "Apariencia", user_interface: "Interfaz d'usuariu", languages_header: "LLINGÜES",
        select_language: "Llingües", edit_profile: "Editar perfil", choose_photo: "Escoyer semeya",
        remove_photo: "Desaniciar semeya", clear_data: "Llimpiar datos", theme: "Tema",
        system: "Sistema", light: "Claru", dark: "Escuru", effects: "Efeutos",
        blur_intensity: "Intensidá de borrosidá", music: "Música", browse_music: "Restolar música",
        languages_title: "Llingües", selected_language_label: "Llingua seleicionada",
        other_languages_label: "Otres llingües", reset_order: "Reaniciar orde",
        reset_library: "¿Reaniciar biblioteca?", reset_library_text: "¿Quies reaniciar l'orde de la biblioteca al diseñu predetermináu?",
        no: "Non", yes: "Sí"
    },
    "Azerbaijani (Azərbaycan)": {
        home: "Ana səhifə", new: "Yeni", library: "Kitabxana", search: "Axtar",
        playlists: "Pleylistlər", artists: "Sənətçilər", albums: "Albomlar", songs: "Mahnılar",
        tv_movies: "TV və Filmlər", music_videos: "Musiqi videoları", genres: "Janrlar",
        compilations: "Kompilyasiyalar", composers: "Bəstəkarlar", play: "Oxat", shuffle: "Qarışıq",
        unknown_art: "Naməlum İncəsənət", not_playing: "Oxunmur", edit_sections: "Bölmələri redaktə et",
        settings: "Tənzimləmələr", profile: "Profil", unknown_id: "Naməlum ID",
        account_info: "Hesab Məlumatı", enter_details: "Detalları daxil edin", edit: "Redaktə et",
        appearance: "Gۆرünüş", user_interface: "İstifadəçi interfeysi", languages_header: "DİLLƏR",
        select_language: "Dillər", edit_profile: "Profili redaktə et", choose_photo: "Şəkil seç",
        remove_photo: "Şəkli sil", clear_data: "Məlumatları təmizlə", theme: "Mövzu",
        system: "Sistem", light: "Açıq", dark: "Tünd", effects: "Effektlər",
        blur_intensity: "Blur İntensivliyi", music: "Musiqi", browse_music: "Musiqiyə bax",
        languages_title: "Dillər", selected_language_label: "Seçilmiş Dil",
        other_languages_label: "Digər Dillər", reset_order: "Sıranı sıfırla",
        reset_library: "Kitabxana sıfırlansın?", reset_library_text: "Kitabxana sırasını standart düzənə qaytarmaq istəyirsiniz?",
        no: "Xeyr", yes: "Bəli"
    },
    "Bangla (বাংলাদেশ)": {
        home: "হোম", new: "নতুন", library: "লাইব্রেরি", search: "অনুসন্ধান",
        playlists: "প্লেলিস্ট", artists: "শিল্পী", albums: "অ্যালবাম", songs: "গান",
        tv_movies: "টিভি এবং সিনেমা", music_videos: "মিউজিক ভিডিও", genres: "ধরণ",
        compilations: "সংকলন", composers: "সুরকার", play: "চালু করুন", shuffle: "সাফেল",
        unknown_art: "অজানা আর্ট", not_playing: "প্লে হচ্ছে না", edit_sections: "সেকশন সম্পাদনা করুন",
        settings: "সেটিংস", profile: "প্রোফাইল", unknown_id: "অজানা আইডি",
        account_info: "অ্যাকাউন্ট তথ্য", enter_details: "বিবরণ লিখুন", edit: "সম্পাদনা",
        appearance: "চেহারা", user_interface: "ইউজার ইন্টারফেস", languages_header: "ভাষা",
        select_language: "ভাষা", edit_profile: "প্রোফাইল সম্পাদনা", choose_photo: "ছবি চয়ন করুন",
        remove_photo: "ছবি সরান", clear_data: "ডেটা মুছুন", theme: "থিম",
        system: "সিস্টেম", light: "হালকা", dark: "গাঢ়", effects: "এফেক্টস",
        blur_intensity: "ব্লার ইন্টেনসিটি", music: "মিউজিক", browse_music: "আপনার মিউজিক ব্রাউজ করুন",
        languages_title: "ভাষা", selected_language_label: "নির্বাচিত ভাষা",
        other_languages_label: "অন্যান্য ভাষা", reset_order: "ক্রম রিসেট করুন",
        reset_library: "লাইব্রেরি রিসেট করবেন?", reset_library_text: "আপনি কি লাইব্রেরি অর্ডার তার ডিফল্ট লেআউটে রিসেট করতে চান?",
        no: "না", yes: "হ্যাঁ"
    },
    "Bulgarian (България)": {
        home: "Начало", new: "Нови", library: "Библиотека", search: "Търсене",
        playlists: "Плейлисти", artists: "Изпълнители", albums: "Албуми", songs: "Песни",
        tv_movies: "ТВ и филми", music_videos: "Видеоклипове", genres: "Жанрове",
        compilations: "Компилации", composers: "Композитори", play: "Възпроизвеждане", shuffle: "Разбъркване",
        unknown_art: "Неизвестно изкуство", not_playing: "Не се възпроизвежда", edit_sections: "Редактиране на секции",
        settings: "Настройки", profile: "Профил", unknown_id: "Неизвестен ID",
        account_info: "Информация за профила", enter_details: "Въведете детайли", edit: "Редактиране",
        appearance: "Външен вид", user_interface: "Потребителски интерфейс", languages_header: "ЕЗИЦИ",
        select_language: "Езици", edit_profile: "Редактиране на профил", choose_photo: "Изберете снимка",
        remove_photo: "Премахване на снимката", clear_data: "Изчистване на данните", theme: "Тема",
        system: "Система", light: "Светла", dark: "Тъмна", effects: "Ефекти",
        blur_intensity: "Интензивност на замъгляването", music: "Музика", browse_music: "Разгледайте вашата музика",
        languages_title: "Езици", selected_language_label: "Избран език",
        other_languages_label: "Други езици", reset_order: "Нулиране на реда",
        reset_library: "Нулиране на библиотеката?", reset_library_text: "Искате ли да нулирате реда на библиотеката до подразбиращия се изглед?",
        no: "Не", yes: "Да"
    },
    "Chinese (简体中文)": {
        home: "首页", new: "新品", library: "资料库", search: "搜索",
        playlists: "播放列表", artists: "艺人", albums: "专辑", songs: "歌曲",
        tv_movies: "电视节目和电影", music_videos: "音乐视频", genres: "流派",
        compilations: "合辑", composers: "作曲者", play: "播放", shuffle: "随机播放",
        unknown_art: "未知封面", not_playing: "未播放", edit_sections: "编辑栏目",
        settings: "设置", profile: "个人资料", unknown_id: "未知 ID",
        account_info: "账户信息", enter_details: "输入详细信息", edit: "编辑",
        appearance: "外观", user_interface: "用户界面", languages_header: "语言",
        select_language: "语言", edit_profile: "编辑个人资料", choose_photo: "选取照片",
        remove_photo: "移除照片", clear_data: "清除数据", theme: "主题",
        system: "系统", light: "浅色", dark: "深色", effects: "效果",
        blur_intensity: "模糊强度", music: "音乐", browse_music: "浏览你的音乐",
        languages_title: "语言", selected_language_label: "已选语言",
        other_languages_label: "其他语言", reset_order: "重置顺序",
        reset_library: "重置资料库？", reset_library_text: "是否要将资料库顺序重置为默认布局？",
        no: "否", yes: "是"
    },
    "Chinese (繁體中文)": {
        home: "首頁", new: "新品", library: "資料庫", search: "搜尋",
        playlists: "播放列表", artists: "藝人", albums: "專輯", songs: "歌曲",
        tv_movies: "電視與電影", music_videos: "音樂錄影帶", genres: "曲風",
        compilations: "合輯", composers: "作曲者", play: "播放", shuffle: "隨機播放",
        unknown_art: "未知封面", not_playing: "未播放", edit_sections: "編輯區段",
        settings: "設定", profile: "個人檔案", unknown_id: "未知 ID",
        account_info: "帳戶資訊", enter_details: "輸入詳細資訊", edit: "編輯",
        appearance: "外觀", user_interface: "使用者介面", languages_header: "語言",
        select_language: "語言", edit_profile: "編輯個人檔案", choose_photo: "選擇照片",
        remove_photo: "移除照片", clear_data: "清除資料", theme: "主題",
        system: "系統", light: "淺色", dark: "深色", effects: "效果",
        blur_intensity: "模糊強度", music: "音樂", browse_music: "瀏覽您的音樂",
        languages_title: "語言", selected_language_label: "已選語言",
        other_languages_label: "其他語言", reset_order: "重置順序",
        reset_library: "重置資料庫？", reset_library_text: "您要將資料庫順序重置為預設版面配置嗎？",
        no: "否", yes: "是"
    },
    "Croatian (Hrvatski)": {
        home: "Početna", new: "Novo", library: "Biblioteka", search: "Traži",
        playlists: "Izvođenja", artists: "Izvođači", albums: "Albumi", songs: "Pjesme",
        tv_movies: "TV i filmovi", music_videos: "Glazbeni spotovi", genres: "Žanrovi",
        compilations: "Kompilacije", composers: "Skladatelji", play: "Reproduciraj", shuffle: "Nasumično",
        unknown_art: "Nepoznat izvođač", not_playing: "Nema reprodukcije", edit_sections: "Uredi odjeljke",
        settings: "Postavke", profile: "Profil", unknown_id: "Nepoznat ID",
        account_info: "Informacije o računu", enter_details: "Unesite detalje", edit: "Uredi",
        appearance: "Izgled", user_interface: "Korisničko sučelje", languages_header: "JEZICI",
        select_language: "Jezici", edit_profile: "Uredi profil", choose_photo: "Odaberi fotografiju",
        remove_photo: "Ukloni fotografiju", clear_data: "Izbriši podatke", theme: "Tema",
        system: "Sustav", light: "Svijetlo", dark: "Tamno", effects: "Efekti",
        blur_intensity: "Intenzitet zamućenja", music: "Glazba", browse_music: "Pregledaj svoju glazbu",
        languages_title: "Jezici", selected_language_label: "Odabrani jezik",
        other_languages_label: "Ostali jezici", reset_order: "Poništi redoslijed",
        reset_library: "Poništi biblioteku?", reset_library_text: "Želite li poništiti redoslijed biblioteke na zadani izgled?",
        no: "Ne", yes: "Da"
    },
    "Czech (Čeština)": {
        home: "Domů", new: "Nové", library: "Knihovna", search: "Hledat",
        playlists: "Seznamy", artists: "Umělci", albums: "Alba", songs: "Skladby",
        tv_movies: "TV a filmy", music_videos: "Hudební videoklipy", genres: "Žánry",
        compilations: "Kompilace", composers: "Skladatelé", play: "Přehrát", shuffle: "Náhodně",
        unknown_art: "Neznámý přebal", not_playing: "Nepřehrává se", edit_sections: "Upravit sekce",
        settings: "Nastavení", profile: "Profil", unknown_id: "Neznámé ID",
        account_info: "Informace o účtu", enter_details: "Zadejte podrobnosti", edit: "Upravit",
        appearance: "Vzhled", user_interface: "Uživatelské rozhraní", languages_header: "JAZYKY",
        select_language: "Jazyky", edit_profile: "Upravit profil", choose_photo: "Vybrat fotku",
        remove_photo: "Odstranit fotku", clear_data: "Vymazat data", theme: "Motiv",
        system: "Systém", light: "Světlý", dark: "Tmavý", effects: "Efekty",
        blur_intensity: "Intenzita rozostření", music: "Hudba", browse_music: "Procházet hudbu",
        languages_title: "Jazyky", selected_language_label: "Vybraný jazyk",
        other_languages_label: "Další jazyyky", reset_order: "Obnovit uspořádání",
        reset_library: "Obnovit knihovnu?", reset_library_text: "Chcete obnovit výchozí uspořádání knihovny?",
        no: "Ne", yes: "Ano"
    },
    "Danish (Dansk)": {
        home: "Hjem", new: "Nyt", library: "Bibliotek", search: "Søg",
        playlists: "Spilleglister", artists: "Kunstnere", albums: "Album", songs: "Sange",
        tv_movies: "TV & Film", music_videos: "Musikvideoer", genres: "Genrer",
        compilations: "Opsamlinger", composers: "Komponister", play: "Afspil", shuffle: "Bland",
        unknown_art: "Ukendt kunst", not_playing: "Afspiller ikke", edit_sections: "Rediger sektioner",
        settings: "Indstillinger", profile: "Profil", unknown_id: "Ukendt ID",
        account_info: "Kontooplysninger", enter_details: "Indtast oplysninger", edit: "Rediger",
        appearance: "Udseende", user_interface: "Brugerflade", languages_header: "SPROG",
        select_language: "Sprog", edit_profile: "Rediger profil", choose_photo: "Vælg billede",
        remove_photo: "Fjern billede", clear_data: "Ryd data", theme: "Tema",
        system: "System", light: "Lyst", dark: "Mørkt", effects: "Effekter",
        blur_intensity: "Sløringsintensitet", music: "Musik", browse_music: "Gennemse din musik",
        languages_title: "Sprog", selected_language_label: "Valgt sprog",
        other_languages_label: "Andre sprog", reset_order: "Nulstil rækkefølge",
        reset_library: "Nulstil bibliotek?", reset_library_text: "Vil du nulstille bibliotekets rækkefølge til standardlayoutet?",
        no: "Nej", yes: "Ja"
    },
    "Dutch (Nederlands)": {
        home: "Home", new: "Nieuw", library: "Bibliotheek", search: "Zoek",
        playlists: "Afspeellijsten", artists: "Artiesten", albums: "Albums", songs: "Nummers",
        tv_movies: "Tv en films", music_videos: "Videoclips", genres: "Genres",
        compilations: "Verzamelalbums", composers: "Componisten", play: "Speel af", shuffle: "Shuffle",
        unknown_art: "Onbekende artiest", not_playing: "Wordt niet afgespeeld", edit_sections: "Wijzig onderdelen",
        settings: "Instellingen", profile: "Profiel", unknown_id: "Onbekend ID",
        account_info: "Accountinformatie", enter_details: "Voer details in", edit: "Wijzig",
        appearance: "Weergave", user_interface: "Gebruikersinterface", languages_header: "TALEN",
        select_language: "Talen", edit_profile: "Wijzig profiel", choose_photo: "Kies foto",
        remove_photo: "Verwijder foto", clear_data: "Wis gegevens", theme: "Thema",
        system: "Systeem", light: "Licht", dark: "Donker", effects: "Effecten",
        blur_intensity: "Vervaagingsintensiteit", music: "Muziek", browse_music: "Blader door je muziek",
        languages_title: "Talen", selected_language_label: "Geselecteerde taal",
        other_languages_label: "Andere talen", reset_order: "Herstel volgorde",
        reset_library: "Herstel bibliotheek?", reset_library_text: "Wil je de volgorde van de bibliotheek herstellen naar de standaardindeling?",
        no: "Nee", yes: "Ja"
    },
    "Estonian (Eesti)": {
        home: "Avaleht", new: "Uus", library: "Kogu", search: "Otsi",
        playlists: "Esitusloendid", artists: "Esitajad", albums: "Albumid", songs: "Laulud",
        tv_movies: "TV ja filmid", music_videos: "Muusikavideod", genres: "Žanrid",
        compilations:umä = "Kogumikud", composers: "Heliloojad", play: "Esita", shuffle: "Juhuslik",
        unknown_art: "Tundmatu kujundus", not_playing: "Ei esitata", edit_sections: "Muuda jaotisi",
        settings: "Seaded", profile: "Profiil", unknown_id: "Tundmatu ID",
        account_info: "Kontoteave", enter_details: "Sisesta üksikasjad", edit: "Muuda",
        appearance: "Välimus", user_interface: "Kasutajaliides", languages_header: "KEELED",
        select_language: "Keeled", edit_profile: "Muuda profiili", choose_photo: "Vali foto",
        remove_photo: "Eemalda foto", clear_data: "Kustuta andmed", theme: "Teema",
        system: "Süsteem", light: "Hele", dark: "Tume", effects: "Efektid",
        blur_intensity: "Hägususe tugevus", music: "Muusika", browse_music: "Sirvi oma muusikat",
        languages_title: "Keeled", selected_language_label: "Valitud keel",
        other_languages_label: "Muud keeled", reset_order: "Lähtesta järjekord",
        reset_library: "Lähtesta kogu?", reset_library_text: "Kas soovite kogu järjestuse lähtestada vaikepaigutusele?",
        no: "Ei", yes: "Jah"
    },
    "Filipino": {
        home: "Tahanan", new: "Bago", library: "Aklatan", search: "Maghanap",
        playlists: "Mga Playlist", artists: "Mga Artista", albums: "Mga Album", songs: "Mga Kanta",
        tv_movies: "TV at Mga Pelikula", music_videos: "Mga Music Video", genres: "Mga Genre",
        compilations: "Mga Kompilasyon", composers: "Mga Kompositor", play: "I-play", shuffle: "Balasahin",
        unknown_art: "Hindi Kilalang Art", not_playing: "Hindi nagpapatugtog", edit_sections: "I-edit ang mga Seksyon",
        settings: "Mga Setting", profile: "Profile", unknown_id: "Hindi Kilalang ID",
        account_info: "Impormasyon ng Account", enter_details: "Ilagay ang mga Detalye", edit: "I-edit",
        appearance: "Hitsura", user_interface: "User Interface", languages_header: "MGA WIKA",
        select_language: "Mga Wika", edit_profile: "I-edit ang Profile", choose_photo: "Pumili ng Larawan",
        remove_photo: "Alisin ang Larawan", clear_data: "I-clear ang Data", theme: "Tema",
        system: "System", light: "Maliwanag", dark: "Madilim", effects: "Mga Epekto",
        blur_intensity: "Laki ng Blur", music: "Musika", browse_music: "I-browse ang iyong Musika",
        languages_title: "Mga Wika", selected_language_label: "Napiling Wika",
        other_languages_label: "Iba pang mga Wika", reset_order: "I-reset ang Pagkakasunod-sunod",
        reset_library: "I-reset ang Aklatan?", reset_library_text: "Gusto mo bang i-reset ang pagkakasunod-sunod ng aklatan sa default na anyo nito?",
        no: "Hindi", yes: "Oo"
    },
    "Finnish (Suomi)": {
        home: "Koti", new: "Uutta", library: "Kirjasto", search: "Hae",
        playlists: "Soittolistat", artists: "Esittäjät", albums: "Albumit", songs: "Kappaleet",
        tv_movies: "TV ja elokuvat", music_videos: "Musiikkivideot", genres: "Genret",
        compilations: "Kokoelmat", composers: "Säveltäjät", play: "Toista", shuffle: "Sekoita",
        unknown_art: "Tuntematon kansikuva", not_playing: "Ei toisteta", edit_sections: "Muokkaa osioita",
        settings: "Asetukset", profile: "Profiili", unknown_id: "Tuntematon ID",
        account_info: "Tilitiedot", enter_details: "Syötä tiedot", edit: "Muokkaa",
        appearance: "Ulkoasu", user_interface: "Käyttöliittymä", languages_header: "KIELET",
        select_language: "Kielet", edit_profile: "Muokkaa profiilia", choose_photo: "Valitse kuva",
        remove_photo: "Poista kuva", clear_data: "Tyhjennä tiedot", theme: "Teema",
        system: "Järjestelmä", light: "Vaalea", dark: "Tumma", effects: "Tehosteet",
        blur_intensity: "Sumennuksen voimakkuus", music: "Musiikki", browse_music: "Selaa musiikkiasi",
        languages_title: "Kielet", selected_language_label: "Valittu kieli",
        other_languages_label: "Muut kielet", reset_order: "Palauta järjestys",
        reset_library: "Palautetaanko kirjasto?", reset_library_text: "Haluatko palauttaa kirjaston järjestyksen oletusasetteluun?",
        no: "Ei", yes: "Kyllä"
    },
    "Greek (Ελληνικά)": {
        home: "Αρχική", new: "Νέα", library: "Βιβλιοθήκη", search: "Αναζήτηση",
        playlists: "Λίστες", artists: "Καλλιτέχνες", albums: "Άλμπουμ", songs: "Τραγούδια",
        tv_movies: "Τηλεόραση & Ταινίες", music_videos: "Μουσικά βίντεο", genres: "Είδη",
        compilations: "Συλλογές", composers: "Συνθέτες", play: "Αναπαραγωγή", shuffle: "Τυχαία σειρά",
        unknown_art: "Άγνωστο εξώφυλλο", not_playing: "Δεν αναπαράγεται", edit_sections: "Επεξεργασία ενοτήτων",
        settings: "Ρυθμίσεις", profile: "Профиль", unknown_id: "Άγνωστο ID",
        account_info: "Πληροφορίες λογαριασμού", enter_details: "Εισαγωγή λεπτομερειών", edit: "Επεξεργασία",
        appearance: "Εμφάνιση", user_interface: "Περιβάλλον εργασίας", languages_header: "ΓΛΩΣΣΕΣ",
        select_language: "Γλώσσες", edit_profile: "Επεξεργασία προφίλ", choose_photo: "Επιλογή φωτογραφίας",
        remove_photo: "Αφαίρεση φωτογραφίας", clear_data: "Εκκαθάριση δεδομένων", theme: "Θέμα",
        system: "Σύστημα", light: "Ανοιχτόχρωμο", dark: "Σκουρόχρωμο", effects: "Εφέ",
        blur_intensity: "Ένταση θoliότητας", music: "Μουσική", browse_music: "Περιήγηση στη μουσική σας",
        languages_title: "Γλώσσες", selected_language_label: "Επιλεγμένη γλώσσα",
        other_languages_label: "Άλλες γλώσσες", reset_order: " επαναφορά σειράς",
        reset_library: "Επαναφορά βιβλιοθήκης;", reset_library_text: "Θέλετε να επαναφέρετε τη σειρά της βιβλιοθήκης στην προεπιλεγμένη διάταξη;",
        no: "Όχι", yes: "Ναι"
    },
    "Hebrew (עברית)": {
        home: "בית", new: "חדש", library: "ספרייה", search: "חיפוש",
        playlists: "רשימות השמעה", artists: "אמנים", albums: "אלבומים", songs: "שירים",
        tv_movies: "טלוויזיה וסרטים", music_videos: "קליפים", genres: "ז'אנרים",
        compilations: "אוספים", composers: "מלחינים", play: "נגן", shuffle: "ערבב",
        unknown_art: "עטיפה לא ידועה", not_playing: "לא מנגן", edit_sections: "ערוך מקטעים",
        settings: "הגדרות", profile: "פרופיל", unknown_id: "מזהה לא ידוע",
        account_info: "פרטי חשבון", enter_details: "הזן פרטים", edit: "ערוך",
        appearance: "מראה", user_interface: "ממשק משתמש", languages_header: "שפות",
        select_language: "שפות", edit_profile: "ערוך פרופיל", choose_photo: "בחר תמונה",
        remove_photo: "הסר תמונה", clear_data: "נקה נתונים", theme: "ערכת נושא",
        system: "מערכת", light: "בהיר", dark: "כהה", effects: "אפקטים",
        blur_intensity: "עוצמת טשטוש", music: "מוזיקה", browse_music: "עיין במוזיקה שלך",
        languages_title: "שפות", selected_language_label: "שפה נבחרת",
        other_languages_label: "שפות אחרות", reset_order: "אפס סדר",
        reset_library: "לאפס ספרייה?", reset_library_text: "האם ברצונך לאפס את סדר הספרייה לפריסת ברירת המחדל?",
        no: "לא", yes: "כן"
    },
    "Hindi (हिन्दी)": {
        home: "होम", new: "नया", library: "लाइब्रेरी", search: "खोजें",
        playlists: "प्लेलिस्ट", artists: "कलाकार", albums: "एल्बम", songs: "गाने",
        tv_movies: "टीवी और फिल्में", music_videos: "संगीत वीडियो", genres: "शैली",
        compilations: "संकलन", composers: "संगीतकार", play: "चलाएं", shuffle: "शफल",
        unknown_art: "अज्ञात आर्ट", not_playing: "नहीं चल रहा है", edit_sections: "सेक्शन संपादित करें",
        settings: "सेटिंग्स", profile: "प्रोफ़ाइल", unknown_id: "अज्ञात आईडी",
        account_info: "खाता जानकारी", enter_details: "विवरण दर्ज करें", edit: "संपादित करें",
        appearance: "प्रकटन", user_interface: "यूज़र इंटरफ़ेस", languages_header: "भाषाएँ",
        select_language: "भाषाएँ", edit_profile: "प्रोफ़ाइल संपादित करें", choose_photo: "फ़ोटो चुनें",
        remove_photo: "फ़ोटो हटाएं", clear_data: "डेटा साफ़ करें", theme: "थीम",
        system: "सिस्टम", light: "हल्का", dark: "गहरा", effects: "प्रभाव",
        blur_intensity: "धुंधलापन तीव्रता", music: "संगीत", browse_music: "अपना संगीत ब्राउज़ करें",
        languages_title: "भाषाएँ", selected_language_label: "चयनित भाषा",
        other_languages_label: "अन्य भाषाएँ", reset_order: "क्रम रीसेट करें",
        reset_library: "लाइब्रेरी रीसेट करें?", reset_library_text: "क्या आप लाइब्रेरी क्रम को उसके डिफ़ॉल्ट लेआउट पर रीसेट करना चाहते हैं?",
        no: "नहीं", yes: "हाँ"
    },
    "Hungarian (Magyar)": {
        home: "Főoldal", new: "Új", library: "Könyvtár", search: "Keresés",
        playlists: "Lejátszási listák", artists: "Előadók", albums: "Albumok", songs: "Dalok",
        tv_movies: "TV és filmek", music_videos: "Zenei videók", genres: "Műfajok",
        compilations: "Válogatások", composers: "Zeneszerzők", play: "Lejátszás", shuffle: "Keverés",
        unknown_art: "Ismeretlen borító", not_playing: "Nem játszik", edit_sections: "Szakaszok szerkesztése",
        settings: "Beállítások", profile: "Profil", unknown_id: "Ismeretlen ID",
        account_info: "Fiókinformáció", enter_details: "Adatok megadása", edit: "Szerkesztés",
        appearance: "Megjelenés", user_interface: "Felhasználói felület", languages_header: "NYELVEK",
        select_language: "Nyelvek", edit_profile: "Profil szerkesztése", choose_photo: "Fotó kiválasztása",
        remove_photo: "Fotó eltávolítása", clear_data: "Adatok törlése", theme: "Téma",
        system: "Rendszer", light: "Világos", dark: "Sötét", effects: "Effektek",
        blur_intensity: "Elmosódás intenzitása", music: "Zene", browse_music: "Zene böngészése",
        languages_title: "Nyelvek", selected_language_label: "Kiválasztott nyelv",
        other_languages_label: "Egyéb nyelvek", reset_order: "Sorrend visszaállítása",
        reset_library: "Könyvtár visszaállítása?", reset_library_text: "Visszaállítja a könyvtár sorrendjét az alapértelmezett elrendezésre?",
        no: "Nem", yes: "Igen"
    },
    "Indonesian (Bahasa Indonesia)": {
        home: "Beranda", new: "Baru", library: "Pustaka", search: "Cari",
        playlists: "Daftar Putar", artists: "Artis", albums: "Album", songs: "Lagu",
        tv_movies: "TV & Film", music_videos: "Video Musik", genres: "Genre",
        compilations: "Kompilasi", composers: "Komponis", play: "Putar", shuffle: "Acak",
        unknown_art: "Karya Seni Tidak Dikenal", not_playing: "Tidak Memutar", edit_sections: "Edit Bagian",
        settings: "Pengaturan", profile: "Profil", unknown_id: "ID Tidak Dikenal",
        account_info: "Informasi Akun", enter_details: "Masukkan Detail", edit: "Edit",
        appearance: "Tampilan", user_interface: "Antarmuka Pengguna", languages_header: "BAHASA",
        select_language: "Bahasa", edit_profile: "Edit Profil", choose_photo: "Pilih Foto",
        remove_photo: "Hapus Foto", clear_data: "Hapus Data", theme: "Tema",
        system: "Sistem", light: "Terang", dark: "Gelap", effects: "Efek",
        blur_intensity: "Intensitas Blur", music: "Musik", browse_music: "Jelajahi Musik Anda",
        languages_title: "Bahasa", selected_language_label: "Bahasa Dipilih",
        other_languages_label: "Bahasa Lainnya", reset_order: "Atur Ulang Urutan",
        reset_library: "Atur Ulang Pustaka?", reset_library_text: "Apakah Anda ingin mengatur ulang urutan pustaka ke tata letak default?",
        no: "Tidak", yes: "Ya"
    },
    "Italian (Italiano)": {
        home: "Home", new: "Novità", library: "Libreria", search: "Cerca",
        playlists: "Playlist", artists: "Artisti", albums: "Album", songs: "Brani",
        tv_movies: "TV e film", music_videos: "Videoclip", genres: "Genere",
        compilations: "Raccolte", composers: "Compositori", play: "Riproduci", shuffle: "Casuale",
        unknown_art: "Copertina sconosciuta", not_playing: "In riproduzione", edit_sections: "Modifica sezioni",
        settings: "Impostazioni", profile: "Profilo", unknown_id: "ID sconosciuto",
        account_info: "Informazioni account", enter_details: "Inserisci dettagli", edit: "Modifica",
        appearance: "Aspetto", user_interface: "Interfaccia utente", languages_header: "LINGUE",
        select_language: "Lingue", edit_profile: "Modifica profilo", choose_photo: "Scegli foto",
        remove_photo: "Rimuovi foto", clear_data: "Cancella dati", theme: "Tema",
        system: "Sistema", light: "Chiaro", dark: "Scuro", effects: "Effetti",
        blur_intensity: "Intensità sfocatura", music: "Musica", browse_music: "Sfoglia la tua musica",
        languages_title: "Lingue", selected_language_label: "Lingua selezionata",
        other_languages_label: "Altre lingue", reset_order: "Ripristina ordine",
        reset_library: "Ripristina libreria?", reset_library_text: "Vuoi ripristinare l'ordine della libreria al layout predefinito?",
        no: "No", yes: "Sì"
    },
    "Japanese (日本語)": {
        home: "ホーム", new: "新規", library: "ライブラリ", search: "検索",
        playlists: "プレイリスト", artists: "アーティスト", albums: "アルバム", songs: "曲",
        tv_movies: "テレビ & 映画", music_videos: "ミュージックビデオ", genres: "ジャンル",
        compilations: "コンピレーション", composers: "作曲者", play: "再生", shuffle: "シャッフル",
        unknown_art: "不明なアート", not_playing: "再生していません", edit_sections: "セクションを編集",
        settings: "設定", profile: "プロフィール", unknown_id: "不明なID",
        account_info: "アカウント情報", enter_details: "詳細を入力", edit: "編集",
        appearance: "外観", user_interface: "ユーザーインターフェイス", languages_header: "言語",
        select_language: "言語", edit_profile: "プロフィールを編集", choose_photo: "写真を選択",
        remove_photo: "写真を削除", clear_data: "データを消去", theme: "テーマ",
        system: "システム", light: "ライト", dark: "ダーク", effects: "エフェクト",
        blur_intensity: "ぼかしの強さ", music: "ミュージック", browse_music: "音楽をブラウズ",
        languages_title: "言語", selected_language_label: "選択された言語",
        other_languages_label: "その他の言語", reset_order: "順序をリセット",
        reset_library: "ライブラリをリセットしますか？", reset_library_text: "ライブラリの順序をデフォルトのレイアウトにリセットしますか？",
        no: "いいえ", yes: "はい"
    },
    "Korean (한국어)": {
        home: "홈", new: "신규", library: "보관함", search: "검색",
        playlists: "플레이리스트", artists: "아티스트", albums: "앨범", songs: "노래",
        tv_movies: "TV 및 영화", music_videos: "뮤직 비디오", genres: "장르",
        compilations: "컴필레이션", composers: "작곡가", play: "재생", shuffle: "임의 재생",
        unknown_art: "알 수 없는 아트", not_playing: "재생 중 아님", edit_sections: "섹션 편집",
        settings: "설정", profile: "프로필", unknown_id: "알 수 없는 ID",
        account_info: "계정 정보", enter_details: "세부 정보 입력", edit: "편집",
        appearance: "모양새", user_interface: "사용자 인터페이스", languages_header: "언어",
        select_language: "언어", edit_profile: "프로필 편집", choose_photo: "사진 선택",
        remove_photo: "사진 제거", clear_data: "데이터 지우기", theme: "테마",
        system: "시스템", light: "라이트", dark: "다크", effects: "효과",
        blur_intensity: "흐리기 강도", music: "보관함 음악", browse_music: "음악 둘러보기",
        languages_title: "언어", selected_language_label: "선택된 언어",
        other_languages_label: "기타 언어", reset_order: "순서 재설정",
        reset_library: "보관함을 재설정하시겠습니까?", reset_library_text: "보관함 순서를 기본 레이아웃으로 재설정하시겠습니까?",
        no: "아니요", yes: "예"
    },
    "Malay (Bahasa Melayu)": {
        home: "Utama", new: "Baharu", library: "Pustaka", search: "Cari",
        playlists: "Senarai Main", artists: "Artis", albums: "Album", songs: "Lagu",
        tv_movies: "TV & Filem", music_videos: "Video Muzik", genres: "Genre",
        compilations: "Kompilasi", composers: "Pencipta Lagu", play: "Main", shuffle: "Rawak",
        unknown_art: "Seni Tidak Diketahui", not_playing: "Tidak Memainkan", edit_sections: "Edit Seksyen",
        settings: "Tetapan", profile: "Profil", unknown_id: "ID Tidak Diketahui",
        account_info: "Maklumat Akaun", enter_details: "Masukkan Butiran", edit: "Edit",
        appearance: "Penampilan", user_interface: "Antara Muka Pengguna", languages_header: "BAHASA",
        select_language: "Bahasa", edit_profile: "Edit Profil", choose_photo: "Pilih Foto",
        remove_photo: "Buang Foto", clear_data: "Kosongkan Data", theme: "Tema",
        system: "Sistem", light: "Cerah", dark: "Gelap", effects: "Kesan",
        blur_intensity: "Keamatan Kabur", music: "Muzik", browse_music: "Semak Imbas Muzik Anda",
        languages_title: "Bahasa", selected_language_label: "Bahasa Dipilih",
        other_languages_label: "Bahasa Lain", reset_order: "Set Semula Susunan",
        reset_library: "Set Semula Pustaka?", reset_library_text: "Adakah anda mahu menetapkan semula susunan pustaka kepada susun atur lalainya?",
        no: "Tidak", yes: "Ya"
    },
    "Norwegian (Norsk)": {
        home: "Hjem", new: "Nytt", library: "Bibliotek", search: "Søk",
        playlists: "Spillelister", artists: "Artister", albums: "Album", songs: "Sanger",
        tv_movies: "TV og filmer", music_videos: "Musikkvideoer", genres: "Sjangere",
        compilations: "Samlealbum", composers: "Komponister", play: "Spill av", shuffle: "Bland",
        unknown_art: "Ukjent kunst", not_playing: "Spiller ikke", edit_sections: "Rediger seksjoner",
        settings: "Innstillinger", profile: "Profil", unknown_id: "Ukjent ID",
        account_info: "Kontoinformasjon", enter_details: "Skriv inn detaljer", edit: "Rediger",
        appearance: "Utseende", user_interface: "Brukergrensesnitt", languages_header: "SPRÅK",
        select_language: "Språk", edit_profile: "Rediger profil", choose_photo: "Velg bilde",
        remove_photo: "Fjern bilde", clear_data: "Slett data", theme: "Tema",
        system: "System", light: "Lyst", dark: "Mørkt", effects: "Effekter",
        blur_intensity: "Uskarphetsintensitet", music: "Musikk", browse_music: "Bla gjennom musikken din",
        languages_title: "Språk", selected_language_label: "Valgt språk",
        other_languages_label: "Andre språk", reset_order: "Tilbakestill rekkefølge",
        reset_library: "Tilbakestill bibliotek?", reset_library_text: "Vil du tilbakestille bibliotekrekkefølgen til standardoppsettet?",
        no: "Nei", yes: "Ja"
    },
    "Polish (Polski)": {
        home: "Główna", new: "Nowe", library: "Biblioteka", search: "Szukaj",
        playlists: "Playlisty", artists: "Wykonawcy", albums: "Albumy", songs: "Utwory",
        tv_movies: "TV i filmy", music_videos: "Teledyski", genres: "Gatunki",
        compilations: "Składanki", composers: "Kompozytorzy", play: "Odtwórz", shuffle: "Losowo",
        unknown_art: "Nieznana grafika", not_playing: "Brak odtwarzania", edit_sections: "Edytuj sekcje",
        settings: "Ustawienia", profile: "Profil", unknown_id: "Nieznane ID",
        account_info: "Informacje o koncie", enter_details: "Wprowadź szczegóły", edit: "Edytuj",
        appearance: "Wygląd", user_interface: "Interfejs użytkownika", languages_header: "JĘZYKI",
        select_language: "Języki", edit_profile: "Edytuj profil", choose_photo: "Wybierz zdjęcie",
        remove_photo: "Usuń zdjęcie", clear_data: "Wyczyść dane", theme: "Motyw",
        system: "System", light: "Jasny", dark: "Ciemny", effects: "Efekty",
        blur_intensity: "Intensywność rozmycia", music: "Muzyka", browse_music: "Przeglądaj swoją muzykę",
        languages_title: "Języki", selected_language_label: "Wybrany język",
        other_languages_label: "Inne języki", reset_order: "Zresetuj kolejność",
        reset_library: "Zresetować bibliotekę?", reset_library_text: "Czy chcesz przywrócić domyślny układ biblioteki?",
        no: "Nie", yes: "Tak"
    },
    "Portuguese (Brasil)": {
        home: "Início", new: "Novidades", library: "Biblioteca", search: "Buscar",
        playlists: "Playlists", artists: "Artistas", albums: "Álbuns", songs: "Músicas",
        tv_movies: "TV e Filmes", music_videos: "Videoclipes", genres: "Gêneros",
        compilations: "Coletâneas", composers: "Compositores", play: "Reproduzir", shuffle: "Aleatório",
        unknown_art: "Capa Desconhecida", not_playing: "Nada Reproduzindo", edit_sections: "Editar Seções",
        settings: "Ajustes", profile: "Perfil", unknown_id: "ID Desconhecido",
        account_info: "Informações da Conta", enter_details: "Insira os Detalhes", edit: "Editar",
        appearance: "Aparência", user_interface: "Interface do Usuário", languages_header: "IDIOMAS",
        select_language: "Idiomas", edit_profile: "Editar Perfil", choose_photo: "Escolher Foto",
        remove_photo: "Remover Foto", clear_data: "Apagar Dados", theme: "Tema",
        system: "Sistema", light: "Claro", dark: "Escuro", effects: "Efeitos",
        blur_intensity: "Intensidade do Desfoque", music: "Música", browse_music: "Explorar sua Música",
        languages_title: "Idiomas", selected_language_label: "Idioma Selecionado",
        other_languages_label: "Outros Idiomas", reset_order: "Redefinir Ordem",
        reset_library: "Redefinir Biblioteca?", reset_library_text: "Deseja redefinir a ordem da biblioteca para o layout padrão?",
        no: "Não", yes: "Sim"
    },
    "Portuguese (Portugal)": {
        home: "Início", new: "Novo", library: "Biblioteca", search: "Pesquisar",
        playlists: "Playlists", artists: "Artistas", albums: "Álbuns", songs: "Músicas",
        tv_movies: "TV e Filmes", music_videos: "Vídeos Musicais", genres: "Géneros",
        compilations: "Compilações", composers: "Compositores", play: "Reproduzir", shuffle: "Aleatório",
        unknown_art: "Capa Desconhecida", not_playing: "Sem Reprodução", edit_sections: "Editar Secções",
        settings: "Definições", profile: "Perfil", unknown_id: "ID Desconhecido",
        account_info: "Informação da Conta", enter_details: "Introduzir Detalhes", edit: "Editar",
        appearance: "Aparência", user_interface: "Interface de Utilizador", languages_header: "IDIOMAS",
        select_language: "Idiomas", edit_profile: "Editar Perfil", choose_photo: "Escolher Fotografia",
        remove_photo: "Remover Fotografia", clear_data: "Limpar Dados", theme: "Tema",
        system: "Sistema", light: "Claro", dark: "Escuro", effects: "Efeitos",
        blur_intensity: "Intensidade do Desfoque", music: "Música", browse_music: "Explorar a sua Música",
        languages_title: "Idiomas", selected_language_label: "Idioma Selecionado",
        other_languages_label: "Outros Idiomas", reset_order: "Repor Ordem",
        reset_library: "Repor Biblioteca?", reset_library_text: "Pretende repor a ordem da biblioteca com o esquema predefinido?",
        no: "Não", yes: "Sim"
    },
    "Romanian (Română)": {
        home: "Acasă", new: "Nou", library: "Bibliotecă", search: "Căutare",
        playlists: "Liste de redare", artists: "Cântăreți", albums: "Albume", songs: "Piese",
        tv_movies: "TV și Filme", music_videos: "Videoclipuri", genres: "Genuri",
        compilations: "Compilații", composers: "Compozitori", play: "Redare", shuffle: "Aleatoriu",
        unknown_art: "Copertă necunoscută", not_playing: "Nimic redat", edit_sections: "Editare secțiuni",
        settings: "Configurări", profile: "Profil", unknown_id: "ID necunoscut",
        account_info: "Informații cont", enter_details: "Introduceți detaliile", edit: "Editare",
        appearance: "Aspect", user_interface: "Interfață utilizator", languages_header: "LIMBI",
        select_language: "Limbi", edit_profile: "Editare profil", choose_photo: "Alegeți o poză",
        remove_photo: "Eliminare poză", clear_data: "Ștergere date", theme: "Temă",
        system: "Sistem", light: "Deschis", dark: "Închis", effects: "Efecte",
        blur_intensity: "Intensitate estompare", music: "Muzică", browse_music: "Răsfoiți muzica dvs.",
        languages_title: "Limbi", selected_language_label: "Limba selectată",
        other_languages_label: "Alte limbi", reset_order: "Resetare ordine",
        reset_library: "Resetați biblioteca?", reset_library_text: "Doriți să resetați ordinea bibliotecii la aspectul implicit?",
        no: "Nu", yes: "Da"
    },
    "Russian (Русский)": {
        home: "Главная", new: "Новое", library: "Медиатека", search: "Поиск",
        playlists: "Плейлисты", artists: "Артисты", albums: "Альбомы", songs: "Песни",
        tv_movies: "ТВ и кино", music_videos: "Видеоклипы", genres: "Жанры",
        compilations: "Сборники", composers: "Композиторы", play: "Воспроизвести", shuffle: "Перемешать",
        unknown_art: "Неизвестная обложка", not_playing: "Не играет", edit_sections: "Править разделы",
        settings: "Настройки", profile: "Профиль", unknown_id: "Неизвестный ID",
        account_info: "Информация об учетной записи", enter_details: "Введите данные", edit: "Изменить",
        appearance: "Внешний вид", user_interface: "Интерфейс", languages_header: "ЯЗЫКИ",
        select_language: "Языки", edit_profile: "Править профиль", choose_photo: "Выбрать фото",
        remove_photo: "Удалить фото", clear_data: "Очистить данные", theme: "Тема",
        system: "Системная", light: "Светлая", dark: "Темная", effects: "Эффекты",
        blur_intensity: "Интенсивность размытия", music: "Музыка", browse_music: "Обзор музыки",
        languages_title: "Языки", selected_language_label: "Выбранный язык",
        other_languages_label: "Другие языки", reset_order: "Сбросить порядок",
        reset_library: "Сбросить медиатеку?", reset_library_text: "Сбросить порядок медиатеки к стандартному макету?",
        no: "Нет", yes: "Да"
    },
    "Serbian (Српски)": {
        home: "Почетна", new: "Ново", library: "Библиотека", search: "Претрага",
        playlists: "Плејлисте", artists: "Извођачи", albums: "Албуми", songs: "Песме",
        tv_movies: "ТВ и филмови", music_videos: "Спотови", genres: "Жанрови",
        compilations: "Компилације", composers: "Композитори", play: "Пусти", shuffle: "Насумично",
        unknown_art: "Непознат омот", not_playing: "Ништа не свира", edit_sections: "Уреди секције",
        settings: "Подешавања", profile: "Профил", unknown_id: "Непознат ID",
        account_info: "Информације о налогу", enter_details: "Унесите детаље", edit: "Уреди",
        appearance: "Изглед", user_interface: "Кориснички интерфејс", languages_header: "ЈЕЗИЦИ",
        select_language: "Језици", edit_profile: "Уреди профил", choose_photo: "Изабери фотографију",
        remove_photo: "Уклони фотографију", clear_data: "Обриши податке", theme: "Тема",
        system: "Систем", light: "Светло", dark: "Тамно", effects: "Ефекти",
        blur_intensity: "Интензитет замућења", music: "Музика", browse_music: "Прегледај музику",
        languages_title: "Језици", selected_language_label: "Изабрани језик",
        other_languages_label: "Остали језици", reset_order: "Ресетуј редослед",
        reset_library: "Ресетуј библиотеку?", reset_library_text: "Да ли желите да ресетујете редослед библиотеке на подразумевани изглед?",
        no: "Не", yes: "Да"
    },
    "Slovak (Slovenčina)": {
        home: "Domov", new: "Nové", library: "Knižnica", search: "Hľadať",
        playlists: "Zoznamy", artists: "Umelci", albums: "Albumy", songs: "Skladby",
        tv_movies: "TV a filmy", music_videos: "Hudobné videá", genres: "Žánre",
        compilations: "Kompilácie", composers: "Skladatelia", play: "Prehrať", shuffle: "Náhodne",
        unknown_art: "Neznáme umenie", not_playing: "Neprehráva sa", edit_sections: "Upraviť sekcie",
        settings: "Nastavenia", profile: "Profil", unknown_id: "Neznáme ID",
        account_info: "Informácie o účte", enter_details: "Zadajte podrobnosti", edit: "Upraviť",
        appearance: "Vzhľad", user_interface: "Používateľské rozhranie", languages_header: "JAZYKY",
        select_language: "Jazyky", edit_profile: "Upraviť profil", choose_photo: "Vybrať fotku",
        remove_photo: "Odstrániť fotku", clear_data: "Vymazať dáta", theme: "Téma",
        system: "Systém", light: "Svetlý", dark: "Tmavý", effects: "Efekty",
        blur_intensity: "Intenzita rozostrenia", music: "Hudba", browse_music: "Prehľadávať hudbu",
        languages_title: "Jazyky", selected_language_label: "Vybraný jazyk",
        other_languages_label: "Ostatné jazyky", reset_order: "Obnoviť usporiadanie",
        reset_library: "Obnoviť knižnicu?", reset_library_text: "Chcete obnoviť usporiadanie knižnice na predvolené rozloženie?",
        no: "Nie", yes: "Áno"
    },
    "Swedish (Svenska)": {
        home: "Hem", new: "Nytt", library: "Bibliotek", search: "Sök",
        playlists: "Spellistor", artists: "Artister", albums: "Album", songs: "Låtar",
        tv_movies: "TV och filmer", music_videos: "Musikvideor", genres: "Genrer",
        compilations: "Samlingar", composers: "Kompositörer", play: "Spela upp", shuffle: "Blanda",
        unknown_art: "Okänt omslag", not_playing: "Spelar inte", edit_sections: "Redigera sektioner",
        settings: "Inställningar", profile: "Profil", unknown_id: "Okänt ID",
        account_info: "Kontoinformation", enter_details: "Ange detaljer", edit: "Redigera",
        appearance: "Utseende", user_interface: "Användargränssnitt", languages_header: "SPRÅK",
        select_language: "Språk", edit_profile: "Redigera profil", choose_photo: "Välj foto",
        remove_photo: "Ta bort foto", clear_data: "Rensa data", theme: "Tema",
        system: "System", light: "Ljust", dark: "Mörkt", effects: "Effekter",
        blur_intensity: "Oskärpeintensitet", music: "Musik", browse_music: "Bläddra bland din musik",
        languages_title: "Språk", selected_language_label: "Valt språk",
        other_languages_label: "Andra språk", reset_order: "Nollställ ordning",
        reset_library: "Nollställ bibliotek?", reset_library_text: "Vill du återställa bibliotekets ordning till standardlayouten?",
        no: "Nej", yes: "Ja"
    },
    "Thai (ไทย)": {
        home: "หน้าหลัก", new: "ใหม่", library: "คลัง", search: "ค้นหา",
        playlists: "เพลย์ลิสต์", artists: "ศิลปิน", albums: "อัลบั้ม", songs: "เพลง",
        tv_movies: "รายการทีวีและภาพยนตร์", music_videos: "มิวสิควิดีโอ", genres: "ประเภท",
        compilations: "เพลงรวมฮิต", composers: "นักประพันธ์", play: "เล่น", shuffle: "สุ่ม",
        unknown_art: "ปกที่ไม่รู้จัก", not_playing: "ไม่ได้เล่น", edit_sections: "แก้ไขส่วน",
        settings: "การตั้งค่า", profile: "โปรไฟล์", unknown_id: "ID ที่ไม่รู้จัก",
        account_info: "ข้อมูลบัญชี", enter_details: "ป้อนรายละเอียด", edit: "แก้ไข",
        appearance: "ลักษณะ", user_interface: "ส่วนติดต่อผู้ใช้", languages_header: "ภาษา",
        select_language: "ภาษา", edit_profile: "แก้ไขโปรไฟล์", choose_photo: "เลือกรูปภาพ",
        remove_photo: "นำรูปภาพออก", clear_data: "ล้างข้อมูล", theme: "ธีม",
        system: "ระบบ", light: "สว่าง", dark: "มืด", effects: "เอฟเฟกต์",
        blur_intensity: "ความเข้มความเบลอ", music: "เพลง", browse_music: "เรียกดูเพลงของคุณ",
        languages_title: "ภาษา", selected_language_label: "ภาษาที่เลือก",
        other_languages_label: "ภาษาอื่นๆ", reset_order: "รีเซ็ตลำดับ",
        reset_library: "รีเซ็ตคลังใช่ไหม?", reset_library_text: "คุณต้องการรีเซ็ตลำดับคลังกลับเป็นเค้าโครงเริ่มต้นหรือไม่",
        no: "ไม่ใช่", yes: "ใช่"
    },
    "Turkish (Türkçe)": {
        home: "Ana Sayfa", new: "Yeni", library: "Arşiv", search: "Ara",
        playlists: "Listeler", artists: "Sanatçılar", albums: "Albümler", songs: "Parçalar",
        tv_movies: "TV ve Filmler", music_videos: "Müzik Videoları", genres: "Tarz",
        compilations: "Derlemeler", composers: "Besteciler", play: "Çal", shuffle: "Karıştır",
        unknown_art: "Bilinmeyen Eser", not_playing: "Çalınmıyor", edit_sections: "Bölümleri Düzenle",
        settings: "Ayarlar", profile: "Profil", unknown_id: "Bilinmeyen ID",
        account_info: "Hesap Bilgileri", enter_details: "Ayrıntıları Girin", edit: "Düzenle",
        appearance: "Görünüm", user_interface: "Kullanıcı Arayüzü", languages_header: "DİLLER",
        select_language: "Diller", edit_profile: "Profili Düzenle", choose_photo: "Fotoğraf Seç",
        remove_photo: "Fotoğrafı Kaldır", clear_data: "Verileri Temizle", theme: "Tema",
        system: "Sistem", light: "Açık", dark: "Koyu", effects: "Efektler",
        blur_intensity: "Bulanıklık Yoğunluğu", music: "Müzik", browse_music: "Müziğine Göz At",
        languages_title: "Diller", selected_language_label: "Seçilen Dil",
        other_languages_label: "Diğer Diller", reset_order: "Sıralamayı Sıfırla",
        reset_library: "Arşiv Sıfırlansın mı?", reset_library_text: "Arşiv sıralamasını varsayılan düzenine sıfırlamak istiyor musunuz?",
        no: "Hayır", yes: "Evet"
    },
    "Ukrainian (Українська)": {
        home: "Головна", new: "Нове", library: "Медіатека", search: "Пошук",
        playlists: "Плейлисти", artists: "Виконавці", albums: "Альбоми", songs: "Пісні",
        tv_movies: "ТБ і кіно", music_videos: "Відеокліпи", genres: "Жанри",
        compilations: "Збірки", composers: "Композитори", play: "Відтворити", shuffle: "Перемішати",
        unknown_art: "Невідома обкладинка", not_playing: "Не відтворюється", edit_sections: "Змінити розділи",
        settings: "Параметри", profile: "Профіль", unknown_id: "Невідомий ID",
        account_info: "Інформація про обліковий запис", enter_details: "Введіть дані", edit: "Змінити",
        appearance: "Зовнішній вигляд", user_interface: "Інтерфейс користувача", languages_header: "МОВИ",
        select_language: "Мови", edit_profile: "Редагувати профіль", choose_photo: "Вибрати фото",
        remove_photo: "Видалити фото", clear_data: "Очистити дані", theme: "Тема",
        system: "Системна", light: "Світла", dark: "Темна", effects: "Ефекти",
        blur_intensity: "Інтенсивність розмиття", music: "Музика", browse_music: "Огляд музики",
        languages_title: "Мови", selected_language_label: "Вибрана мова",
        other_languages_label: "Інші мови", reset_order: "Скинути порядок",
        reset_library: "Скинути медіатеку?", reset_library_text: "Бажаєте скинути порядок медіатеки до стандартного макета?",
        no: "Ні", yes: "Так"
    },
    "Vietnamese (Tiếng Việt)": {
        home: "Trang chủ", new: "Mới", library: "Thư viện", search: "Tìm kiếm",
        playlists: "Danh sách phát", artists: "Nghệ sĩ", albums: "Album", songs: "Bài hát",
        tv_movies: "Phim & TV", music_videos: "Video ca nhạc", genres: "Thể loại",
        compilations: "Tuyển tập", composers: "Nhạc sĩ", play: "Phát", shuffle: "Trộn bài",
        unknown_art: "Bìa không xác định", not_playing: "Không phát", edit_sections: "Sửa mục",
        settings: "Cài đặt", profile: "Hồ sơ", unknown_id: "ID không xác định",
        account_info: "Thông tin tài khoản", enter_details: "Nhập chi tiết", edit: "Sửa",
        appearance: "Giao diện", user_interface: "Giao diện người dùng", languages_header: "NGÔN NGỮ",
        select_language: "Ngôn ngữ", edit_profile: "Sửa hồ sơ", choose_photo: "Chọn ảnh",
        remove_photo: "Xóa ảnh", clear_data: "Xóa dữ liệu", theme: "Chủ đề",
        system: "Hệ thống", light: "Sáng", dark: "Tối", effects: "Hiệu ứng",
        blur_intensity: "Độ mờ", music: "Nhạc", browse_music: "Duyệt nhạc của bạn",
        languages_title: "Ngôn ngữ", selected_language_label: "Ngôn ngữ đã chọn",
        other_languages_label: "Ngôn ngữ khác", reset_order: "Đặt lại thứ tự",
        reset_library: "Đặt lại thư viện?", reset_library_text: "Bạn có muốn đặt lại thứ tự thư viện về bố cục mặc định không?",
        no: "Không", yes: "Có"
    }
};

const worldLanguages = [
    "English (United States)", "English (United Kingdom)", "English (Australia)", "English (Canada)",
    "Spanish (España)", "Spanish (Latinoamérica)", "French (France)", "French (Canada)",
    "German (Deutschland)", "Arabic (العربية)", "Armenian (Հայերեն)", "Asturian (Asturianu)",
    "Azerbaijani (Azərbaycan)", "Bangla (বাংলাদেশ)", "Bulgarian (България)", "Chinese (简体中文)",
    "Chinese (繁體中文)", "Croatian (Hrvatski)", "Czech (Čeština)", "Danish (Dansk)",
    "Dutch (Nederlands)", "Estonian (Eesti)", "Filipino", "Finnish (Suomi)", "Greek (Ελληνικά)",
    "Hebrew (עברית)", "Hindi (हिन्दी)", "Hungarian (Magyar)", "Indonesian (Bahasa Indonesia)",
    "Italian (Italiano)", "Japanese (日本語)", "Korean (한국어)", "Malay (Bahasa Melayu)",
    "Norwegian (Norsk)", "Polish (Polski)", "Portuguese (Brasil)", "Portuguese (Portugal)",
    "Romanian (Română)", "Russian (Русский)", "Serbian (Српски)", "Slovak (Slovenčina)",
    "Swedish (Svenska)", "Thai (ไทย)", "Turkish (Türkçe)", "Ukrainian (Українська)", "Vietnamese (Tiếng Việt)"
];


let currentSelectedLanguage = localStorage.getItem('appLanguage') || "English (United States)";

function setAppLanguage(lang) {
    currentSelectedLanguage = lang;
    localStorage.setItem('appLanguage', lang);
    document.getElementById('current-lang-subtitle').innerText = lang;
    
    const dict = translations[lang] || translations["English (United States)"];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });

    renderLanguagesModalLists();
    closeLanguagesModal();
}

function openLanguagesModal() {
    const modal = document.getElementById('languages-modal');
    const overlay = document.getElementById('languages-overlay');
    // Ensure independent overlay layer over settings
    overlay.style.zIndex = "10000";
    modal.style.zIndex = "10001";
    
    overlay.style.display = 'block';
    modal.style.display = 'flex';
    renderLanguagesModalLists();
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeLanguagesModal() {
    const modal = document.getElementById('languages-modal');
    const overlay = document.getElementById('languages-overlay');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        overlay.style.zIndex = "";
        modal.style.zIndex = "";
    }, 400);
}

function renderLanguagesModalLists() {
    const selectedContainer = document.getElementById('selected-language-container');
    selectedContainer.innerHTML = `
        <div class="theme-option" onclick="setAppLanguage('${currentSelectedLanguage}')" style="padding: 12px 0;">
            <div class="title" style="font-weight: 600;">${currentSelectedLanguage}</div>
            <i data-lucide="check" class="check-icon" style="color:var(--ios-blue);"></i>
        </div>
    `;

    const otherContainer = document.getElementById('other-languages-container');
    otherContainer.innerHTML = '';
    
    worldLanguages.forEach((lang, idx) => {
        const item = document.createElement('div');
        item.className = 'theme-option';
        item.style.padding = '14px 0';
        item.innerHTML = `
            <div class="title">${lang}</div>
            ${lang === currentSelectedLanguage ? '<i data-lucide="check" class="check-icon" style="color:var(--ios-blue);"></i>' : ''}
        `;
        item.onclick = () => setAppLanguage(lang);
        otherContainer.appendChild(item);

        if (idx < worldLanguages.length - 1) {
            const div = document.createElement('div');
            div.className = 'divider';
            otherContainer.appendChild(div);
        }
    });
    lucide.createIcons();
}

function showPage(pageId, element, index) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const selector = document.getElementById('active-selector');
    if (index <= 2) {
        const container = document.getElementById('tab-container');
        const tabWidth = container.offsetWidth / 3;
        selector.style.left = `${(index * tabWidth) + 5}px`;
        selector.style.width = `${tabWidth - 10}px`;
        selector.style.opacity = "1";
    } else {
        selector.style.opacity = "0";
    }
}

let sortableInstance;
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('active-selector');
    const container = document.getElementById('tab-container');
    selector.style.width = `${(container.offsetWidth / 3) - 10}px`;
    selector.style.left = "5px";

    const savedOrder = JSON.parse(localStorage.getItem('libraryOrder'));
    if (savedOrder) {
        const menu = document.getElementById('library-menu');
        savedOrder.forEach(id => {
            const item = menu.querySelector(`[data-id="${id}"]`);
            if (item) menu.appendChild(item);
        });
    }

    const savedPic = localStorage.getItem('userProfilePic');
    const fName = localStorage.getItem('userFirstName') || "";
    const lName = localStorage.getItem('userLastName') || "";

    document.getElementById('first-name').value = fName;
    document.getElementById('last-name').value = lName;

    updateAllProfileUI(savedPic, fName, lName);

    const savedTheme = localStorage.getItem('user-theme') || 'system';
    setTheme(savedTheme);

    const savedBlur = localStorage.getItem('userBlurIntensity') || '20';
    document.documentElement.style.setProperty('--dynamic-blur', `${savedBlur}px`);
    
    const blurSlider = document.getElementById('blur-slider');
    if (blurSlider) blurSlider.value = savedBlur;

    setAppLanguage(currentSelectedLanguage);

    if (document.fonts) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }
    lucide.createIcons();
});

function updateAllProfileUI(imageData, firstName, lastName) {
    const containers = document.querySelectorAll('.profile-container');
    const badge = document.querySelector('.badge');
    const title = document.querySelector('.profile-info .title');
    const avatarPreview = document.getElementById('avatar-preview');
    const settingsAvatar = document.querySelector('.settings-card .avatar-placeholder');

    if (imageData) {
        const imgHTML = `<img src="${imageData}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
        containers.forEach(c => c.innerHTML = imgHTML);
        if (avatarPreview) avatarPreview.innerHTML = imgHTML;
        if (settingsAvatar) {
            settingsAvatar.innerHTML = imgHTML;
            settingsAvatar.style.background = 'transparent';
        }
    }
    
    const nameString = `${firstName || ""} ${lastName || ""}`.trim();
    if (title) title.innerText = nameString || "Unknown ID";
    
    if (badge && (firstName || lastName)) {
        const initials = ((firstName ? firstName[0] : "") + (lastName ? lastName[0] : "")).toUpperCase();
        badge.innerText = initials || "";
    }
}

function openDetail(title, iconName) {
    document.getElementById('page-library').classList.remove('active');
    const detailPage = document.getElementById('page-detail');
    detailPage.classList.add('active');
    document.getElementById('detail-title').innerText = title;
    if (title === 'Songs') renderSongsList();
    lucide.createIcons();
}

function backToLibrary() {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-library').classList.add('active');
}

function closePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; overlay.style.display = 'none'; }, 250); 
    }
}

function togglePopup() {
    const menu = document.getElementById('popup-menu');
    const overlay = document.getElementById('popup-overlay');
    if (menu.classList.contains('show')) {
        closePopup();
    } else {
        overlay.style.display = 'block';
        menu.style.display = 'block';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
}

function toggleEditMode(isEditing) {
    const libraryPage = document.getElementById('page-library');
    const menu = document.getElementById('library-menu');
    if (isEditing) {
        libraryPage.classList.add('editing');
        sortableInstance = new Sortable(menu, {
            handle: '.reorder-handle',
            animation: 300,
            onEnd: saveLibraryState
        });
        closePopup();
    } else {
        libraryPage.classList.remove('editing');
        if (sortableInstance) sortableInstance.destroy();
        saveLibraryState();
    }
}

function saveLibraryState() {
    const items = Array.from(document.querySelectorAll('.menu-item'));
    const order = items.map(item => item.getAttribute('data-id'));
    localStorage.setItem('libraryOrder', JSON.stringify(order));
}

function toggleTick(element) {
    const icon = element.querySelector('.edit-circle');
    const isChecked = icon.getAttribute('data-lucide') === 'check-circle-2';
    icon.setAttribute('data-lucide', isChecked ? 'circle' : 'check-circle-2');
    icon.classList.add('tick-transition');
    lucide.createIcons();
    setTimeout(() => icon.classList.remove('tick-transition'), 200);
}

function openSettings() {
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('settings-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => { modal.classList.add('show'); lucide.createIcons(); }, 10);
}

function closeSettings() {
    const modal = document.getElementById('settings-modal');
    const overlay = document.getElementById('settings-overlay');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; overlay.style.display = 'none'; }, 400);
}

function openEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    const overlay = document.getElementById('edit-profile-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    const overlay = document.getElementById('edit-profile-overlay');
    const savedFName = localStorage.getItem('userFirstName') || "";
    const savedLName = localStorage.getItem('userLastName') || "";
    
    document.getElementById('first-name').value = savedFName;
    document.getElementById('last-name').value = savedLName;

    const savedPic = localStorage.getItem('userProfilePic');
    const avatarPreview = document.getElementById('avatar-preview');
    if (savedPic && avatarPreview) {
        avatarPreview.innerHTML = `<img src="${savedPic}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
    } else if (avatarPreview) {
        avatarPreview.innerHTML = `<i data-lucide="user"></i>`;
        lucide.createIcons();
    }
    tempProfilePic = null;

    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 400);
}

function saveProfileChanges() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    localStorage.setItem('userFirstName', firstName);
    localStorage.setItem('userLastName', lastName);
    
    if (tempProfilePic) {
        localStorage.setItem('userProfilePic', tempProfilePic);
        tempProfilePic = null;
    }
    updateAllProfileUI(localStorage.getItem('userProfilePic'), firstName, lastName);
    closeEditProfile();
}

function showCustomAlert(type) {
    const overlay = document.getElementById('custom-alert');
    const title = document.getElementById('alert-title');
    const msg = document.getElementById('alert-msg');
    const confirmBtn = document.getElementById('confirm-btn');

    confirmBtn.className = 'ios-alert-btn ios-alert-btn-destructive';

    if (type === 'photo') {
        title.innerText = "Remove Photo";
        msg.innerText = "Are you sure you want to remove current photo?";
        confirmBtn.onclick = () => {
            localStorage.removeItem('userProfilePic');
            updateAllProfileUI(null, document.getElementById('first-name').value, document.getElementById('last-name').value);
            closeAlert();
        };
    } else {
        title.innerText = "Clear Data";
        msg.innerText = "Are you sure you want to clear data?";
        confirmBtn.onclick = () => {
            localStorage.clear();
            document.getElementById('first-name').value = "";
            document.getElementById('last-name').value = "";
            updateAllProfileUI(null, "", "");
            closeAlert();
            closeEditProfile();
        };
    }
    overlay.style.display = 'flex';
}

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

function openUI() {
    const modal = document.getElementById('ui-modal');
    const overlay = document.getElementById('ui-overlay');
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => { modal.classList.add('show'); lucide.createIcons(); }, 10);
}

function closeUI() {
    const modal = document.getElementById('ui-modal');
    const overlay = document.getElementById('ui-overlay');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; overlay.style.display = 'none'; }, 400);
}

function setTheme(theme) {
    if (theme === 'system') {
        localStorage.removeItem('user-theme');
        applySystemTheme();
    } else {
        localStorage.setItem('user-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }
    updateUIActiveState(theme);
}

function applySystemTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

function updateUIActiveState(activeTheme) {
    document.querySelectorAll('.theme-option').forEach(el => {
        if (el.dataset.theme) {
            el.querySelector('.check-icon').style.display = 
                (el.dataset.theme === activeTheme) ? 'block' : 'none';
        }
    });
}

const DEFAULT_ORDER = ["Playlists", "Artists", "Albums", "Songs", "TV-Movies", "Music-Videos", "Genres", "Compilations", "Composers"];

function showResetPopup() {
    document.getElementById('reset-alert').style.display = 'flex';
}

function closeResetPopup() {
    document.getElementById('reset-alert').style.display = 'none';
}

function resetLibraryOrder() {
    const menu = document.getElementById('library-menu');
    const items = Array.from(menu.querySelectorAll('.menu-item'));
    items.forEach(item => {
        item.classList.add('resetting');
        setTimeout(() => item.classList.remove('resetting'), 400);
    });

    DEFAULT_ORDER.forEach(id => {
        const item = menu.querySelector(`[data-id="${id}"]`);
        if (item) menu.appendChild(item);
    });

    localStorage.removeItem('libraryOrder');
    closeResetPopup();
    toggleEditMode(false);
}

function updateBlur(value) {
    document.documentElement.style.setProperty('--dynamic-blur', `${value}px`);
    localStorage.setItem('userBlurIntensity', value);
}

let musicLibrary = [];
const audioPlayer = new Audio();

function handleMusicFiles(input) {
    musicLibrary = Array.from(input.files).filter(file => file.type.startsWith('audio/'));
    renderSongsList();
    closeSettings();
}

function renderSongsList() {
    const listContainer = document.getElementById('songs-list-container');
    listContainer.innerHTML = '';
    const sortedSongs = musicLibrary.sort((a, b) => a.name.localeCompare(b.name));
    let currentLetter = '';
    
    sortedSongs.forEach(file => {
        const firstLetter = file.name[0].toUpperCase();
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            const header = document.createElement('div');
            header.className = 'alpha-header';
            header.innerText = currentLetter;
            listContainer.appendChild(header);
        }
        const item = document.createElement('div');
        item.className = 'song-item';
        item.innerHTML = `
            <div class="song-info">
                <div class="title">${file.name}</div>
                <div class="artist">Unknown Artist</div>
            </div>
            <i data-lucide="more-horizontal"></i>
        `;
        listContainer.appendChild(item);
    });
    lucide.createIcons();
}




function openPlayerModal() {
    const modal = document.getElementById('player-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closePlayerModal() {
    const modal = document.getElementById('player-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}




function previewFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            tempProfilePic = e.target.result;
            document.getElementById('avatar-preview').innerHTML = 
                `<img src="${tempProfilePic}" style="width:100%; height:100%; border-radius:50%; object-fit:cover; display:block;">`;
        };
        reader.readAsDataURL(file);
    }
}

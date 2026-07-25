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
    "French (France)": {
        home: "Accueil", new: "Nouveau", library: "Bibliothèque", search: "Rechercher",
        playlists: "Listes", artists: "Artistes", albums: "Albums", songs: "Morceaux",
        tv_movies: "TV & Films", music_videos: "Vidéos", genres: "Genres",
        compilations: "Compilations", composers: "Compositeurs", play: "Lecture", shuffle: "Aleatoire",
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

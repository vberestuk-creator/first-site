const langBtn = document.getElementById('langBtn');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const mainBtn = document.querySelector('.btn');

// Тексты
const content = {
  en: {
    title: 'Vitalii Berestiuk',
    subtitle: 'Junior Frontend Developer',
    button: 'View Project',
    lang: 'UA'
  },
  ua: {
    title: 'Віталій Берестюк',
    subtitle: 'Початковий Frontend розробник',
    button: 'Переглянути проєкт',
    lang: 'EN'
  }
};

function applyLanguage(lang) {
  title.textContent = content[lang].title;
  subtitle.textContent = content[lang].subtitle;
  mainBtn.textContent = content[lang].button;
  langBtn.textContent = content[lang].lang;
}

// 1) читаем сохранённый язык (если есть)
let currentLang = localStorage.getItem('lang') || 'en';
applyLanguage(currentLang);

// 2) переключаем и сохраняем
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ua' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
});

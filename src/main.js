import './styles/main.less';

// Menú hamburguesa en móvil
const toggle = document.querySelector('.navbar__toggle');
const links = document.querySelector('.navbar__links');

toggle?.addEventListener('click', () => {
  links.classList.toggle('is-open');
});

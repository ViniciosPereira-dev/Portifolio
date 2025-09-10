// Seleção
const menuBtn = document.getElementById('menu_btn');
const closeBtn = document.getElementById('close_btn');
const sidebar = document.getElementById('sidebar');
const cardsFormacao = document.querySelectorAll('.formacao-card');

// Eventos
if (menuBtn && closeBtn && sidebar) {

  // Abrir sidebar
  menuBtn.addEventListener('click', (e) => {
    sidebar.classList.add('active');
    menuBtn.classList.add('hidden');
    e.stopPropagation(); // evita que o clique abra e feche ao mesmo tempo
  });

  // Fechar sidebar pelo botão
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('hidden')
  });

  // Evitar que clicar dentro da sidebar feche ela
  sidebar.addEventListener('click', (e) => e.stopPropagation());

  // Fechar sidebar clicando fora
  document.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      menuBtn.classList.remove('hidden')
    }
  });

}

const skills = document.querySelectorAll('#habilidades .skill');
const observerSkills = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const barra = entry.target.querySelector('.skill-progresso');
      const porcentagem = barra.dataset.porcentagem;
      barra.style.width = porcentagem + '%';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
skills.forEach(skill => observerSkills.observe(skill));

const observerFormacao = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });
cardsFormacao.forEach(card => observerFormacao.observe(card));

lottie.loadAnimation({
  container: document.getElementById('animacao-telefone'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/WHATSAPP BUTTON.json'
});

// Botão de tema
const toggleTheme = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

// Função para alternar tema
function switchTheme() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

// Evento de clique
if (toggleTheme) {
  toggleTheme.addEventListener("click", (e) => {
    e.preventDefault();
    switchTheme();
  });
}

// Seleciona o ícone de tema na versão desktop
const themeIconDesktop = document.querySelector('.list_header.desktop .fa-moon');

if (themeIconDesktop) {
    themeIconDesktop.addEventListener('click', (e) => {
        e.preventDefault(); // agora funciona
        document.body.classList.toggle('dark-theme');

        // Alterna ícone entre lua e sol
        if(document.body.classList.contains('dark-theme')){
            themeIconDesktop.classList.remove('fa-moon');
            themeIconDesktop.classList.add('fa-sun');
        } else {
            themeIconDesktop.classList.remove('fa-sun');
            themeIconDesktop.classList.add('fa-moon');
        }

        // salvar preferência no localStorage
        if(document.body.classList.contains('dark-theme')){
            localStorage.setItem("theme","dark");
        } else {
            localStorage.setItem("theme","light");
        }
    });
}

const sidebarD = document.querySelector('.sidebar_desktop');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const sidebarHeight = sidebar.offsetHeight;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    sidebarD.style.top = `${footerTop - sidebarHeight}px`;
  } else {
    sidebarD.style.top = '60px'; // posição normal
  }
});

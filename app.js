const button = document.getElementById('menuBtn');
const nav = document.getElementById('navigation');
const navAbout = document.getElementById('navAbout');
const navProject = document.getElementById('navProject');
const navContact = document.getElementById('navContact');

navAbout.addEventListener('click', checkMenu)

navProject.addEventListener('click', checkMenu)

navContact.addEventListener('click', checkMenu)

button.addEventListener('click', menuToggle);

const list = [
    {
        projeto: "Gerador de senhas",
        github: "https://github.com/NotJotunnn/Password-Generator",
        imagem: "passwordgenedit.jpg"
    },
    {
        projeto: "Gerador de senhas <br>(via CLI)",
        github: "https://github.com/NotJotunnn/passwordGenCLI",
        imagem: "passwordgencliedit.jpg"
    },
    {
        projeto: "Teclado Electron",
        github: "https://github.com/NotJotunnn/electron_keyboard",
        imagem: "electrickeyboardedit.jpg"
    },
    {
        projeto: "Lista de à fazeres",
        github: "https://github.com/NotJotunnn/Task-list",
        imagem: "tasklistedit.jpg"
    },
    {
        projeto: "Cópia simplificada do Airbnb",
        github: "https://github.com/NotJotunnn/Airbnbclone",
        imagem: "airbnbsimplifiededit.jpg"
    },
    {
        projeto: "'Fint' <br>(via CLI)",
        github: "https://github.com/NotJotunnn/Fint",
        imagem: "fintedit.jpg"
    },
    {
        projeto: "Gerador de memes <br>(com React)",
        github: "https://github.com/NotJotunnn/MemeGen",
        imagem: "memegenedit.jpg"
    },
    {
        projeto: "Tela de login <br>(não funcional)",
        github: "https://github.com/NotJotunnn/Login-screen",
        imagem: "loginscreenedit.jpg"
    },
];

function getRecentStatus() {
    const status = document.getElementById('status');

    const date = new Date()

    const year = date.getFullYear()

    const semester = date.getMonth() >= 6 ? (year - 2019) * 2 : (year - 2019) * 2 - 1


    status.textContent = 'Atualmente estou cursando o ' + semester + 'º  semestre de ciências da computação'
}

function menuToggle() {
    if(nav.classList.contains('non-visible')) return nav.classList.remove('non-visible');
    nav.classList.add('non-visible');
};

function galleryLoader() {
    const cards = document.getElementById('gallery');

    let blocks = '';

    list.map(item => {
        blocks += `
        <div class="card" style="background: url('./assets/projects/${item.imagem}') no-repeat center; background-size: cover;">
            <div class="card-description">
                <h4>${item.projeto}</h4>
                <a target="_blank" href="${item.github}"><button><i class="fa-brands fa-github"></i></button></a>
            </div>
            <div class="background"></div>
        </div>
        `;
    });

    cards.innerHTML = blocks;
};

function checkMenu() {
    if(nav.classList.contains('non-visible')) return;
    nav.classList.add('non-visible');
}

galleryLoader()
getRecentStatus()
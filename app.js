const button = document.getElementById('menuBtn');
const nav = document.getElementById('navigation');
const navAbout = document.getElementById('navAbout');
const navProject = document.getElementById('navProject');
const navContact = document.getElementById('navContact');

const projectList = [
    {
        name: 'Teclado Electron',
        desc: `Este é o Teclado Electron! (rsrsrs)<br><br>Feito por mim para me divertir com meus amigos e me desafiar!`,
        github: 'https://github.com/NotJotunnn/electron_keyboard',
        bgimg: 'keyboard.png',
        size: 2
    },
    {
        name: 'Fint',
        desc: `Este é Fint!<br><br>Um grupo de comandos com o objetivo de mover arquivos da pasta de download até o arquivo presente sem precisar ficar lembrando de usar pwd entre outros!<br><br>Parte do que o torna tão único está presente no fato de que ele foi feito no Bashscript e com a ajuda de Zsh(tornando ele um "comando"), ele funciona como qualquer outro comando no terminal!`,
        github: 'https://github.com/NotJotunnn/Fint',
        bgimg: 'fint.png',
        size: 3
    },
    {
        name: 'Site Airbnb (Simplificado)',
        desc: `Esta é uma duplicata "simplificada", foi parte de um curso de React de Scrimba!`,
        github: 'https://github.com/NotJotunnn/Airbnbclone',
        bgimg: 'airbnb.png',
        size: 1
    },
    {
        name: 'Tela de login (não funcional)',
        desc: `Esta é uma tela de login não funcional feita com o objetivo de praticar os conceitos básicos de HTML e CSS! realizada durante o decorrer do curso na Rocketseat!`,
        github: 'https://github.com/NotJotunnn/Login-screen',
        bgimg: 'login.png',
        size: 1
    },
    {
        name: 'Gerador de Senhas!',
        desc: `Este projeto, em comparação ao Fint, foi feito em Node, parte do que o torna diferencial está na sua utilização de pacotes do npm com clipboardy para realizar funções cada vez mais rápidas! Em 1 linha de comando se é possível:<br><br>Escolher quais tipos de caracteres podem se usar<br><br>Especificar quantidade de vezes em que cada caractere deve se repetir<br><br>A mensagem (Caso se queira salvar a senha gerada!)<br><br>E por último, caso seja optado por apenas utilizar caracteres específicos em quantidade (item 2), pode-se também alterar o valor padrão!<br><br>Sugestão: utilize 255 caracteres para máxima segurança! (rsrsrsrs)`,
        github: 'https://github.com/NotJotunnn/passwordGenCLI',
        bgimg: 'CLIpass.png',
        size: 3
    },
    {
        name: 'Gerador de memes!',
        desc: `Este foi um projeto vindo direto do curso Scrimba!<br><br>Baseado na solução provida.`,
        github: 'https://github.com/NotJotunnn/MemeGen',
        bgimg: 'meme.png',
        size: 1
    },
    {
        name: 'Gerador de senhas (app)',
        desc: `Este foi um dos meus primeiros aplicativos feitos no Electron por conta (parcialmente rsrs) própria!<br><br>Seus diferencial vindo do fato que ele funciona como qualquer outro aplicativo, ou seja, muito mais amigável que a interface de linha de comando!`,
        github: 'https://github.com/NotJotunnn/Password-Generator',
        bgimg: 'password.png',
        size: 1
    },
    {
        name: 'Lista de afazeres! (webapp)',
        desc: `Este foi um dos primeiros aplicativos de web feitos por mim!<br><br>Este utiliza uma API local rudimentar para inserir novos dados à lista, ou remover antigos! E também tem um nome chato de se escrever!`,
        github: 'https://github.com/NotJotunnn/Task-list',
        bgimg: 'task.png',
        size: 2
    }
]

navAbout.addEventListener('click', checkMenu)

navProject.addEventListener('click', checkMenu)

navContact.addEventListener('click', checkMenu)

button.addEventListener('click', menuToggle);

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

function loadGallery() {
    const cards = document.getElementById('gallery');

    let blocks = '';

    projectList.map(item => {
        blocks += `
        <div style="background-image: url('${platformChecker() == true ? './assets/projects/med' + item.bgimg : './assets/projects/' + item.bgimg}');" class="card mobile size-${item.size}">
                    <div class="card-content">
                        <h2>${item.name}</h2>
                        <div class="card-box"></div>
                        <p>${item.desc}</p>
                        <div class="card-buttons-group">
                            <a target="_blank" href="${item.github}"><button><i class="fa-brands fa-square-github"></i></button></a>
                        </div>
                    </div>
                    <div class="card-background"></div>
                </div>
        `;
    });

    cards.innerHTML = blocks;
}

function platformChecker() {
    const isPhone = window.matchMedia('(pointer:coarse)');
    return (isPhone && isPhone.matches)
}

function checkMenu() {
    if(nav.classList.contains('non-visible')) return;
    nav.classList.add('non-visible');
}

loadGallery()
getRecentStatus()
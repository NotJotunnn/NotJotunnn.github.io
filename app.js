const nav = document.getElementById('navigation');
const body = document.querySelector('body');
const html = document.querySelector('html');

const modal = document.getElementById('modal');
const sidebar = document.getElementById('sidebar');
const background = document.getElementById('background');
const pictureDisplayer = document.getElementById('showPicture');
const downloadImage = document.getElementById('downloadPicture');

const magnifyingHover = document.getElementById('magnifyingHover');
const magnifyingImg = document.getElementById('magnifyingImg');

const projectList = [
    {
        name: 'Teclado Electron',
        description: `Este é o Teclado Electron! (rsrsrs)<br><br>Feito por mim para me divertir com meus amigos e me desafiar!`,
        links: ['https://github.com/NotJotunnn/electron_keyboard'],
        socials: [],
        company: '',
        bgimg: 'keyboard.png',
        fullimg: 'keyboard.jpeg',
        size: 2,
        position: 0,
        tools: 'Electron, Node, HTML, CSS, Javascript',
        client: 'Eu e a galera!',
        objective: 'Diversão'
    },
    {
        name: 'Fint',
        description: `Este é Fint!<br><br>Um grupo de comandos com o objetivo de mover arquivos da pasta de download até o arquivo presente sem precisar ficar lembrando de usar pwd entre outros!<br><br>Parte do que o torna tão único está presente no fato de que ele foi feito no Bashscript e com a ajuda de Zsh(tornando ele um "comando"), ele funciona como qualquer outro comando no terminal!`,
        links: ['https://github.com/NotJotunnn/Fint'],
        socials: [],
        company: '',
        bgimg: 'fint.png',
        fullimg: 'fint.jpeg',
        size: 3,
        position: 1,
        tools: 'Bashscript, Zsh',
        client: 'A mim mesmo',
        objective: 'Melhor facilitar o <span class="italic">workflow</span> pelo terminal'
    },
    {
        name: 'My Travel Journey!',
        description: `Este é um projeto focado no estudo de props!`,
        links: ['https://github.com/NotJotunnn/Airbnbclone'],
        socials: [],
        company: '',
        bgimg: 'mytraveljourney.png',
        fullimg: 'mytraveljourney.jpeg',
        size: 1,
        position: 2,
        tools: 'React, Node, HTML, CSS',
        client: 'Fictício',
        objective: 'Tarefa do curso de Scrimba para praticar a ideia de props!'
    },
    {
        name: 'Tela de login (não funcional)',
        description: `Esta é uma tela de login não funcional feita com o objetivo de praticar os conceitos básicos de HTML e CSS!`,
        links: ['https://github.com/NotJotunnn/Login-screen'],
        socials: [],
        company: '',
        bgimg: 'login.png',
        fullimg: 'loginscreen.jpeg',
        size: 1,
        position: 3,
        tools: 'HTML, CSS',
        client: 'Fictício',
        objective: 'Tarefa do curso da Rocketseat'
    },
    {
        name: 'Gerador de Senhas!',
        description: `Este projeto, em comparação ao Fint, foi feito em Node, parte do que o torna diferencial está na sua utilização de pacotes do npm com clipboardy para realizar funções cada vez mais rápidas! Em 1 linha de comando se é possível:<br><br>Escolher quais tipos de caracteres podem se usar<br><br>Especificar quantidade de vezes em que cada caractere deve se repetir<br><br>A mensagem (Caso se queira salvar a senha gerada!)<br><br>E por último, caso seja optado por apenas utilizar caracteres específicos em quantidade (item 2), pode-se também alterar o valor padrão!<br><br>Sugestão: utilize 255 caracteres para máxima segurança! (rsrsrsrs)`,
        links: ['https://github.com/NotJotunnn/passwordGenCLI'],
        company: '',
        bgimg: 'CLIpass.png',
        fullimg: 'passwordgencli.jpeg',
        size: 3,
        position: 4,
        tools: 'Javascript, Node',
        client: 'A mim mesmo',
        objective: 'Criar um método de geração de senhas decentralizado, pessoal e com capacidade de armazenamento local!'
    },
    {
        name: 'Gerador de memes!',
        description: `O gerador de memes é um projeto com o enfoque na diversão acima da funcionalidade (rsrsrs). Sendo fantástico com memes de até 1 tela.`,
        links: ['https://github.com/NotJotunnn/MemeGen'],
        company: '',
        bgimg: 'meme.png',
        fullimg: 'memegen.jpeg',
        size: 1,
        position: 5,
        tools: 'Node, React, HTML, CSS, Javascript',
        client: 'Eu e a galera!',
        objective: 'Tarefa do curso de Scrimba'
    },
    {
        name: 'Gerador de senhas (app)',
        description: `Este foi um dos meus primeiros aplicativos feitos no Electron por conta (parcialmente rsrs) própria!<br><br>Seus diferencial vindo do fato que ele funciona como qualquer outro aplicativo, ou seja, muito mais amigável que a interface de linha de comando!<br><br>Está e a versão arcaica de sua versão de CLI!`,
        links: ['https://github.com/NotJotunnn/Password-Generator'],
        company: '',
        bgimg: 'password.png',
        fullimg: 'passwordgenapp.jpeg',
        size: 1,
        position: 6,
        tools: 'Node, Electron, Javascript, HTML, CSS',
        client: 'Fictício',
        objective: 'Criar um método de geração de senhas decentralizado e pessoal!'
    },
    {
        name: 'Lista de afazeres! (webapp)',
        description: `Este foi um dos primeiros aplicativos de web feitos por mim!<br><br>Este utiliza uma API local rudimentar para inserir novos dados à lista, ou remover antigos! E também tem um nome chato de se escrever!`,
        links: ['https://github.com/NotJotunnn/Task-list'],
        company: '',
        bgimg: 'task.png',
        fullimg: 'tasklist.jpeg',
        size: 2,
        position: 7,
        tools: 'Node, API, Javascript, HTML, CSS',
        client: 'Fictício',
        objective: 'Facilitar à partir da comunicação local entre servidor e cliente o simples armazenamento de dados (tarefas) e sua constância.'
    }
];

// Header related (mostly for mobile)

function menuToggle() {
    if(nav.classList.contains('non-visible')) return nav.classList.remove('non-visible');
    nav.classList.add('non-visible');
};

function loadGallery() {
    const cards = document.getElementById('gallery');

    var count = 0;

    projectList.map(item => {
        cards.innerHTML += `
        <div style="background-image: url('${platformChecker() == true ? './assets/projects/med' + item.bgimg : './assets/projects/' + item.bgimg}');" class="card mobile size-${item.size}">
                    <div class="card-content">
                        <h2>${item.name}</h2>
                        <div class="card-box"></div>
                        <p>${item.description}</p>
                        <div class="card-buttons-group">
                            <a target="_blank" href="${item.links}"><button><i class="fa-brands fa-square-github"></i></button></a>
                            <button onclick="togglePoppup(${count})">
                            <i class="fa-solid fa-eye"></i></button>
                        </div>
                    </div>
                    <div class="card-background"></div>
                </div>
        `;
        count++;
    });
}

function platformChecker() {
    const isPhone = window.matchMedia('(pointer:coarse)');
    return (isPhone && isPhone.matches)
}

function checkMenu() {
    if(nav.classList.contains('non-visible')) return;
    nav.classList.add('non-visible');
}


// Modal related

function togglePoppup(num) {
    toggleBackground(num)
    loadPopup(num)

    if(modal.classList.contains('on-screen')) {
        sidebar.classList.remove('on-screen');
        body.classList.remove('no-scroll');
        html.classList.remove('no-scroll');
        return modal.classList.remove('on-screen');
    }
    
    sidebar.classList.add('on-screen');
    body.classList.add('no-scroll');
    html.classList.add('no-scroll');
    modal.classList.add('on-screen');
};

function toggleOffAllPoppup() {
    sidebar.classList.remove('on-screen');
    modal.classList.remove('on-screen');
    background.classList.remove('on-screen');
    background.classList.remove('on-top');
    pictureDisplayer.classList.remove('on-screen');
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll');
}

function toggleBackground(num) {
    if(background.classList.contains('on-screen') && num == 0) {
        return background.classList.remove('on-screen');
    }

    background.classList.add('on-screen');
};

function showPicture() {
    background.classList.add('on-top');
    pictureDisplayer.classList.add('on-screen');
}

function closeDisplayer() {
    background.classList.remove('on-top');
    pictureDisplayer.classList.remove('on-screen');
}

function loadModalContent(num) {
    magnifyingImg.setAttribute('src', './assets/projects/' + projectList[num].fullimg)
    downloadImage.setAttribute('href', './assets/projects/' + projectList[num].fullimg)

    modal.innerHTML = `<div class="background">
    <button id="visualize" onclick="showPicture()" class="modal-container"><img src="${'./assets/projects/' + projectList[num].fullimg}" alt="background"></button>

    <button class="close-button" onclick="togglePoppup(0)">X</button>
</div>

<div class="modal-content">
 <h4>${projectList[num].name || 'Nenhum nome disponível'}</h4>

<div class="info">
        <div class="client">
            <div class="name">
                <h5>Cliente:</h5>
                <p>${ projectList[num].client || 'John Doe (fictício)'}</p>
            </div>
            <div class="company">
                <h5>Empresa:</h5>
                <p>${ projectList[num].company || 'Lorem Ipsum.inc (fictício)'}</p>
            </div>
        </div>

        <div class="links">
            <div class="modal-project">
                <h5>Links:</h5>
                <a target="_blank" href="${ projectList[num].links}"><button><i class="fa-brands fa-github"></i></button></a>
            </div>
        </div>

        <div class="technology">
            <h5>Ferramentas usadas:</h5>
            <div class="text-box">
                <p>${ projectList[num].tools || 'Nenhuma ferramenta disponível'}</p>
            </div>
        </div>

        <div class="objective">
            <h5>Objetivo:</h5>
            <div class="text-box">
                <p>${ projectList[num].objective || 'Nenhum objetivo disponível'}</p>
            </div>
        </div>
    </div>

    <div class="desc">
        <h5>Descrição:</h5>
        <div class="text-box">
            <p>${ projectList[num].description || 'Nenhuma descrição disponível'}</p>
        </div>
    </div>
</div>
`;
};
function loadSidebarContent(num) {
    magnifyingImg.setAttribute('src', './assets/projects/' + projectList[num].fullimg)
    downloadImage.setAttribute('href', './assets/projects/' + projectList[num].fullimg)

    sidebar.innerHTML = `<div class="background">
    <button id="visualize" onclick="showPicture()" class="sidebar-container"><img src="${'./assets/projects/med' + projectList[num].bgimg}" alt="background"></button>

    <button class="close-button" onclick="togglePoppup(0)">X</button>
</div>

<div class="sidebar-content">
 <h4>${projectList[num].name || 'Nenhum nome disponível'}</h4>

<div class="info">
        <div class="client">
            <div class="name">
                <h5>Cliente:</h5>
                <p>${ projectList[num].client || 'John Doe (fictício)'}</p>
            </div>
            <div class="company">
                <h5>Empresa:</h5>
                <p>${ projectList[num].company || 'Lorem Ipsum.inc (fictício)'}</p>
            </div>
        </div>

        <div class="links">
            <div class="sidebar-project">
                <h5>Links:</h5>
                <a target="_blank" href="${ projectList[num].links}"><button><i class="fa-brands fa-github"></i></button></a>
            </div>
        </div>

        <div class="technology">
            <h5>Ferramentas usadas:</h5>
            <div class="text-box">
                <p>${ projectList[num].tools || 'Nenhuma ferramenta disponível'}</p>
            </div>
        </div>

        <div class="objective">
            <h5>Objetivo:</h5>
            <div class="text-box">
                <p>${ projectList[num].objective || 'Nenhum objetivo disponível'}</p>
            </div>
        </div>
    </div>

    <div class="desc">
        <h5>Descrição:</h5>
        <div class="text-box">
            <p>${ projectList[num].description || 'Nenhuma descrição disponível'}</p>
        </div>
    </div>
</div>
`;
};

function loadPopup(num) {
    if(platformChecker()) return loadSidebarContent(num);
    return loadModalContent(num);
}

function resetZoom() {
    magnifyingImg.setAttribute('style', "transform: translate(-50%, -50%) scale(1)")
}


magnifyingHover.addEventListener('mousemove', (event) => {
    clientX = event.clientX - magnifyingHover.offsetLeft;
    clientY = event.clientY - magnifyingHover.offsetTop;

    mWidth = magnifyingHover.offsetWidth;
    mHeight = magnifyingHover.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    magnifyingImg.setAttribute('style', `transform: translate(-${clientX}%, -${clientY}%) scale(2);"`)
})

magnifyingHover.addEventListener('mouseleave', () => {
    magnifyingImg.setAttribute('style', "transform: translate(-50%, -50%) scale(1)")
})


loadGallery();
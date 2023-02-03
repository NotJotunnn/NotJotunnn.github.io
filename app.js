const nav = document.getElementById('navigation');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const body = document.querySelector('body');

const projectList = [
    {
        name: 'Teclado Electron',
        desc: `Este é o Teclado Electron! (rsrsrs)<br><br>Feito por mim para me divertir com meus amigos e me desafiar!`,
        github: 'https://github.com/NotJotunnn/electron_keyboard',
        bgimg: 'keyboard.png',
        size: 2,
        position: 0,
        image: `https://picsum.photos/500/300`,
        technologies: 'Electron, Node, HTML, CSS e Javascript',
        client: 'Eu e a galera!',
        objective: 'Diversão'
    },
    {
        name: 'Fint',
        desc: `Este é Fint!<br><br>Um grupo de comandos com o objetivo de mover arquivos da pasta de download até o arquivo presente sem precisar ficar lembrando de usar pwd entre outros!<br><br>Parte do que o torna tão único está presente no fato de que ele foi feito no Bashscript e com a ajuda de Zsh(tornando ele um "comando"), ele funciona como qualquer outro comando no terminal!`,
        github: 'https://github.com/NotJotunnn/Fint',
        bgimg: 'fint.png',
        size: 3,
        position: 1,
        image: `https://picsum.photos/500/300`,
        technologies: 'Bashscript, Zsh',
        client: 'A mim mesmo',
        objective: 'Melhor facilitar o <span class="italic">workflow</span> pelo terminal'
    },
    {
        name: 'Site Airbnb (Simplificado)',
        desc: `Esta é uma duplicata "simplificada" do site Airbnb!`,
        github: 'https://github.com/NotJotunnn/Airbnbclone',
        bgimg: 'airbnb.png',
        size: 1,
        position: 2,
        image: `https://picsum.photos/500/300`,
        technologies: 'React, Node, HTML, CSS',
        client: 'Fictício',
        objective: 'Tarefa do curso de Scrimba para praticar a ideia de modelagem'
    },
    {
        name: 'Tela de login (não funcional)',
        desc: `Esta é uma tela de login não funcional feita com o objetivo de praticar os conceitos básicos de HTML e CSS!`,
        github: 'https://github.com/NotJotunnn/Login-screen',
        bgimg: 'login.png',
        size: 1,
        position: 3,
        image: `https://picsum.photos/500/300`,
        technologies: 'HTML, CSS',
        client: 'Fictício',
        objective: 'Tarefa do curso da Rocketseat'
    },
    {
        name: 'Gerador de Senhas!',
        desc: `Este projeto, em comparação ao Fint, foi feito em Node, parte do que o torna diferencial está na sua utilização de pacotes do npm com clipboardy para realizar funções cada vez mais rápidas! Em 1 linha de comando se é possível:<br><br>Escolher quais tipos de caracteres podem se usar<br><br>Especificar quantidade de vezes em que cada caractere deve se repetir<br><br>A mensagem (Caso se queira salvar a senha gerada!)<br><br>E por último, caso seja optado por apenas utilizar caracteres específicos em quantidade (item 2), pode-se também alterar o valor padrão!<br><br>Sugestão: utilize 255 caracteres para máxima segurança! (rsrsrsrs)`,
        github: 'https://github.com/NotJotunnn/passwordGenCLI',
        bgimg: 'CLIpass.png',
        size: 3,
        position: 4,
        image: `https://picsum.photos/500/300`,
        technologies: 'Javascript, Node',
        client: 'A mim mesmo',
        objective: 'Criar um método de geração de senhas decentralizado, pessoal e com capacidade de armazenamento local!'
    },
    {
        name: 'Gerador de memes!',
        desc: `O gerador de memes é um projeto com o enfoque na diversão acima da funcionalidade (rsrsrs). Sendo fantástico com memes de até 1 tela.`,
        github: 'https://github.com/NotJotunnn/MemeGen',
        bgimg: 'meme.png',
        size: 1,
        position: 5,
        image: `https://picsum.photos/500/300`,
        technologies: 'Node, React, HTML, CSS, Javascript',
        client: 'Eu e a galera!',
        objective: 'Tarefa do curso de Scrimba'
    },
    {
        name: 'Gerador de senhas (app)',
        desc: `Este foi um dos meus primeiros aplicativos feitos no Electron por conta (parcialmente rsrs) própria!<br><br>Seus diferencial vindo do fato que ele funciona como qualquer outro aplicativo, ou seja, muito mais amigável que a interface de linha de comando!<br><br>Está e a versão arcaica de sua versão de CLI!`,
        github: 'https://github.com/NotJotunnn/Password-Generator',
        bgimg: 'password.png',
        size: 1,
        position: 6,
        image: `https://picsum.photos/500/300`,
        technologies: 'Node, Electron, Javascript, HTML, CSS',
        client: 'Fictício',
        objective: 'Criar um método de geração de senhas decentralizado e pessoal!'
    },
    {
        name: 'Lista de afazeres! (webapp)',
        desc: `Este foi um dos primeiros aplicativos de web feitos por mim!<br><br>Este utiliza uma API local rudimentar para inserir novos dados à lista, ou remover antigos! E também tem um nome chato de se escrever!`,
        github: 'https://github.com/NotJotunnn/Task-list',
        bgimg: 'task.png',
        size: 2,
        position: 7,
        image: `https://picsum.photos/500/300`,
        technologies: 'Node, API, Javascript, HTML, CSS',
        client: 'Fictício',
        objective: 'Facilitar à partir da comunicação local entre servidor e cliente o simples armazenamento de dados (tarefas) e sua constância.'
    }
];

function menuToggle() {
    if(nav.classList.contains('non-visible')) return nav.classList.remove('non-visible');
    nav.classList.add('non-visible');
};

function loadGallery() {
    const cards = document.getElementById('gallery');



    projectList.map(item => {
        cards.innerHTML += `
        <div style="background-image: url('${platformChecker() == true ? './assets/projects/med' + item.bgimg : './assets/projects/' + item.bgimg}');" class="card mobile size-${item.size}">
                    <div class="card-content">
                        <h2>${item.name}</h2>
                        <div class="card-box"></div>
                        <p>${item.desc}</p>
                        <div class="card-buttons-group">
                            <a target="_blank" href="${item.github}"><button><i class="fa-brands fa-square-github"></i></button></a>
                            <button onclick="loadModalContent(${item.position})">
                            <i class="fa-solid fa-eye"></i></button>
                        </div>
                    </div>
                    <div class="card-background"></div>
                </div>
        `;
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

function toggleVisibility(item) {
    if(item.classList.contains('onscreen') == true) {
        // body.classList.remove('no-scroll');
        return item.classList.remove('onscreen');
    }
    item.classList.add('onscreen')
    // body.classList.add('no-scroll');
}

function loadModalContent(num) {

    toggleVisibility(modal)

    modalContent.innerHTML = `<button onclick="toggleVisibility(modal)"><i class="fa-solid fa-xmark"></i></button>
    <img class="modal-background-image" src="${'./assets/projects/med' + projectList[num].bgimg}" alt="">
    <h4>${projectList[num].name}</h4>
    <div class="category">
        <p><span class="technologies">Ferramentas usadas:</span><br>${projectList[num].technologies}</p>
        <p><span class="client">Cliente:</span><br>${projectList[num].client}</p>
        <p><span class="objective">Objetivo:</span><br>${projectList[num].objective}</p>
        <a target="_blank"  class="github" href="${projectList[num].github}"><button><i class="fa-brands fa-square-github"></i></button></a>
    </div>
    <p class="desc"><span class="description">Descrição:</span><br>${projectList[num].desc}</p>`;
};

loadGallery();
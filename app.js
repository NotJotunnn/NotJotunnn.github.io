const nav = document.getElementById('navigation');

const projectList = [
    {
        name: 'Fint',
        description: `Este é Fint!<br><br>Um grupo de comandos com o objetivo de mover arquivos da pasta de download até o arquivo presente sem precisar ficar lembrando de usar pwd entre outros!<br><br>Parte do que o torna tão único está presente no fato de que ele foi feito no Bashscript e com a ajuda de Zsh(tornando ele um "comando"), ele funciona como qualquer outro comando no terminal!`,
        links: ['https://github.com/NotJotunnn/Workflow-projects/tree/main/Fint'],
        fullimg: 'https://github.com/NotJotunnn/Workflow-projects/blob/main/Fint/github/fint.jpg?raw=true',
        tools: 'BASHSCRIPT, ZSH',
        client: 'A mim mesmo',
        objective: 'Melhor facilitar o <span class="italic">workflow</span> pelo terminal'
    },
    {
        name: 'Quizzical',
        description: `Este foi um dos mais maravilhosos projetos que eu já fiz! ele utiliza dados da Trivia API! E então limpa (Já que a API ainda usa JQuery) e aplica neste casual mas divertido pequeno jogo!`,
        links: ['https://github.com/NotJotunnn/Games/tree/main/Quizzical'],
        fullimg: 'https://github.com/NotJotunnn/Games/blob/main/Quizzical/github/quizzical3.jpeg?raw=true',
        tools: 'REACT, NODEJS, HTML5, CSS3',
        client: 'Fictício',
        objective: 'Criar um jogo simples'
    },
    {
        name: 'Gerador de senhas (app)',
        description: `Este foi um dos meus primeiros aplicativos feitos no Electron por conta (parcialmente rsrs) própria!<br><br>Seus diferencial vindo do fato que ele funciona como qualquer outro aplicativo, ou seja, muito mais amigável que a interface de linha de comando!<br><br>Está e a versão arcaica de sua versão de CLI!`,
        links: ['https://github.com/NotJotunnn/Projects/tree/main/Password-Generator'],
        fullimg: 'https://github.com/NotJotunnn/Projects/blob/main/Password-Generator/github/password.jpeg?raw=true',
        tools: 'NODEJS, ELECTRONJS, JAVASCRIPT, HTML5, CSS3',
        client: 'Fictício',
        objective: 'Criar um método de geração de senhas decentralizado e pessoal!'
    },
    {
        name: 'Lista de afazeres! (webapp)',
        description: `Este foi um dos primeiros aplicativos de web feitos por mim!<br><br>Este utiliza uma API local rudimentar para inserir novos dados à lista, ou remover antigos! E também tem um nome chato de se escrever!`,
        links: ['https://github.com/NotJotunnn/Projects/tree/main/tasks'],
        fullimg: 'https://github.com/NotJotunnn/Projects/blob/main/tasks/github/task1.jpeg?raw=true',
        tools: 'NODEJS, API, JAVASCRIPT, HTML5, CSS3',
        client: 'Fictício',
        objective: 'Facilitar à partir da comunicação local entre servidor e cliente o simples armazenamento de dados (tarefas) e sua constância.'
    }
];

// Header related (mostly for mobile)

function menuToggle() {
    if(nav.classList.contains('non-visible')) return nav.classList.remove('non-visible');
    nav.classList.add('non-visible');
};

function platformChecker() {
    const isPhone = window.matchMedia('(pointer:coarse)');
    return (isPhone && isPhone.matches)
}

function checkMenu() {
    if(nav.classList.contains('non-visible')) return;
    nav.classList.add('non-visible');
}

function loadProjects() {
    const projectElems = document.querySelectorAll('.project-card')

    projectElems.forEach((entry, index) => {
        entry.innerHTML = `
            <a rel="external" href="${projectList[index].links[0]}" target="_blank" class="project-card-link" style="background-image: url('${projectList[index].fullimg}'); background-size: cover;background-position: center; ${index == 1 ? 'transform: scale(1.25);' : index == 3 ? 'transform: scale(1.55); background-position: bottom; top: -10px;' : ''}"></a>
            <h4>${projectList[index].name}</h4>`
    });
}

loadProjects()

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate')
            }, 300 * index)
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el) => observer.observe(el))

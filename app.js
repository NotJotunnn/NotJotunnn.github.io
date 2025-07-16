// const nav = document.getElementById('navigation');

// const projectList = [
//     {
//         name: 'Fint',
//         description: `Este é Fint!<br><br>Um grupo de comandos com o objetivo de mover arquivos da pasta de download até o arquivo presente sem precisar ficar lembrando de usar pwd entre outros!<br><br>Parte do que o torna tão único está presente no fato de que ele foi feito no Bashscript e com a ajuda de Zsh(tornando ele um "comando"), ele funciona como qualquer outro comando no terminal!`,
//         links: ['https://github.com/NotJotunnn/Workflow-projects/tree/main/Fint'],
//         fullimg: 'https://github.com/NotJotunnn/Workflow-projects/blob/main/Fint/github/fint.jpg?raw=true',
//         tools: 'BASHSCRIPT, ZSH',
//         client: 'A mim mesmo',
//         objective: 'Melhor facilitar o <span class="italic">workflow</span> pelo terminal'
//     },
//     {
//         name: 'Lokinho Skins',
//         description: `Site de rifas feito em ~3 meses, site que conta com diversas integrações além de um sistema de roleta e sorteador de números, autênticação e processamento de pagamento.`,
//         links: ['https://github.com/NotJotunnn/creditos/blob/main/lokinhoRifas/creditos.md'],
//         fullimg: 'https://github.com/NotJotunnn/creditos/blob/main/lokinhoRifas/github/lokinhorifas.png?raw=true',
//         tools: 'REACT, NODEJS, NEXTJS, FIGMA',
//         client: 'Lokinho Skins',
//         objective: 'Criar à partir de um design base, um site de rifas interativo'
//     },
//     {
//         name: 'Gerador de senhas (app)',
//         description: `Este foi um dos meus primeiros aplicativos feitos no Electron por conta (parcialmente rsrs) própria!<br><br>Seus diferencial vindo do fato que ele funciona como qualquer outro aplicativo, ou seja, muito mais amigável que a interface de linha de comando!<br><br>Está e a versão arcaica de sua versão de CLI!`,
//         links: ['https://github.com/NotJotunnn/Projects/tree/main/Password-Generator'],
//         fullimg: 'https://github.com/NotJotunnn/Projects/blob/main/Password-Generator/github/password.jpeg?raw=true',
//         tools: 'NODEJS, ELECTRONJS, JAVASCRIPT, HTML5, CSS3',
//         client: 'Fictício',
//         objective: 'Criar um método de geração de senhas decentralizado e pessoal!'
//     },
//     {
//         name: 'Website Portfólio',
//         description: `Este projeto esta sendo feito no decorrer de minha carreira!<br><br>É um trabalho com muito esforço e paixão.`,
//         links: ['https://github.com/NotJotunnn/NotJotunnn.github.io'],
//         fullimg: 'https://github.com/NotJotunnn/NotJotunnn.github.io/blob/main/github/portfolio.png?raw=true',
//         tools: 'JAVASCRIPT, HTML5, CSS3, FONTAWESOME SDK, FIGMA',
//         client: 'A mim mesmo',
//         objective: 'Apresentar todos os meus projetos desenvolvidos ao longo do tempo.'
//     }
// ];

// // Header related (mostly for mobile)

// function menuToggle() {
//     if(nav.classList.contains('non-visible')) return nav.classList.remove('non-visible');
//     nav.classList.add('non-visible');
// };

// function platformChecker() {
//     const isPhone = window.matchMedia('(pointer:coarse)');
//     return (isPhone && isPhone.matches)
// }

// function checkMenu() {
//     if(nav.classList.contains('non-visible')) return;
//     nav.classList.add('non-visible');
// }

// function loadProjects() {
//     const projectElems = document.querySelectorAll('.project-card')

//     projectElems.forEach((entry, index) => {
//         entry.innerHTML = `
//             <a rel="external" href="${projectList[index].links[0]}" target="_blank" class="project-card-link">
//                 <img src="${projectList[index].fullimg}" alt="Imagem de ${projectList[index].name}"/>
//             </a>
//             <h4>${projectList[index].name}</h4>`
//     });
// }

// loadProjects()

// const observer = new IntersectionObserver(entries => {
//     entries.forEach((entry, index) => {
//         if(entry.isIntersecting) {
//             setTimeout(() => {
//                 entry.target.classList.add('animate')
//             }, 300 * index)
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden')

// hiddenElements.forEach((el) => observer.observe(el))

window.addEventListener("load", () =>
  alert(
    "Este é um portfólio antigo e será descartado, para acessar o mais novo acesse o seguinte link:\n https://notjotunnn.github.io/leandro-portfolio/\n\nP.S.: Fica no mesmo domínio, apenas em uma outra 'seção'"
  )
);

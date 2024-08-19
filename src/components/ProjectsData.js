import appRecipes from "../images/app-recipes.png";
import pixelArt from "../images/pixel-art.png";
import pokedex from "../images/pokedex.png";
import spotifake from "../images/spotifake.png";
import starWars from "../images/starWars.png";
import wallet from "../images/wallet.png";
import passwordManager from "../images/passwordManager.png";
import onlineStore from "../images/onlineStore.png";
import FRONTEND from "../images/FRONT.png";
import back from "../images/BACK.png";

// Dados dos projetos Front-End
const projectsData = {
    frontEndProjects: [
    {
        id: 1,
        title: "App de Receitas",
        description: "Plataforma onde os usuários podem visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas.",
        image: appRecipes,
        link: "https://frontend-app-recipes.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--App-recipes",
        technologies: [
            "React",
            "React Hooks",
            "JavaScript",
            "CSS",
            "Context API"
        ]
    },
    {
        id: 2,
        title: "Projeto Wallet",
        description: "Uma aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida por quem usa.",
        image: wallet,
        link: "https://frontend-wallet-pi.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--Wallet",
        technologies: [
            "React Native",
            "JavaScript",
            "React Router",
            "RTL(React Testing Library)",
        ]
    },
    {
        id: 3,
        title: "Password Manager",
        description: "Uma aplicação em React para gerenciar senhas. Implementa um formulário para cadastrar as informações de acesso de serviços que você usa na internet.",
        image: passwordManager,
        link: "https://github.com/esyamamoto/FRONTEND--Password-Manager",
        github: "https://github.com/esyamamoto/FRONTEND--Password-Manager",
        technologies: [
            "React",
            "TypeScript",
            "Formulários"
        ]
    },
    {
        id: 4,
        title: "Online store",
        description: "Neste projeto, construimos o Front-End de um e-commerce, uma loja online, alimentada por uma API do Mercado Livre.",
        image: onlineStore,
        link: "https://frontend-online-store-nine.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--Online-Store",
        technologies: [
            "TypeScript",
            "API do Mercado Livre"
         ]
    },
    {
        id: 5,
        title: "Pokédex",
        description: "Uma aplicação web simples de Pokédex que busca e exibe informações sobre Pokémon utilizando a PokéAPI.",
        image: pokedex,
        link: "https://frontend-rtl-pokedex.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--RTL-pokedex",
        technologies: [
            "RTL",
            "TypeScript",
            "HTML5",
            "CSS3",
            "API do PokeApi"
        ]
    },
    {
        id: 6,
        title: "Star Wars",
        description: "Uma aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Onde os dados retornados pela API usei para criar uma tabela com alguns filtros.",
        image: starWars,
        link: "https://frontend-star-wars.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--Star-Wars",
        technologies: [
            "React",
            "Hooks",
            "Context API",
        ]
    },
    {
        id: 7,
        title: "Music Favorite",
        description: "Nesse projeto foi criado uma aplicação para pesquisar e listar álbuns e músicas de várias bandas e artistas.",
        image: spotifake,
        link: "https://frontend-music-favorite.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--Music-Favorite",
        technologies: [
            "React",
            "React Router",
            "API de Música"
        ]
    }
    ,
    {
        id: 8,
        title: "Arte com Pixels",
        description: "um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco ",
        image: pixelArt,
        link: "https://frontend-pixels-art.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--pixels-art",
        technologies: [
            "Javascript",
            "HTML5",
            "CSS3",
        ]
    },
    {
        id: 9,
        title: "Confira mais projetos no meu GitHub!",
        description: "Requisições a APIs |  React com Typescript | JavaScript, HTML & CSS | Testes automatizados com React Testing Library | CSS Modules | Gerenciamento de estado com Redux | Context API | Postman | Cypress | Bootstrap",
        image: FRONTEND,
        github: "https://github.com/esyamamoto?tab=repositories&q=FRONT&type=&language=&sort=",
        technologies: [
        ]
    },
],
backEndProjects: [
    {
        id: 10,
        title: "Projeto Agrotech",
        description: "AgroTech é uma empresa especializada em tecnologias para melhorar a eficiência no cultivo de plantações 🌱🌳. Isso visa reduzir o desperdício de recursos em geral e de alimentos em específico, fazendo um uso mais responsável da terra disponível para plantio. O primeiro produto dessa empresa será o Agrix, um sistema que permitirá a gestão e o monitoramento das fazendas participantes.",
        
        github: "https://github.com/esyamamoto/BACKEND-AgroTech",
        technologies: [
            "Java",
            "Docker",
            "Spring",
            "JUnit"
        ]
    },
    {
        id: 11,
        title: "Restaurant Orders",
        description: "O Restaurante 🍝 🦐 Chapa Quente 🍛 🥘 precisava finalizar sua ferramenta de construção de cardápios. Estou responsável por desenvolver uma solução que permita ao restaurante gerar seus cardápios de maneira simples, considerando possíveis restrições alimentares e a disponibilidade dos ingredientes em estoque. ",
        github: "https://github.com/esyamamoto/BACKEND--Python-Restaurant-Orders",
        technologies: [
            "Python",
            "Hashmaps (Dict e Set)",
            "Orientação a Objetos"
        ]
    },
    {
        id: 12,
        title: "Futebol Clube",
        description: "O TFC é um site informativo sobre partidas e classificações de futebol! ⚽️ No desenvolvimento do TFC, meu time ficou responsável por criar uma API utilizando o método TDD (Test-Driven Development) e integrar as aplicações através do Docker Compose, garantindo que elas funcionem corretamente ao consumir um banco de dados. Neste projeto, desenvolvi um back-end dockerizado utilizando modelagem de dados com Sequelize. A integração das aplicações garantiu uma solução robusta e eficiente para o gerenciamento de partidas e classificações de futebol.",
        github: "https://github.com/esyamamoto/BACKEND--futebol-clube",
        technologies: [
            "TypeScript",
            "Docker",
            "SQL"
        ]
    },
    {
        id: 13,
        title: "Role Playing Game",
        description: "Projeto para implementar os princípios da arquitetura SOLID e os fundamentos da Programação Orientada a Objetos (POO) em uma estrutura de jogos de interpretação de papéis, conhecidos como RPGs 🎲⚔️. O projeto foca na criação de uma estrutura robusta e escalável para desenvolvimento de jogos RPG, permitindo uma gestão eficiente de personagens, habilidades e cenários.",
        github: "https://github.com/esyamamoto/BACKEND--RPG",
        technologies: [
            "Node.js",
            "Docker",
            "API",
            "SOLID e POO",
            "TypeScript"
        ]
    },
    {
        id: 14,
        title: "Localizador de Museus",
        description: "Neste projeto, implementei uma API utilizando Spring Framework para localizar museus brasileiros com base em uma determinada localização 🏛️📍. A API permite encontrar o museu mais próximo a partir dos dados históricos disponíveis. Trabalhei na estruturação em camadas da API, separando responsabilidades para facilitar a manutenção. Além disso, exercitei habilidades como tratamento de erros, escrita de testes unitários e Dockerização.",
        github: "https://github.com/esyamamoto/BACKEND--JAVA-localizador-de-museus",
        technologies: [
            "Java",
            "Spring Framework",
            "Maven",
            "Docker",
            "Testes Unitários",
        ]
    },
    {
        id: 15,
        title: "Minha Conta",
        description: "Neste projeto, implementei uma ferramenta para gestão do consumo energético💡. A ferramenta desenvolvida permitiu que pessoas consumidoras emitam suas faturas, estimem os gastos mensais, consultem histórico de pagamentos e uma série outras funcionalidades baseadas em uma SDK fornecida pela Íons Energia, uma concessionária de luz ficticia.",
        github: "https://github.com/esyamamoto/BACKEND--JAVA-minha-conta",
        technologies: [
            "Java",
            "Spring Framework",
            "Maven",
            "Docker",
            "Testes Unitários",
            "Checkstyle"
        ]
    },
    {
        id: 16,
        title: "Loja itens medievais",
        description: "Desenvolvi uma API para uma loja de ⚔️itens medievais🛡️, implementando camadas de Service e Controllers em TypeScript com Sequelize, incluindo autenticação JWT para segurança e testes para garantir a funcionalidade dos endpoints.",
        github: "https://github.com/esyamamoto/BACKEND--Loja-Itens-Medievais",
        technologies: [
            "TypeScript",
            "Docker",
            "Sequelize",
            "JWT (JSON Web Token)",
            "MySQL",
            "Nodemon",
        ]
    },
    {
        id: 17,
        title: "Clone Spotify",
        description: "clone simplificado do banco de dados da Spotify 🎶. O objetivo era aplicar conceitos de normalização para transformar uma estrutura de banco de dados desnormalizada em um modelo eficiente e bem estruturado, seguindo as 1ª, 2ª e 3ª Formas Normais 🧾.",
        github: "https://github.com/esyamamoto/BACKEND--SQL-Spotify",
        technologies: [
            "MySQL",
            "Docker",
            "Node.js"
        ]
    },
    {
        id: 18,
        title: "Confira mais projetos no meu GitHub!!!",
        description: "Java | Spring | Python |   Node.js | Express.JS |  ORM |  Docker |  Testes Unitários |  Testes de Integração |  Banco de dados - SQL : MySQL e PostgreSQL | ORM : Sequelize | Deploy | Postman | Cypress",
        image: back,
        github: "https://github.com/esyamamoto?tab=repositories&q=BACK&type=&language=&sort=",
        technologies: [
        ]
    }
    
],
fullStackProjects: [
    {
        id: 19,
        title: "Sistema Médico para Gestão de Consultório e Hospital",
        description: "*Estamos começando o desenvolvimento deste projeto agora* Este sistema é uma solução completa e integrada para a gestão de consultórios e hospitais, cobrindo a administração de médicos e pacientes, bem como funcionalidades avançadas para ambientes hospitalares.",
        github: "https://github.com/esyamamoto/My-Medical-System",
        technologies: [
            "Java",
            "Docker",
            "Spring",
            "JUnit",
            "ReactJS",
            "TypeScript",
            "Next.js",
            "React Router",
            "Node.js",
            "Express.js",
            "Sequelize ORM",
            "MySQL",
            "PostgreSQL",
            "Jest",
            "Cypress",
            "Postman",
            "Insomnia"
        ]
    }
],
};

export default projectsData;
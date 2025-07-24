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
import blogPessoal from "../images/blogPessoal.png";
import eCommerce from "../images/eCommerce.png";
import spotifakeSQL from "../images/sql-spotifake.png";
import rpg from "../images/rpg.png";
import restaurantOrders from "../images/restaurantOrders.png";
import futebol from "../images/futebol.png";

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
        description: "AgroTech é uma empresa especializada em tecnologias para melhorar a eficiência no cultivo de plantações 🌱🌳. Isso visa reduzir o desperdício de recursos em geral e de alimentos em específico.",
        link: " ",
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
        description: "Restaurante 🍝 Chapa Quente 🍛 Desenvolvi uma solução que permita ao restaurante gerar seus cardápios de maneira simples, considerando possíveis restrições alimentares e a disponibilidade dos ingredientes em estoque. ",
        image: restaurantOrders,
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
        description: "O TFC é um site informativo sobre partidas e classificações de futebol. Meu time desenvolveu uma API usando TDD (Test-Driven Development) e integrou as aplicações via Docker Compose, garantindo o consumo correto de um banco de dados. ",
        image: futebol,
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
        description: "Projeto focado em aplicar os princípios SOLID e fundamentos POO em uma estrutura para jogos de RPG 🎲⚔️. O objetivo é criar uma base para gerenciar personagens, habilidades e cenários de forma eficiente.",
        image: rpg,
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
        description: "Implementei uma API usando Spring Framework para localizar museus brasileiros com base na localização 🏛️📍. A API identifica o museu mais próximo a partir de dados históricos. ",
        link: " ",
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
        description: "Implementei uma ferramenta para gestão de consumo energético💡, permitindo que consumidores emitam faturas, estimem gastos mensais, consultem o histórico de pagamentos.",
        link: " ",
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
        description: "Desenvolvi uma API para uma loja de ⚔️itens medievais🛡️, com camadas de Service e Controllers em TypeScript usando Sequelize, incluindo autenticação JWT e testes para assegurar a funcionalidade dos endpoints.",
        link: " ",
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
        image: spotifakeSQL,
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
        id: 20,
        title: "Blog Pessoal",
        description: "O Blog Pessoal é uma plataforma interativa onde usuários podem compartilhar suas ideias e histórias através de postagens personalizadas.",
        image: blogPessoal,
        link : "https://sayuriblog.netlify.app/#/entrar",
        github: "https://github.com/esyamamoto/BlogPessoal",
        technologies: [
            "Java",
            "TypeScript",
            "Angular",
            "JUnit",
            "Bootstrap",
            "Spring Boot",
            "Postman",
            "MySQL"
        ]
    },
    {
        id: 21,
        title: "e-Commerce",
        description: "O e-Commerce oferece informações e suporte para descartes e trocas ecológicas, colaborando com empresas e pontos ecológicos para promover o desenvolvimento sustentável.",
        image: eCommerce,
        link : "https://lumens.netlify.app/#/inicio",
        github: "https://github.com/esyamamoto/Lumens-Front-End",
        technologies: [
            "Java",
            "TypeScript",
            "Angular",
            "JUnit",
            "Bootstrap",
            "Spring Boot",
            "Postman",
            "MySQL"
        ]
    }
],
};

export default projectsData;
// Dados dos projetos Front-End
const projectsData = {
    frontEndProjects: [
    {
        id: 1,
        title: "App de Receitas",
        description: "Plataforma onde os usuários podem visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas.",
        image: "/path/to/receitas-image.jpg",
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
        image: "/path/to/wallet-image.jpg",
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
        image: "/path/to/password-manager-image.jpg",
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
        description: "Front-End de um e-commerce, uma loja online, alimentada por uma API do Mercado Livre.",
        image: "/path/to/online-store-image.jpg",
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
        image: "/path/to/pokedex-image.jpg",
        link: "https://frontend-rtl-pokedex.vercel.app/",
        github: "https://github.com/esyamamoto/PokedexJs",
        technologies: [
            "RTL",
            "TypeScript",
            "HTML5",
            "CSS3",
            "API do PokeApi"
        ]
    }
    ,
    {
        id: 6,
        title: "Star Wars",
        description: "Uma aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Onde os dados retornados pela API usei para criar uma tabela com alguns filtros.",
        image: "",
        link: "https://frontend-star-wars.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--Star-Wars",
        technologies: [
            "React",
            "Hooks",
            "Context API",
        ]
    }
    ,
    {
        id: 7,
        title: "Music Favorite",
        description: "Nesse projeto foi criado uma aplicação para pesquisar e listar álbuns e músicas de várias bandas e artistas.",
        image: "",
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
        image: "",
        link: "https://frontend-pixels-art.vercel.app/",
        github: "https://github.com/esyamamoto/FRONTEND--pixels-art",
        technologies: [
            "Javascript",
            "HTML5",
            "CSS3",
        ]
    }
    ,
],
    backEndProjects: [
    {
        id: 9,
        title: "Projeto Agrotech",
        description: "Uma empresa especializada em tecnologias para melhorar a eficiência no cultivo de plantações, visando reduzir o desperdício de recursos e alimentos.",
        image: "/path/to/agrotech-image.jpg",
        github: "https://github.com/esyamamoto/BACKEND-AgroTech",
        technologies: [
            "Java",
            "Docker",
            "Spring",
            "JUnit"
        ]
    },
    {
        id: 10,
        title: "Restaurant Orders",
        description: "Ferramenta para restaurantes gerar cardápios considerando restrições alimentares e disponibilidade de ingredientes em estoque.",
        image: "/path/to/restaurant-orders-image.jpg",
        github: "https://github.com/esyamamoto/BACKEND--Python-Restaurant-Orders",
        technologies: [
            "Python",
            "Hashmaps (Dict e Set)",
            "Orientação a Objetos"
        ]
    },
    {
        id: 11,
        title: "Futebol Clube",
        description: "Back-end dockerizado utilizando modelagem de dados através do Sequelize.",
        image: "/path/to/futebol-clube-image.jpg",
        github: "https://github.com/esyamamoto/BACKEND--futebol-clube",
        technologies: [
            "TypeScript",
            "Docker",
            "SQL"
        ]
    },
    {
        id: 12,
        title: "Role Playing Game",
        description: "Projeto para princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG ",
        image: "",
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
        id: 13,
        title: "Localizador de Museus",
        description: "Neste projeto implementei uma API cuja principal funcionalidade é facilitar a busca por museus baseada em sua localização. Os dados foram retirados desta série histórica.",
        image: "",
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
        id: 14,
        title: "Minha Conta",
        description: "Neste projeto, você implementei uma ferramenta para gestão do consumo energético. A ferramenta desenvolvida permitiu que pessoas consumidoras emitam suas faturas, estimem os gastos mensais, consultem histórico de pagamentos e uma série outras funcionalidades",
        image: "/path/to/futebol-clube-image.jpg",
        github: "https://github.com/esyamamoto/BACKEND--futebol-clube",
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
        id: 15,
        title: "LOJA DE ITENS MEDIEVAIS",
        description: "Desenvolvi uma API para uma loja de itens medievais, implementando camadas de Service e Controllers em TypeScript com Sequelize, incluindo autenticação JWT para segurança e testes para garantir a funcionalidade dos endpoints.",
        image: "",
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
        id: 16,
        title: "Clone Spotify",
        description: "clone simplificado do banco de dados da Spotify.",
        image: "",
        github: "https://github.com/esyamamoto/BACKEND--SQL-Spotify",
        technologies: [
            "MySQL",
            "Docker",
            "Node.js"
        ]
    }
    
],

};

export default projectsData;
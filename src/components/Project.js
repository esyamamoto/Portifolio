import React, { useState, useEffect } from 'react';
import '../styles/Project.css';

// Dados dos projetos Front-End
const frontEndProjects = [
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
        link: "https://github.com/esyamamoto/FRONTEND--Wallet",
        github: "https://github.com/esyamamoto/FRONTEND--Wallet",
        technologies: [
            "React Native",
            "JavaScript",
            "RTL(React Testing Library)",
            "React Router"
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
];

// Dados dos projetos Back-End
const backEndProjects = [
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
    
];

// Componente Carousel
const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = items.length;

    // Avançar para o próximo slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    // Voltar para o slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    // Alternar slides a cada 7 segundos
    useEffect(() => {
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <button className="carousel-button left" onClick={prevSlide}>‹</button>
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.concat(items).map(item => (
                    <div key={item.id} className="carousel-item">
                        <div className="card">
                            <div className="image">
                                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                    <img src={item.image} alt={item.title} />
                                </a>
                            </div>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="technologies">
                                {item.technologies.map((tech, index) => (
                                    <span key={index} className="technology">{tech}</span>
                                ))}
                            </div>
                            {/* Botão específico para GitHub */}
                            {item.github && (
                                <a
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                className="github-button"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.github}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M11.996 1.771a10.486 10.486 0 0 0 -3.314 20.438c0.523 0.092 0.69 -0.216 0.69 -0.493 0 -0.25 0.005 -0.945 0 -1.824 -2.919 0.633 -3.522 -1.381 -3.522 -1.381a2.775 2.775 0 0 0 -1.163 -1.534c-0.952 -0.65 0.071 -0.638 0.071 -0.638a2.201 2.201 0 0 1 1.607 1.08 2.232 2.232 0 0 0 3.05 0.871c0.05 -0.53 0.285 -1.025 0.666 -1.397 -2.328 -0.266 -4.776 -1.165 -4.776 -5.184a4.055 4.055 0 0 1 1.08 -2.815 3.762 3.762 0 0 1 0.103 -2.774s0.882 -0.282 2.883 1.076a9.924 9.924 0 0 1 5.252 0c2.007 -1.357 2.881 -1.076 2.881 -1.076 0.387 0.878 0.424 1.87 0.104 2.774a4.05 4.05 0 0 1 1.079 2.816c0 4.03 -2.452 4.916 -4.789 5.174a2.487 2.487 0 0 1 0.718 1.933v2.904c0 0.28 0.17 0.59 0.702 0.488a10.487 10.487 0 0 0 -3.322 -20.438v0Z" strokeWidth="1"></path>
                                </svg>
                              </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button right" onClick={nextSlide}>›</button>
        </div>
    );
};

// Componente Projects
const Projects = () => {
    return (
        <section id="projects">
            <div className="wrapper">
                <header>
                    <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Boas-Vindas ao meu portfólio.</h2>
                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Clique na imagem para ser redirecionado ao site.</p>
                    </header>

                <h3>Projetos Front-End:</h3>
                <Carousel items={frontEndProjects} />

                <h3>Projetos Back-End:</h3>
                <Carousel items={backEndProjects} />
            </div>
        </section>
    );
};

export default Projects;

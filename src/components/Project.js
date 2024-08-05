import React from 'react';
import '../styles/Project.css';

const projects = [
    {
        id: 1,
        title: "App de Receitas",
        description: "Plataforma onde os usuários podem visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas.",
        image: "/path/to/receitas-image.jpg",
        link: "https://frontend-app-recipes.vercel.app/",
        technologies: [
            "React Native",
            "JavaScript",
            "HTML5",
            "CSS3"
        ]
    },
    {
        id: 2,
        title: "Projeto Wallet",
        description: "Uma aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida por quem usa.",
        image: "/path/to/wallet-image.jpg",
        link: "https://github.com/esyamamoto/FRONTEND--Wallet",
        technologies: [
            "React Native",
            "JavaScript"
        ]
    },
    {
        id: 3,
        title: "Password Manager",
        description: "Uma aplicação em React para gerenciar senhas. Implementa um formulário para cadastrar as informações de acesso de serviços que você usa na internet.",
        image: "/path/to/password-manager-image.jpg",
        link: "https://github.com/esyamamoto/FRONTEND--Password-Manager",
        technologies: [
            "React",
            "TypeScript"
        ]
    },
    {
        id: 4,
        title: "Online store",
        description: "Front-End de um e-commerce, uma loja online, alimentada por uma API do Mercado Livre.",
        image: "/path/to/online-store-image.jpg",
        link: "https://frontend-online-store-nine.vercel.app/",
        technologies: [
            "TypeScript",
            "HTML5",
            "CSS3"
        ]
    },
    {
        id: 5,
        title: "Pokédex",
        description: "Uma aplicação web simples de Pokédex que busca e exibe informações sobre Pokémon utilizando a PokéAPI.",
        image: "/path/to/pokedex-image.jpg",
        link: "https://frontend-rtl-pokedex.vercel.app/",
        technologies: [
            "RTL",
            "TypeScript",
            "HTML5",
            "CSS3"
        ]
    },
    {
        id: 6,
        title: "Projeto Agrotech",
        description: "Uma empresa especializada em tecnologias para melhorar a eficiência no cultivo de plantações, visando reduzir o desperdício de recursos e alimentos.",
        image: "/path/to/agrotech-image.jpg",
        link: "https://github.com/esyamamoto/BACKEND-AgroTech",
        technologies: [
            "Java",
            "Docker",
            "Spring",
            "JUnit"
        ]
    },
    {
        id: 7,
        title: "Restaurant Orders",
        description: "Ferramenta para restaurantes gerar cardápios considerando restrições alimentares e disponibilidade de ingredientes em estoque.",
        image: "/path/to/restaurant-orders-image.jpg",
        link: "https://github.com/esyamamoto/BACKEND--Python-Restaurant-Orders",
        technologies: [
            "Python"
        ]
    },
    {
        id: 8,
        title: "Futebol Clube",
        description: "Back-end dockerizado utilizando modelagem de dados através do Sequelize.",
        image: "/path/to/futebol-clube-image.jpg",
        link: "https://github.com/esyamamoto/BACKEND--futebol-clube",
        technologies: [
            "TypeScript",
            "Docker",
            "SQL"
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="wrapper">
                <header>
                    <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Boas-Vindas ao meu portfólio.</h2>
                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Clique na imagem para ser redirecionado ao site.</p>
                </header>

                <div className="cards">
                    {projects.map(project => (
                        <div key={project.id} data-aos="fade-up-left" className={`card ${project.id % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="image">
                                <a target="_blank" rel="noopener noreferrer" href={project.link}>
                                    <img src={project.image} alt={project.title} />
                                </a>
                            </div>
                            <div className="text">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="technology">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

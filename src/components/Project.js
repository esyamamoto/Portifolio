import React, { useState, useEffect } from 'react';
import projectsData from '../components/ProjectsData';
import '../styles/Project.css';

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

    // Alternar slides a cada 15 segundos
    useEffect(() => {
        const interval = setInterval(nextSlide, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <button className="carousel-button left" onClick={prevSlide}>‹</button>
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map(item => (
                    <div key={item.id} className="carousel-item">
                        <div className="cardProjects">
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
    const { frontEndProjects, backEndProjects } = projectsData;

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

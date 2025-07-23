import React from 'react';
import '../styles/About.css';
import profileImage from '../images/fotoEu.png'

const about = () => {
    return (
        <section id="about">
            <div className="wrapper">
                <div data-aos="fade-up-right" className="image">
                    <img src={profileImage} alt="Foto Erika" />
                </div>
                <div className="content">
                    <header>
                        <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Sobre mim</h2>
                    </header>

                    <div className="text">
                        <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <span>Desenvolvedora Web</span>, apaixonada por tecnologia.
                        </p>
                        <br />
                        <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        Sou formada em Publicidade e Propaganda e iniciei minha trajetória na área de TI por meio de experiências voluntárias que me motivaram a realizar a transição de carreira. 
                        Atualmente, curso Análise e Desenvolvimento de Sistemas na faculdade e finalizei o curso da Trybe em Desenvolvimento Web Full-Stack, onde foi desenvolvido projetos práticos que envolvem front-end e back-end.   
                        </p>
                         <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        Estou apta a participar de processos seletivos afirmativos para <strong>Pessoa com Deficiência (PCD)</strong>, com laudo médico disponível para comprovação.   
                        </p>
                        <ul>
                            <li data-aos="fade-up-left">📍 São Paulo, SP.</li>
                            <li data-aos="fade-up-left">📚 Aluna de Análise e Desenvolvimento de Sistemas na Estácio</li>
                            <li data-aos="fade-up-left">📚 Formada como Desenvolvedora Web Full-Stack na TRYBE</li>
                            <li data-aos="fade-up-left">📚 Formada em Comunicação Social - Publicidade e Propaganda, pela UNIP - Universidade Paulista</li>
                        </ul>

                        <div data-aos="fade-up-left" className="button">
                            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1XFlDrgeY2Mac21nAQhrpr0w468zi0Y0VvDbLyX16HOU/edit?usp=sharing">
                                <button>Confira meu CV </button>
                            </a>
                        </div>
                        <div data-aos="fade-up-left" className="button">
                            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1oN_fjjDH_VsXgHiAt_2Kj2z7a-RybthT/view?usp=sharing">
                                <button>Histórico Escolar ADS</button>
                            </a>
                        </div>
                        <div data-aos="fade-up-left" className="button">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.credential.net/profile/erikasayuriyamamoto884178/wallet">
                                <button>Certificados</button>
                            </a>
                        </div>

                        <div className="content">
                            <header>
                                <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Outros cursos</h2>
                            </header>
                            <ul>
                                <li data-aos="fade-up-left">📚 Rocketseat - Data Analytics e IA para devs - em andamento</li>
                                <li data-aos="fade-up-left">📚 Alura - GIT E GITHUB</li>
                                <li data-aos="fade-up-left">📚 Alura - JAVA E JDK</li>
                                <li data-aos="fade-up-left">📚 DIO - Conceitos de responsividade e experiência do usuário</li>
                                <li data-aos="fade-up-left">📚 Bootcamp Generation Brasil</li>
                                <li data-aos="fade-up-left">📚 DIO - Projetos ágeis com SCRUM</li>
                                <li data-aos="fade-up-left">📚 ORIGAMID - Web Design, UX/UI Design, HTML, CSS, JavaScript e React</li>
                                <li data-aos="fade-up-left">📚 Inglês Intermediário</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up-left" className="button">
                            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1pIFCHVchbyMrVuaCTzIwnexh_N1UEEWP?usp=drive_link">
                                <button>Certificados<ion-icon name="enter-outline"></ion-icon></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

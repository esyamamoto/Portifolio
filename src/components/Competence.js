import React, { useState } from 'react';
import '../styles/Competence.css';

const competenceData = [
  {
    id: 1,
    title: 'Front-End',
    description: 
    'Requisições a APIs | React com Typescript | JavaScript, HTML & CSS | Testes automatizados com React Testing Library | CSS Modules | Context API | Postman | Cypress | Bootstrap', 
    content: 
    'Trabalhei com requisições a APIs para consumir e enviar dados de maneira eficiente, utilizando React com TypeScript para construir interfaces interativas e escaláveis. Minha experiência inclui o uso de JavaScript, HTML e CSS para criar layouts responsivos e funcionais. Implementei testes automatizados com React Testing Library para garantir a qualidade do código e a funcionalidade dos componentes. Utilizei CSS Modules para escopo local de estilos e Context API. Ferramentas como Postman e Cypress foram fundamentais para testar e validar as APIs e o comportamento do aplicativo. ',
  },
  {
    id: 2,
    title: 'Back-End',
    description: 
    'Java | Spring | Python | Node.js | Express.JS |  ORM | Docker | Testes Unitários |  Testes de Integração |  Banco de dados - SQL : MySQL e PostgreSQL | ORM : Sequelize | Deploy | Postman | Cypress',
    content: 
    'Trabalhei com Java e Spring para construir aplicações escaláveis e seguras, e com Python para soluções rápidas e eficientes. No ambiente Node.js e Express.JS, desenvolvi APIs e serviços que se comunicam com o front-end e manipulam dados de forma eficaz. A experiência com ORM e Docker facilitou o gerenciamento de dados e o isolamento de ambientes de desenvolvimento. Realizei testes unitários e de integração para assegurar a robustez do código e a integração entre componentes. Utilize bancos de dados SQL, como MySQL e PostgreSQL, e ORM, como Sequelize, para gerenciar e consultar dados. Também estive envolvido em práticas de deploy e validação com Postman e Cypress, garantindo a entrega contínua e a qualidade das aplicações.',

  },
  {
    id: 3,
    title: 'Ferramentas, Metodologias e Soft Skills',
    description: 
    'Git & Github | Miro | Trello (Kanban + Scrum) | Trabalho em equipe, liderança, adaptabilidade, empatia.',
    content: 
    'No âmbito da comunicação e colaboração, estou habituada ao uso de Git & GitHub para controle de versões e colaboração em projetos. Utilizei Miro para brainstorms e visualização de fluxos de trabalho, facilitando a colaboração e o planejamento. Com o Trello, implementei metodologias ágeis como Kanban e Scrum para gerenciar tarefas e sprints, otimizando a produtividade da equipe e garantindo a entrega contínua de valor.',
  },
];

const Competence = () => {
  const [expandedId, setExpandedId] = useState(null);
  
  const handleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };
  
  return (
    <section id="competence">
      <header>
        <h2>Habilidades</h2>
      </header>
      <div className="cards">
        {competenceData.map((competence) => (
          <div key={competence.id} className="card">
            <div className="icon">{competence.icon}</div>
            <h3>{competence.title}</h3>
            <p className='description'>{competence.description}</p>
            <div className='additionalDesc'>
              <p className={`content ${expandedId === competence.id ? 'expanded' : 'collapsed'}`}>
                  {competence.content}
              </p>
              <button onClick={() => handleExpand(competence.id)} className="toggle-button">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`arrow-icon ${expandedId === competence.id ? 'expanded' : 'collapsed'}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competence;

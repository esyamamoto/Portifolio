import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduções
const resources = {
  pt: {
    translation: {
      // Navegação e Seções
      "about": "Sobre",
      "projects": "Projetos",
      "skills": "Habilidades",
      "contact": "Contato",
      
      // Banner/Hero
      "welcome": "Olá, eu sou",
      "role": "Desenvolvedora Full Stack",
      "description": "Apaixonada por tecnologia e sempre em busca de novos desafios",
      
      // Sobre
      "aboutTitle": "Sobre mim",
      "aboutDescription": "Sou uma desenvolvedora apaixonada por criar soluções inovadoras...",
      
      // Projetos
      "projectsTitle": "Meus Projetos",
      "viewProject": "Ver Projeto",
      "sourceCode": "Código Fonte",
      
      // Habilidades
      "skillsTitle": "Minhas Competências",
      "frontend": "Frontend",
      "backend": "Backend",
      "tools": "Ferramentas",
      
      // Formulário de Contato
      "contactTitle": "Me contate:",
      "name": "Nome:",
      "nameError": "Todos os campos devem ser preenchidos!",
      "namePlaceholder": "Digite seu nome",
      "email": "Seu email:",
      "emailPlaceholder": "Digite seu email",
      "emailInvalid": "O e-mail fornecido não é válido.",
      "message": "Mensagem:",
      "messagePlaceholder": "Digite sua mensagem",
      "messageMinLength": "A mensagem deve ter pelo menos 10 caracteres.",
      "send": "Enviar",
      "messageSent": "Mensagem enviada com sucesso!",
      "messageError": "Ocorreu um erro ao enviar a mensagem. Tente novamente daqui a alguns minutos ou me contate diretamente pelo email.",
      
      // Footer
      "developedBy": "Desenvolvido por",
      "allRightsReserved": "Todos os direitos reservados"
    }
  },
  en: {
    translation: {
      // Navegação e Seções
      "about": "About",
      "projects": "Projects",
      "skills": "Skills",
      "contact": "Contact",
      
      // Banner/Hero
      "welcome": "Hello, I'm",
      "role": "Full Stack Developer",
      "description": "Passionate about technology and always seeking new challenges",
      
      // Sobre
      "aboutTitle": "About me",
      "aboutDescription": "I'm a developer passionate about creating innovative solutions...",
      
      // Projetos
      "projectsTitle": "My Projects",
      "viewProject": "View Project",
      "sourceCode": "Source Code",
      
      // Habilidades
      "skillsTitle": "My Skills",
      "frontend": "Frontend",
      "backend": "Backend",
      "tools": "Tools",
      
      // Formulário de Contato
      "contactTitle": "Contact me:",
      "name": "Name:",
      "nameError": "All fields must be filled!",
      "namePlaceholder": "Enter your name",
      "email": "Your email:",
      "emailPlaceholder": "Enter your email",
      "emailInvalid": "The provided email is not valid.",
      "message": "Message:",
      "messagePlaceholder": "Enter your message",
      "messageMinLength": "The message must have at least 10 characters.",
      "send": "Send",
      "messageSent": "Message sent successfully!",
      "messageError": "An error occurred while sending the message. Please try again in a few minutes or contact me directly via email.",
      
      // Footer
      "developedBy": "Developed by",
      "allRightsReserved": "All rights reserved"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    lng: 'pt', // idioma padrão
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Expressão regular para validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    // Verifica se a mensagem tem pelo menos 30 caracteres
    if (message.length < 30) {
      alert('A mensagem deve ter pelo menos 30 caracteres.');
      return;
    }

    // Verifica se o e-mail é válido
    if (!validateEmail(email)) {
      alert('O e-mail fornecido não é válido.');
      return;
    }

    // Implementa aqui a lógica de envio do formulário
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            placeholder='Digite seu nome'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            placeholder='Digite seu email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder='Digite sua mensagem'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;

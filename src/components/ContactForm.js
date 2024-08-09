import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
    // validação básica de e-mail
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

    if (message.length < 15) {
      alert('A mensagem deve ter pelo menos 15 caracteres.');
      return;
    }

    if (!validateEmail(email)) {
      alert('O e-mail fornecido não é válido.');
      return;
    }

    emailjs.send('emailMessage', 'template_bpzfsy1', formData, '-v_UQXU1nEuqEiE4T')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, (err) => {
      console.error('FAILED...', err);
      alert('Ocorreu um erro ao enviar a mensagem.');
    });
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

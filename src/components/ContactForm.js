// https://www.emailjs.com/

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos os campos devem ser preenchidos!',
      });
      return;
    }

    if (message.length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'A mensagem deve ter pelo menos 10 caracteres.',
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O e-mail fornecido não é válido.',
      });
      return;
    }


    emailjs.send('gmailMessage', 'template_2fl4u6n', formData, '-v_UQXU1nEuqEiE4T')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Mensagem enviada com sucesso!",
        showConfirmButton: false,
        timer: 1500
      });
    }, (err) => {
      console.error('FAILED...', err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao enviar a mensagem.',
      });
    });
};

  return (
    <section id="contact-form">
      <h2>Me contate:</h2>
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

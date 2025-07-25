// https://www.emailjs.com/

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const { t } = useTranslation();
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
        text: t('nameError'),
      });
      return;
    }

    if (message.length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: t('messageMinLength'),
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: t('emailInvalid'),
      });
      return;
    }

    // Envia o e-mail usando EmailJS
    // tdaAnk_8XR4h8YYbg -- account ID API keys public
    // template_1374bgp -- email template ID
    // service_stt21h2 -- email service ID  
    emailjs.send('service_stt21h2', 'template_1374bgp', formData, 'tdaAnk_8XR4h8YYbg')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: t('messageSent'),
        showConfirmButton: false,
        timer: 1500
      });
      // Limpa o formulário após o envio bem-sucedido
      //setFormData({
        //name: '',
       // email: '',
       // message: ''
      //});
    }, (err) => {
      console.error('FAILED...', err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: t('messageError'),
      });
    });
};

  return (
    <section id="contact-form">
      <h2>{t('contactTitle')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('name')}</label>
          <input
            placeholder={t('namePlaceholder')}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('email')}</label>
          <input
            placeholder={t('emailPlaceholder')}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('message')}</label>
          <textarea
            placeholder={t('messagePlaceholder')}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">{t('send')}</button>
      </form>
    </section>
  );
};

export default ContactForm;

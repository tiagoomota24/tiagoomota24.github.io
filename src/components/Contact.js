import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar o e-mail usando o SDK do EmailJS
    emailjs
      .sendForm(
        "service_jj85nsa",
        "template_pii0zyc",
        e.target,
        "O5zVUWMmOiZyO3s4-"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Sua mensagem foi enviada com sucesso!");
        },
        (error) => {
          console.error(error.text);
          toast.error("Erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <div className="contact-container">
      <ToastContainer />
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">
          <FaUser className="icon" /> Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">
          <FaEnvelope className="icon" /> Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">
          <FaCommentDots className="icon" /> Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

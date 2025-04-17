import { useState } from "react";
import styles from "./Contact.module.css"; // Import du fichier CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! 🚀 (Intégrer une API comme EmailJS pour l'envoi réel)");
    // Ici, tu peux intégrer EmailJS ou un backend pour envoyer l'email
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;

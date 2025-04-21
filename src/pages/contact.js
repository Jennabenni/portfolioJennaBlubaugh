import styles from './contact.module.css';
import { motion } from 'framer-motion';

  import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
/* Form data to validate */
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      /* Form doesnt go anywhere */
      console.log('Form submitted:', formData);
      //Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };
/* Here is output, gives styling for whole thing */
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >

    <div className={styles.contact}>
      <h2>Contact Me</h2>

      <p>Email: jennielle279@gmail.com</p>
      <p>Phone: 954-376-9109</p>
      <div>
      <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        </div>
        {errors.name && <p className="error">{errors.name}</p>}
<div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

<div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        </div>
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
      </div>
    </div>
    </motion.div>
  );
};

export default Contact;




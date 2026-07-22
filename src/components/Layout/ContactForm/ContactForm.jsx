import styles from "./ContactForm.module.scss";

import { useState } from "react";
import { Modal, Form, Container } from "react-bootstrap";

import { RxCross2 } from "react-icons/rx";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";
import ContactCard from "@/components/Layout/ContactCard/ContactCard";

function ContactFrom({ className = "", id, isDark = false }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // clear error when user types
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!values.name.trim()) newErrors.name = "This field is required";
    if (!values.subject.trim()) newErrors.subject = "This field is required";
    if (!values.message.trim()) newErrors.message = "This field is required";

    if (!values.email.trim()) {
      newErrors.email = "This field is required";
    } else {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        newErrors.email = "Invalid Email Address";
      }
    }

    setErrors(newErrors);

    // Only submit if there are no errors
    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (!hasErrors) {
      console.log("Form submitted:", values);
    }
  };

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div id={id} className={`${className}`.trim()}>
      <ContactCard />

      <AnimatedButton text="Use The Form" onClick={() => handleShow(true)} color="#fff" />

      <Modal show={show} onHide={handleShow} fullscreen centered>
        <Modal.Body className={styles.modalBody} data-theme={isDark ? "dark" : undefined}>
          <Container className="my-auto" style={{ maxWidth: "400px" }}>
            <h2 className={styles.title}>Please Write</h2>
            <Form className={styles.formContainer}>
              <div className={styles.topInput}>
                {/* Name Input */}
                <Form.Group className={styles.inputContainer}>
                  <div className={styles.relative}>
                    <Form.Control placeholder="Name" name="name" autoComplete="given-name" value={values.name} onChange={handleChange} />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                </Form.Group>
                {/* Email Input */}
                <Form.Group className={styles.inputContainer}>
                  <div className={styles.relative}>
                    <Form.Control placeholder="Email" name="email" autoComplete="email" value={values.email} onChange={handleChange} />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </Form.Group>
              </div>
              {/* Subject Input */}
              <Form.Group className={`${styles.inputContainer} ${styles.single}`}>
                <Form.Control placeholder="Subject" name="subject" value={values.subject} onChange={handleChange} />

                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </Form.Group>
              {/* Message Input */}
              <Form.Group className={`${styles.inputContainer} ${styles.single}`}>
                <Form.Control as="textarea" rows={3} placeholder="Message" name="message" value={values.message} onChange={handleChange} />

                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </Form.Group>
            </Form>

            <AnimatedButton text="Submit" color="var(--text-main)" onClick={handleSubmit} className={styles.submitButton} />

            <button onClick={() => setShow(false)} className={styles.closeButton}>
              <RxCross2 size={24} />
            </button>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ContactFrom;

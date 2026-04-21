import { useRef } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./contact.css";

function Contact_pf() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9zk1zq",
        "template_21jm9un",
        formRef.current,
        "_K1NGgeN5975QKQ9C"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Error sending message. Try again!");
        }
      );
  };

  return (
    <div className="contact-outer" id="contact">
      <h1 className="text-center contact-title">Get in touch with me</h1>

      <Card className="contact-card p-4 mt-4">
        <Card.Body>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="floating-group mb-4">
              <Form.Control name="name" required className="floating-input" />
              <label className="floating-label">Your Name</label>
            </div>

            <div className="floating-group mb-4">
              <Form.Control
                name="email"
                required
                type="email"
                className="floating-input"
              />
              <label className="floating-label">Your Email</label>
            </div>

            {/* <div className="floating-group mb-4">
              <Form.Control name="url" className="floating-input" />
              <label className="floating-label">Portfolio URL</label>
            </div> */}

            <div className="floating-group mb-4">
              <Form.Control
                name="message"
                as="textarea"
                rows={4}
                required
                className="floating-input textarea"
              />
              <label className="floating-label">Message</label>
            </div>

            <div className="text-center">
              <Button type="submit" className="contact-btn ripple px-5 py-2">
                Send
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact_pf;

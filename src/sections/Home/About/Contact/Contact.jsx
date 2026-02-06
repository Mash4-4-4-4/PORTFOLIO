import "./Contact.css"
 import emailjs from "emailjs-com";
import { useRef } from "react";
export default function Contact()
{
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5i8pbfn",
      "template_berh9m9",
      formRef.current,
      "ZuIMQelq-2MQ4gxMt"
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Something went wrong.");
        console.error(error);
      }
    );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
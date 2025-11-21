import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(""); // use string to show success or error

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_x9yvw1b",
      "template_it55frp",
      form.current,
      "yBsl3vpsXguwqsHvA"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone("Thanks for contacting me!");
        form.current.reset();

        // Clear message after 3 seconds
        setTimeout(() => setDone(""), 2000);
      },
      (error) => {
        console.log(error.text);
        setDone("Oops! Something went wrong. Please try again.");

        // Clear message after 3 seconds
        setTimeout(() => setDone(""), 2000);
      }
    );
};


  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};


export default Contact;

import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="name" placeholder="Your name.." />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Your email.." />

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;

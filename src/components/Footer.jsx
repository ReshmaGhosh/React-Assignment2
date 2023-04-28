import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <section>
        <div className="input-form">
          <div className="input-form1">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <br />
              <br />
              <input type="text" placeholder="Enter a valid email address" />
              <br />
              <br />
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <br /> <br />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div className="contact">
            <h1>CONTACT US</h1>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-vimeo"></i>
            <i className="fab fa-instagram"></i>
            <p>1 (234) 567-567</p>
            <p>1 (234) 567-567</p>
          </div>
        </div>
        <div className="footer"></div>
      </section>
    </div>
  );
}

import React from "react";
import logo from "./assets/icons/logo2.png";
import instagram from "./assets/icons/Instagram.png";
import linkedin from "./assets/icons/LinkedIN.png";
import whatsapp from "./assets/icons/WhatsApp.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <article>
        <h1 className="logo">
          <img src={logo} alt="logo" />
          <span>Crew</span>
        </h1>

        <p>
          Crew is a tech enabled staff recruitment firm, supporting business
          owners and leaders. We bring our clients global talents, faster,
          supporting them to operate reliably and grow.
        </p>
      </article>

      <nav className="navigations">
        <ul>
          <li>
            <b>Tariq Alkahily Technology</b>
          </li>

          <li>7755 Ahmad Al Attas, Al Zahra</li>

          <li>Jeddah, Kingdom of Saudi Arabia</li>

          <li>+966 566 499 997</li>
        </ul>

        <ul>
          <li className="arabic-cred">
            <b>مؤسسة طارق الكاهلي لتقنية المعلومات</b>
          </li>

          <li className="arabic-cred">
            {" "}
            شارع أحمد العطاس، حي الزهراء<span>7755</span>
          </li>

          <li className="arabic-cred">جدة ، المملكة العربية السعودية</li>

          <li className="arabic-cred">+966 566 499 997</li>
        </ul>
        <ul>
          <h3>Crew Platforms</h3>

          <li>
            <span>7755 Ahmad Al Attas, Al-Zahra</span>
          </li>

          <li>
            <span>Jeddah, Saudi Arabia</span>
          </li>

          <li>
            <a>Join Us</a>
          </li>
        </ul>
      </nav>
      <div className="social">
        <h3>Keep In Touch</h3>

        <ul>
          <li>
            <a href="https://www.linkedin.com/company/crewjeddah/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>

          <li>
            <a href="https://api.whatsapp.com/send/?phone=966536688217">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/saudi.crew/?igshid=MzRlODBiNWFlZA%3D%3D">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>

        <p>Copyright © crewksa.com</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

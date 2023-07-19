import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section>You are on About Page</section>
      <button onClick={() => goToContact()}>Contact Us</button>
    </>
  );
};

export default About;

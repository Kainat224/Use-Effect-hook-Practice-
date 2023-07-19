import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <section>You are on Contact Page</section>
      <button onClick={goToHome}>Go to Home Page</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
};

export default Contact;

import React, { useState } from "react";

function EmailValidation() {
  const [isValid, setIsValid] = useState({
    email: false,
    phone: false,
  });
  const [message, setMessage] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneregex = /^[6-9]\d{9}$/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Your email looks good!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  const validatePhone = (event) => {
    const phone = event.target.value;
    if (phoneregex.test(phone)) {
      setIsValid(true);
      setMessage("Your Phone number looks good");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid phone number");
    }
  };

  return (
    <div className="container">
      <input
        type="email"
        placeholder="Enter your email"
        className="email-input"
        onChange={validateEmail}
      />
      <input
        type="number"
        placeholder="Enter your phone number"
        className="phone"
        onChange={validatePhone}
      />

      {/*If the entered email is valid, the message will be blue, otherwise it will be red. */}
      <div className={`message ${isValid ? "success" : "error"}`}>
        {message}
      </div>
    </div>
  );
}

export default EmailValidation;

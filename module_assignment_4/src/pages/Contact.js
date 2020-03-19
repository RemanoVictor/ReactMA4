import React, { useState } from "react";

export default function Contact() {
  const [firstname, setfirstname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [firstnameError, setfirstnameError] = useState(true);
  const [numberError, setnumberError] = useState(true);
  const [emailError, setemailError] = useState(true);
  const [messageError, setmessageError] = useState(true);

  function handleChange(input) {
    let name = input.target.name;
    let value = input.target.value;
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
    let numberPattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;

    switch (name) {
      case "firstname":
        value !== "" ? setfirstnameError(false) : setfirstnameError(true);
        break;
      case "number":
        numberPattern.test(value)
          ? setnumberError(false)
          : setnumberError(true);
        break;
      case "email":
        emailPattern.test(value) ? setemailError(false) : setemailError(true);
        break;
      case "message":
        value !== "" ? setmessageError(false) : setmessageError(true);
        break;
      default:
    }

    this.setState({
      [name]: value
    });
  }

  function handleSubmit(event) {
    // const { firstname } = this.state;
    alert(
      `Hey ${firstname}, Thanks for reaching out. We will get back to you ASAP!`
    );
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <h1> Contact Form </h1>
          <form onSubmit={handleSubmit}>
            <p>Enter your name</p>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              className="form-control"
            />
            <p className={firstnameError ? "error" : "error_hide"}>
              Please enter a valid firstname
            </p>
            <br />
            <p>Enter your number</p>
            <input
              type="number"
              name="number"
              onChange={handleChange()}
              className="form-control"
            />
            <p className={numberError ? "error" : "error_hide"}>
              Please enter a valid number
            </p>
            <br />
            <p>Enter your email</p>
            <input
              type="text"
              name="email"
              onChange={handleChange()}
              className="form-control"
            />
            <p className={emailError ? "error" : "error_hide"}>
              Please enter a valid email
            </p>
            <br />
            <p>Enter your message</p>
            <input
              type="text"
              name="message"
              onChange={handleChange()}
              className="form-control"
            />
            <p className={messageError ? "error" : "error_hide"}>
              Please enter a valid message
            </p>
            <br />
            <input
              type="submit"
              disabled={
                firstnameError || numberError || emailError || messageError
              }
              className="btn"
            />
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

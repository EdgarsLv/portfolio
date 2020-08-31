import React, { Component } from "react";
import emailjs from "emailjs-com";
import ReactDom from "react-dom";

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class ContForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      email: null,
      message: null,
      formErrors: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      emailjs.sendForm(
        "gmail",
        "template_BqlPJxPD",
        e.target,
        "user_6YlGF145P5BFerCas2rAA"
      );

      document.getElementById("main-form").reset();

      const el = React.createElement(
        "h2",
        { className: "success" },
        "Thank you"
      );
      ReactDom.render(el, document.getElementById("submit-log"));
    } else {
      const el = React.createElement(
        "h2",
        { className: "failed" },
        "Invalid form"
      );
      ReactDom.render(el, document.getElementById("submit-log"));
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 3 ? "Minimum 3 characaters" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "message":
        formErrors.message = value.length < 10 ? "Minimum 10 characaters" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="col-md-6 col-sm-12">
        <form
          data-aos="zoom-in"
          data-aos-duration="700"
          id="main-form"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <div className="row">
            <div className="col-6 req">
              <input
                className={formErrors.firstName.length > 3 ? "error in" : "in"}
                type="text"
                name="firstName"
                placeholder="Your Name"
                noValidate
                onChange={this.handleChange}
              />
              {/* {formErrors.firstName.length > 0 && (
              <span className="error tooltiptext">{formErrors.firstName}</span>
            )} */}
            </div>
            <div className="col-6 req">
              <input
                className={formErrors.email.length > 0 ? "error in" : "in"}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />

              {/* {formErrors.email.length > 0 && (
              <span className="error tooltiptext">{formErrors.email}</span>
            )} */}
            </div>
            <div className="col-6">
              <input
                className="in"
                type="tel"
                name="phone"
                placeholder="Your Phone"
              />
            </div>
            <div className="col-6">
              <input
                className="in"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="message-div req">
            <textarea
              className={
                formErrors.message.length > 0
                  ? "error in message"
                  : "in message"
              }
              placeholder="Write message..."
              name="message"
              noValidate
              onChange={this.handleChange}
            />

            {/* {formErrors.message.length > 0 && (
            <span className="error tooltiptext">{formErrors.message}</span>
          )} */}
          </div>
          <div className="submit-container">
            <button className="submiting" type="submit">
              Send
            </button>
            <div id="submit-log"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContForm;

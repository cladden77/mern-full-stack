import React, { useState } from "react";

const defaultFormFields = {
    email: "",
    password: ""
}

const Signin = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const [ formError, setFormError ] = useState({});

    const changeBorderColorOnError = (inputName) => {
      let formInput = document.getElementById(`${inputName}`);
      formInput.classList.add("error");
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleValidation = () => {
      let error = {};

      if(!formFields.email){
        error.email = "Email is required!"
        changeBorderColorOnError("email");
      }

      if(!formFields.password){
        error.password = "Password is required!"
        changeBorderColorOnError("password");
      }

      return error;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormError(handleValidation());
    };

  return (
    <section className="form-container">
        <h1 className="form-heading">Sign In</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-item" id="email">
          <label>Email</label>
          <input
            placeholder="Enter your email"
            name="email"
            type="text"
            value={formFields.email}
            onChange={handleInputChange}
          />
          <span className="error-text">{formError.email}</span>
        </div>

        <div className="form-item" id="password">
          <label>Password</label>
          <input
            placeholder="Enter your password"
            name="password"
            type="password"
            value={formFields.password}
            onChange={handleInputChange}
          />
          <span className="error-text">{formError.password}</span>
        </div>
        
        <button className="form-button" type="submit">
          Sign In
        </button>
      </form>
    </section> 
  )
}

export default Signin;
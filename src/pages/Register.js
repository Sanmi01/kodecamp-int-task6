import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import KodeCampLogo from "../assets/images/logo.png"
import "./Register.css";

const Register = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <>
      <Container id="register-page">
        <div className="m-5 p-5 register row p-3 align-items-center">
          <div className="col-md-6 p-3 text-center">
            <h1>Student Register</h1>
            <img
              className="img-fluid"
              src="https://i.postimg.cc/JhxZ3ZGs/undraw-Sign-in-re-o58h.png"
              alt="register"
            />
          </div>
          <div className="col-md-6 p-3 text-center">
          <div>
            <img src={KodeCampLogo} alt="logo" />
          </div>
            <form>
            <div className="d-flex justify-content-between form-group m-3">
                <input
                  placeholder='Enter your full name'
                  type="text"
                  id="fullName"
                  required
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      fullName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="d-flex justify-content-between form-group m-3">
                <input
                  placeholder='Enter your email'
                  type="email"
                  id="email"
                  required
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="d-flex justify-content-between form-group m-3">
                <input
                  placeholder='Enter your password'
                  type="password"
                  id="password"
                  required
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="d-flex justify-content-between form-group m-3">
                <input
                  placeholder='Confirm Password'
                  type="password"
                  id="confirmPassword"
                  required
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="text-end">
                  <p>Already have an account? Login</p>
              </div>
              <div className="d-flex justify-content-between">
                  <Button>Register</Button>
                  <Button>Register with Google</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;

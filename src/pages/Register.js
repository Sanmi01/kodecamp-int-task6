import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
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
        <div className="row p-3 align-items-center">
          <div className="col-md-6 p-3 text-center">
            <h1>Student Register</h1>
            <p>make sure your account is secure</p>
            <img
              className="img-fluid"
              src="https://i.postimg.cc/JhxZ3ZGs/undraw-Sign-in-re-o58h.png"
              alt="register"
            />
          </div>
          <div className="col-md-6 p-3 text-center">
            <form>
            <div className="d-flex justify-content-between form-group m-3">
                <label htmlFor="fullName">Full Name</label>
                <input
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
                <label htmlFor="email">Email</label>
                <input
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
                <label htmlFor="password">Password</label>
                <input
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
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
                  <p>Login</p>
              </div>
              <div className="d-flex justify-content-between">
                  <button>Register</button>
                  <button>Register with Google</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;

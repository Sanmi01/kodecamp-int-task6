import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Container id="login-page">
        <div className="row p-3 align-items-center">
          <div className="col-md-6 p-3 text-center">
            <h1>Student Login</h1>
            <p>make sure your account is secure</p>
            <img
              className="img-fluid"
              src="https://i.postimg.cc/TYPZBHpC/undraw-Teacher-re-sico.png"
              alt="login"
            />
          </div>
          <div className="col-md-6 p-3 text-center">
            <form>
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
              <div className="d-flex justify-content-between">
                  <p>Forgot Password?</p>
                  <p>Register</p>
              </div>
              <div>
                  <button>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

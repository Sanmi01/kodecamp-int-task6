import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import KodeCampLogo from "../assets/images/logo.png"
import "./Login.css";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Container id="login-page">
        <div className="login m-5 p-5 row align-items-center">
          <div className="col-md-6 p-3 text-center">
            <h1>Student Login</h1>
            <img
              className="img-fluid"
              src="https://i.postimg.cc/TYPZBHpC/undraw-Teacher-re-sico.png"
              alt="login"
            />
          </div>
          <div className="col-md-6 p-3 text-center">
          <div>
            <img src={KodeCampLogo} alt="logo" />
          </div>
            <form>
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
              <div className="text-end">
                  <p>Don't have an account? Register</p>
              </div>
              <div className="d-flex justify-content-between">
                  <Button>Log In</Button>
                  <Button>Log In with Google</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

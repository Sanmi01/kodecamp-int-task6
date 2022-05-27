import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import KodeCampLogo from "../assets/images/logo.png";
import "./Login.css";
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth()
  const [error, setError ] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  async function handleSubmitWithEmail() {

    

    try {
      setError('')
      setLoading(true)
      await login(formValues.email, formValues.password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      setError('Failed to log in')
    }

    setLoading(false)
  }

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
          {error && <Alert variant="danger">{error}</Alert>}
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
                  <p>Don't have an account? <Link to="/register">Register</Link></p>
              </div>
              <div className="d-flex justify-content-between">
                  <Button disabled={loading} onClick={handleSubmitWithEmail}>Log In</Button>
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

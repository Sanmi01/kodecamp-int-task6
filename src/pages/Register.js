import React, { useState } from "react";
import { Container, Button, Alert} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import KodeCampLogo from "../assets/images/logo.png"
import "./Register.css";
import { auth, provider } from '../firebase/Firebase-Config';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const { signUp } = useAuth()
  const [error, setError ] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  async function handleSubmitWithEmail() {
    if(formValues.password !== formValues.confirmPassword) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signUp(formValues.email, formValues.password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  async function googleAuth() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result)
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL
  
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
      navigate('/dashboard')
    }).catch((error) => {
      console.log(error)
    })
  }

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
          {error && <Alert variant="danger">{error}</Alert>}
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
                  <p>Already have an account? <Link to="/login">Log In</Link></p>
              </div>
              <div className="d-flex justify-content-between">
                  <Button disabled={loading} onClick={handleSubmitWithEmail}>Register</Button>
                  <Button onClick={googleAuth}>Register with Google</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;

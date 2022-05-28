import React, { useState } from 'react';
import { Container, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import KodeCampLogo from "../assets/images/logo.png";
import "./ForgotPassword.css";
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword = () => {
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleReset(e) {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(email)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }
    return (
        <Container id="forgot-page">
        <div className="forgot mx-auto mt-5 p-5 col-md-6 p-3 text-center">
            <h1>Password Reset</h1>
            <img src={KodeCampLogo} alt="logo" />
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handleReset}>
              <div className="d-flex justify-content-between form-group m-3">
                <input
                placeholder='Enter your email'
                  type="email"
                  id="email"
                  required
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              <div className="text-center">
                  <p><Link to="/login">Login</Link></p>
              </div>
              <div className="text-center">
                  <Button disabled={loading} type="submit">Reset Password</Button>
              </div>
            </form>
          </div>
            
        </Container>
    )
}

export default ForgotPassword

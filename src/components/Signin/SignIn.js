import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './signin.css';
import NavBar from '../Nav/NavBar';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  const [error , setErrors] = useState('')
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7230/login', { email, password });
      // console.log('Sign in successful:', response.status);
      if(response.status ===200){
        navigate("/E-Commerce-React")
        console.log("Data Recived!")
      }
      else{
        console.log("Invalid Username/Password");
      }
      
    } catch (error) {
      console.error('Error signing in:', error);
      setErrors('Invalid username or password');
    }
  };

  return (
    <div className='glass-bg'>
      <NavBar/>
      <div className='container'>
        <Row className="w-100">
          <Col md={6} lg={4} className="mx-auto">
            <h3 className="text-center mb-4">Sign In</h3>
            <Form onSubmit={handleSubmit}  >
            <div className="form-group">
                  <label htmlFor="username" className='float-lb'>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={email}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className='float-lb'>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;

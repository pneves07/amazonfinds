import  { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Importa o useHistory do React Router

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa o useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/admin');
    })

    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    }); 
  };

    

  return (
    <>
    <Container >
        <Row  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}> 
            <Col xs={10} s={8} md={6} lg={4}>
            <br></br>
            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </InputGroup>
                <br />
                <label>Password:</label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                        </svg>
                    </InputGroup.Text>
                        <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                </InputGroup>
                <br />
                <div className='text-center' >
                    <Button variant="primary" type="submit">Login</Button>
                </div>
            </form>
        </Col>    
      </Row>
      </Container>
    </>
    
  );
}

export default Login;

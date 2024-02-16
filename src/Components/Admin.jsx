/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import app from "../firebase.config";
import { getDatabase, ref, set, push, get  } from 'firebase/database';

function Admin() {
  const navigate = useNavigate();

  const date = new Date();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [link, setLink] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("Entrou!")
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    await getAuth().signOut();
    navigate('/login'); 
  };

  const saveData = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "products"));
    set(newDocRef, {
        name: name,
        description: description,
        img: img,
        oldPrice: oldPrice,
        newPrice: newPrice,
        link: link,
        date: date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear()
    
    }).then(() => {
        alert("data saved successfully")
    }).catch((error) => {
        alert("error: ", error.message)
    })
}

  return (
    <>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    <Container style={{padding: 50}}>
        <h1 className='text-center'>
                ADICIONAR PRODUTO
        </h1>
            <br></br>
            <form onSubmit={saveData}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Descripiton</InputGroup.Text>
                        <Form.Control
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
                        <Form.Control
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Link</InputGroup.Text>
                        <Form.Control
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">OldPrice</InputGroup.Text>
                        <Form.Control
                        type="number"
                        value={oldPrice}
                        onChange={(e) => setOldPrice(e.target.value)}
                        required
                        />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">NewPrice</InputGroup.Text>
                        <Form.Control
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        required
                        />
                </InputGroup>
                <br></br>
            
            </form>
            <div className='text-center' >
                <Button onClick={saveData}>Adicionar</Button>
            </div>
            
    </Container>
        
    </>
  );
}

export default Admin;

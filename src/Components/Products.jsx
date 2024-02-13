/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './Products.css';


import app from "../firebase.config";
import { getDatabase, ref, set, push, get  } from 'firebase/database';
import { useState, useEffect } from 'react'


function Products() {

    //let [inputValue1, setInputValue1] = useState("");
    //let [inputValue2, setInputValue2] = useState("");
    let [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const date = new Date();


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        Object.values(product).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    
    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "products"));
        set(newDocRef, {
            name: "Logitech MX Keys S",
            description: "Teclado sem fio, perfil baixo, escrita fluída precisa silenciosa, teclas programáveis, iluminação, Bluetooth, carregamento USBC, QWERTYEspanhol",
            img: "https://m.media-amazon.com/images/I/71XJ-YLOnTL._AC_SX679_.jpg",
            oldPrice: 131.13,
            newPrice: 99.61,
            link: "https://amzn.to/494P0sx",
            date: date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear()
        
        }).then(() => {
            alert("data saved successfully")
        }).catch((error) => {
            alert("error: ", error.message)
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "products");
            const snapshot = await get(dbRef);
            if(snapshot.exists()){
                setProducts(Object.values(snapshot.val()));
            } else {
                alert("error");
            }
        }

        fetchData();
    })

    
    
  
    return (
    <Container>
        <br></br>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </InputGroup.Text>
            <Form.Control
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={handleSearch}
            />
        </InputGroup>

        
        <br></br>
        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
        {filteredProducts.map((product) => (
            <Col key={product.link}>
            <Card>
                <Card.Img variant="top" src={product.img} style={{maxWidth: '100%' , maxHeight: "200px", objectFit: 'contain', padding: 20 }}/>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text style={{minHeight: 100}}>{product.description}</Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="text-center text-danger fs-4">{Math.round((product.newPrice / product.oldPrice - 1) * 100)}%</ListGroup.Item>
                    <ListGroup.Item className="text-center"><span className="text-decoration-line-through fs-5">{product.oldPrice}€</span> | <span className="fs-5">{product.newPrice}€</span></ListGroup.Item>
                    <br></br>
                    <Button href={product.link} variant="warning" target="_blank">Ver</Button>
                    
                </ListGroup>
                
                </Card.Body>
                <Card.Footer className="text-muted text-center">Última Atualização: {product.date}</Card.Footer>
            </Card>
            </Col>
        ))} 
        </Row>

        
    </Container>



  );
}

export default Products;
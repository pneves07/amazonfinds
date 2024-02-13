import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


import firebase from 'firebase/app';
import 'firebase/database';


function Products() {


    const adicionarProduto = () => {
        const novoProduto = {
          nome: "Nome do Produto",
          descricao: "Descrição do Produto",
          foto: "URL da Foto do Produto",
          precoAntigo: 100.00,
          precoNovo: 80.00,
          link: "URL do Link do Produto"
        };

        const produtosRef = firebase.database().ref('produtos');

        produtosRef.push(novoProduto)
      .then(() => {
        console.log("Produto adicionado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar o produto:", error);
      });
    };


  
    let products = [{
        Name : "Iphone X",
        oldPrice : 1000,
        newPrice: 850,
        Img: "https://cf4.certideal.com/25309-thickbox_default/iphone-11-64-gb-sem-touch-id-cor-de-acordo-com-a-disponibilidade.jpg"
    }, {
        Name : "Macbook Pro",
        oldPrice : 1500,
        newPrice: 1250,
        Img: "https://b7computer.pt/1530-large_default/apple-macbook-pro-13p-apple-m1-chip-c-8-core-cpu-e-8-core-gpu-8gb-256gb-ssd-space-grey.jpg"
    },
    {
        Name : "Apple Vision",
        oldPrice : 5000,
        newPrice: 4550,
        Img: "https://www.cnet.com/a/img/resize/7d088fe368811ae5c342bba254501f93c3812906/hub/2023/12/22/fb0b70d4-6b8d-498e-89af-9ae305132259/wwdc-2023-060523-apple-pro-vision-hands-on-5.jpg?auto=webp&fit=crop&height=900&width=1200"
    }, {
        Name : "Macbook Pro",
        oldPrice : 1500,
        newPrice: 1250,
        Img: "https://b7computer.pt/1530-large_default/apple-macbook-pro-13p-apple-m1-chip-c-8-core-cpu-e-8-core-gpu-8gb-256gb-ssd-space-grey.jpg"
    },
    {
        Name : "Apple Vision",
        oldPrice : 5000,
        newPrice: 4550,
        Img: "https://www.cnet.com/a/img/resize/7d088fe368811ae5c342bba254501f93c3812906/hub/2023/12/22/fb0b70d4-6b8d-498e-89af-9ae305132259/wwdc-2023-060523-apple-pro-vision-hands-on-5.jpg?auto=webp&fit=crop&height=900&width=1200"
    }, {
        Name : "Macbook Pro",
        oldPrice : 1500,
        newPrice: 1250,
        Img: "https://b7computer.pt/1530-large_default/apple-macbook-pro-13p-apple-m1-chip-c-8-core-cpu-e-8-core-gpu-8gb-256gb-ssd-space-grey.jpg"
    },
    {
        Name : "Apple Vision",
        oldPrice : 5000,
        newPrice: 4550,
        Img: "https://www.cnet.com/a/img/resize/7d088fe368811ae5c342bba254501f93c3812906/hub/2023/12/22/fb0b70d4-6b8d-498e-89af-9ae305132259/wwdc-2023-060523-apple-pro-vision-hands-on-5.jpg?auto=webp&fit=crop&height=900&width=1200"
    }
    ];
  
    return (
    <Container>
        <button onClick={adicionarProduto}>Adicionar Produto</button>
        <br></br>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
            <Col key={product.Name}>
            <Card>
                <Card.Img variant="top" src={product.Img} />
                <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="text-center"><span className="text-decoration-line-through fs-6">{product.oldPrice}€</span> | <span className="text-danger fs-3">{product.newPrice}€</span></ListGroup.Item>
                    <br></br>
                    <Button variant="warning">Ver</Button>
                    
                </ListGroup>
                
                </Card.Body>
                <Card.Footer className="text-muted text-center">Data de Atualização</Card.Footer>
            </Card>
            </Col>
        ))} 
        </Row>

        
    </Container>



  );
}

export default Products;
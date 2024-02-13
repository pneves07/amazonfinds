
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Navbar';


function Navbar() {
  return (
    <Nav className="bg-body-tertiary">
        <Container>
          <Nav.Brand>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/726/726448.png" width={40} style={{ marginRight: 20 }}></img>
              <span>
              Descontos Online
              </span>
            </div>
          </Nav.Brand>
        </Container>
      </Nav>
  );
}

export default Navbar;

import { Container, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Spiceez</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Admin</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navigation;
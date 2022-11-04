import { Container, Nav, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="#">Link</a> | <a href="http://localhost:5174/login">Login to Student Portal</a>
      </nav>
    </header>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Online Resumes</Navbar.Brand>
        <Nav>
          <Nav.Link href="http://localhost:5174/login">Login to Student Portal</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

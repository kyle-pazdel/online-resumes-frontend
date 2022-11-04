import { Container, Nav, Navbar } from "react-bootstrap";

export function Header() {
  return (
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

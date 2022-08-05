import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar classname='header' sticky="top">
      <Container>
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>

        <NavDropdown title="Explore" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to='/paintings'>Paintings</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/Sculptures'>Sculptures</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/Ships'>Ships</NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link as={Link} to='/paintings'>Paintings</Nav.Link> */}
      </Container>

    </Navbar>
  )
}
export default Header
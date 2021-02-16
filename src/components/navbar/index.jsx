import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import CartWidget from '../CartWidget/index';


const NavBarComponent = () => {
  return(
        <>
          <nav>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Diseños Veronica Valdevilt</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>
                    <li>
                      <Link to={'/'}>Inicio</Link>
                    </li></Nav.Link>
                  <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Nuestros Proyectos</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Nuestro Estilo</NavDropdown.Item> 
                      <NavDropdown.Item href="#action/3.3">Medios</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Servicios" id="basic-nav-dropdown">
                    <li>
                      <Link to={'/servicios'}>Servicios</Link>
                    </li>
                      <NavDropdown.Item href="#action/4.1">Decoración</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.2">Ambientación</NavDropdown.Item>
                      <NavDropdown.Item href="#action/4.3">Iluminación</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Nuestro proceso</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <li>
                      <Link to={'/cart'}>Tienda
                        <CartWidget />
                      </Link> 
                    </li>
                  </Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>

          </nav>
        </>
      );
}

export default NavBarComponent;

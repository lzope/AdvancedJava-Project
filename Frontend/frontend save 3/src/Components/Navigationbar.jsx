import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../CSS/Navigationbar.css';
import { useNavigate } from "react-router-dom";


export function Navigationbar() {
    const navigate = useNavigate();
    function handleClick() {
        setTimeout(() => {
          navigate(`/log-in`);
        }, 3000);
    }

    return (
        <Navbar bg="custom" variant="dark" className="navbar-custom" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="brand-effect fancy-font">BACK-TO-SCHOOL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/subscription">
                            <Nav.Link>Subscription</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/bestseller">
                            <NavDropdown title="Courses" id="basic-nav-dropdown">
                                <LinkContainer to="/C">
                                    <NavDropdown.Item>C</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/CPP">
                                    <NavDropdown.Item>C++</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/Html">
                                    <NavDropdown.Item>HTML</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/CSS">
                                    <NavDropdown.Item>CSS</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/Js">
                                    <NavDropdown.Item>JavaScript</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/Java">
                                    <NavDropdown.Item>JAVA</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/Devops">
                                    <NavDropdown.Item>Devops</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/Django">
                                    <NavDropdown.Item>Django</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/SDLC">
                                    <NavDropdown.Item>SDLC</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/spring">
                                    <NavDropdown.Item>spring</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/python">
                                    <NavDropdown.Item>python</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/Network">
                                    <NavDropdown.Item>Network</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </LinkContainer>



                        <LinkContainer to="/AboutUs">
                            <Nav.Link>AboutUs</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contactus">
                            <Nav.Link>ContactUs</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/ViewCourses">
                            <Nav.Link>View Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/AboutUs">

                            <Nav.Link className="nav-link search-bar">
                                <div className="d-flex align-items-center">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className="search-input"
                                    />
                                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                </div>
                            </Nav.Link>
                        </LinkContainer>




                    </Nav>

                    <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link className="nav-link cart-link">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                {" "}Cart
                            </Nav.Link>
                        </LinkContainer>

                        <Button variant="primary" size="sm" value="LogOut" onClick={handleClick}>LogOut</Button>
                    </Nav>


                    <NavDropdown title={<FontAwesomeIcon icon={faUser} size="lg" color="white" />} id="profile-dropdown">
                        <LinkContainer to="/log-in">
                            <NavDropdown.Item>Log In</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/sign-up">
                            <NavDropdown.Item>Sign Up</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Sidebar">
                            <NavDropdown.Item>Admin</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
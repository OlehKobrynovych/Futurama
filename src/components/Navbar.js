import { NavLink, Outlet} from "react-router-dom";
import ButtontTheme from "./ButtontTheme";
import { Container, Nav } from "react-bootstrap";
import Navbar1 from 'react-bootstrap/Navbar'

const Navbar = () => {

    return (
        <>
                <Container className='d-flex py-3'>
                    <Nav className="me-auto">
                        <NavLink className="navbarMenu" to='/' ><h3>Home</h3></NavLink>
                        <NavLink className="navbarMenu" to='hero' ><h3>My Hero</h3></NavLink>
                        <NavLink className="navbarMenu" to='*'><h3>Contact</h3></NavLink>
                    </Nav>
                <ButtontTheme/>
                </Container>
            <Outlet/>
        </>
        ); 
};

export default Navbar;
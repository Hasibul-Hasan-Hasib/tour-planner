import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';


const Header = () => {
    const { logOut, setUser, user, setIsLoading } = useAuth()

    const history = useHistory()
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                history.push('/home')
            })
            .finally(() => {
                setIsLoading(true)
            })
    }
    return (
        <div className='main-header py-4'>
            <Navbar className='nav-color px-5' variant='dark' fixed='top' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home" className="fs-3">Tour Planner</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto me-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/services'>Services</Link></Nav.Link>
                            <Nav.Link ><Link to='/about'>Customer service</Link></Nav.Link>
                            {user.email && <Nav.Link ><Link to='/myOrders'>My orders</Link></Nav.Link>}{
                                user.email && <Nav.Link  >
                                    <Link to='/manage-orders'>Manage all orders</Link>
                                </Nav.Link>}{
                                user.email && <Nav.Link  >
                                    <Link to='/add-service'>Add service</Link>
                                </Nav.Link>}
                        </Nav>
                        <Form className="d-flex">
                            <Link to='/services'><Button className='m-1' variant="contained">Book Now</Button></Link>
                            {user?.email ? <Button variant="contained" onClick={handleLogout} className='m-1'>Log out</Button> : <Link to='/login'>
                                <Button variant="contained" className=' m-1'>Login</Button></Link>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
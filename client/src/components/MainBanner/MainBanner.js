import React from 'react';
import '../Header/Header.css'
import logo1 from '../../images/Through the desert-cuate.png';
import logo2 from '../../images/Welcome-bro.png'
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MainBanner = () => {
    const { user } = useAuth();
    return (
        <div className='mt-3'>


            {
                user.email ? <Row xs={1} md={2} className='main-banner-first g-4 p-4'>
                    <Col><img src={logo2} alt="" /></Col>
                    <Col className=' pt-4 first'>
                        <h1><span className='name'>Hello {user.displayName}</span> <br /> Welcome to LPlanet.com</h1>
                        <p className="my-5">You may be charged a prepayment according to the property's prepayment policy. This is done to verify your credit card, where a temporary hold is placed on an amount until after check-out. It's best to contact the property for any charging queries.</p>
                        <Link to='/services'><Button variant="contained" className='btn btn-warning'>Choose your Dream</Button></Link>
                    </Col>
                </Row> : <Row xs={1} md={2} className='main-banner-first g-4 p-4'>
                    <Col><img src={logo1} alt="" /></Col>
                    <Col className='pt-4 first'>
                        <h1>Book your favorite Hotel</h1>
                        <p className="mx-5">You may be charged a prepayment according to the property's prepayment policy. This is done to verify your credit card, where a temporary hold is placed on an amount until after check-out. It's best to contact the property for any charging queries.</p>
                        <Link to='/services'>
                            <Button variant="contained">Book Now</Button></Link>
                    </Col>
                </Row>
            }

        </div>
    );
};

export default MainBanner;
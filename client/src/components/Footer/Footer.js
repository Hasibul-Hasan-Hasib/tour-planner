import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';



const Footer = () => {
    return (
        <div className="footer-container">
            <Row className="footer-link-container">
                <Col style={{display:"flex",flexDirection:'column'}}>
                    <NavLink className="footer-link" to="/">Support At TourPlanner</NavLink>
                    <NavLink className="footer-link" to="/">About Us</NavLink>
                    <NavLink className="footer-link" to="/">Contact us</NavLink>
                </Col>
                <Col style={{display:"flex",flexDirection:'column'}}>
                    <NavLink className="footer-link" to="/services">Our services</NavLink>
                    <NavLink className="footer-link" to="/">Help and Support</NavLink>
                    <NavLink className="footer-link" to="/">Affiliate</NavLink>
                </Col>
                <Col style={{display:"flex",flexDirection:'column'}}>
                    <NavLink className="footer-link" to="/">Terms</NavLink>
                    <NavLink className="footer-link" to="/">Privacy policy</NavLink>
                    <NavLink className="footer-link" to="/">Sitemap</NavLink>
                </Col>
            </Row>
            <div className="bottom-logo">
                <div className="logo-container">
                <h2 className="logo-title">TourPlanner</h2>
                </div>
                <p>©2021 DevLearn.Inc.</p>
            </div>
        </div>
    );
};

export default Footer;
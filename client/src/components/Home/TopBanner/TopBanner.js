import React from 'react';
import './TopBanner.css';
import { Button } from '@mui/material';
import bannerImg from '../../../images/Trip-pana.png'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="banner-container">
            <div className="heading-side">
                <h1 className="banner-heading"><span class="primary-color">We</span> Create Beautiful Smiles</h1>
                <p className="banner-para">Big savings on hotels in 120000 destinations worldwide. Browse hotel reviews and find the guaranteed best price on hotels for all budgets.</p>
                <Link to='/services'><Button variant="contained" >Get Started</Button></Link>
            </div>
            <div className="img-side"><img className="banner-img" src={bannerImg} alt="" /></div>
        </div>
    );
};

export default Banner;
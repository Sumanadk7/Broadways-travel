import React from 'react';
import './Header.css';
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section className="top">
            <div className="container">
                <div className="row pt-3 pb-3 align-items-center justify-content-between">
                    <div className="col-lg-2">
                     <Link to="/"><img className='w-100' src="https://tripturbo.com/static/logo-7e2c889f.png" alt="logo" />
                    </Link>   
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <ul className='fw-bold text-white fs-5 d-flex justify-content-between align-items-center'>
                            <li ><Link to="/flights" className='tt'>Flights</Link></li>
                            <li ><Link to="/activities" className='tt'>Activities</Link></li>
                            <li ><Link to="/packages" className='tt'>Packages</Link></li>
                            <li ><Link to="/events" className='tt'>Events</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 offset-lg-1 text-end">
                       <Link to="/signin"><button className='btn ms-2'><IoPersonCircleOutline /> Sign In</button></Link> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;

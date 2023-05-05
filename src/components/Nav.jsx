import React from 'react';
import './Nav.css';
import logo from './images/DoorVerse.png';
const Nav = () => {
    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    <img src={logo} className='logoImg'></img>
                </div>
                <div className='middle'>
                    <ul className='nav-ul'><li className='nav-li'><a className='nav-link'>About</a></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><a className='nav-link'>Chapter</a></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><a className='nav-link'>Gallery</a></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><a className='nav-link active' >Buy NFT</a></li></ul>
                </div>
                <div className='social-nav'>
                    <div className="social-link">
                        <a href="#" target="blank" className="brands-link-nav"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" target="blank" className="brands-link-nav"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" target="blank" className="brands-link-nav"><i class="fa-brands fa-discord"></i></a>
                    </div>
                </div>
                <div className='menu-bar'><i class="fa-solid fa-bars"></i></div>
            </div>
        </>
    )
}
export default Nav;
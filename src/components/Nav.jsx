import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';
import logo from './images/doorduneslogo.jpg';
import Gallery from './Gallery';
const Nav = () => {

    function Gallery() {
        const a=0;
            
        localStorage.setItem('name',a);
    }

    const [showNav,setNav] = useState(false);
    return (
        <>
            <div className='nav'>
                <div className='navlogo'>
                    <a href='/' className='logo-link'><img src={logo} className='logoImg'></img></a>
                </div>
                <div className='middle'>
                    <ul className='nav-ul'><li className='nav-li'><NavLink className='nav-link' to='/'>Home</NavLink></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><NavLink className='nav-link' to='/about'>About</NavLink></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><NavLink className='nav-link' to='/chapters'>Chapter</NavLink></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><NavLink className='nav-link' to='/gallery' onClick={Gallery}>Gallery</NavLink></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><a className='nav-link' href="https://opensea.io/collection/doordunes">Buy NFT</a></li></ul>
                </div>
                <div className='social-nav'>
                    <div className="social-link">
                        <a href="https://www.instagram.com/doordunesnft/?igshid=MzRlODBiNWFlZA%3D%3D" target="blank" className="brands-link-nav"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://twitter.com/doordunesnft?s=08" target="blank" className="brands-link-nav"><i class="fa-brands fa-twitter" ></i></a>
                        <a href="https://discord.gg/YHfPE5dg" target="blank" className="brands-link-nav"><i class="fa-brands fa-discord"></i></a>
                    </div>
                </div>
                <div className='menu-bar' onClick={()=>{setNav(!showNav)}}>{!showNav?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-xmark"></i>}</div>
            </div>
            <div className='hamburger-menu' style={{display:showNav?'flex':'none'}}>
                    <div className='hamburger-links'>
                        <ul className='nav-ul ham-ul'><li className='nav-li ham-li' onClick={()=>{setNav(false)}}><NavLink className='nav-link ham-link' to='/'>Home</NavLink></li></ul>
                        <ul className='nav-ul ham-ul'><li className='nav-li ham-li' onClick={()=>{setNav(false)}}><NavLink className='nav-link ham-link' to='/about'>About</NavLink></li></ul>
                        <ul className='nav-ul ham-ul'><li className='nav-li ham-li' onClick={()=>{setNav(false)}}><NavLink className='nav-link ham-link' to='/chapters'>Chapter</NavLink></li></ul>
                        <ul className='nav-ul ham-ul'><li className='nav-li ham-li' onClick={()=>{setNav(false)}}><NavLink className='nav-link ham-link' to='/gallery'>Gallery</NavLink></li></ul>
                        <ul className='nav-ul ham-ul'><li className='nav-li ham-li' onClick={()=>{setNav(false)}}><a className='nav-link ham-link active' >Buy NFT</a></li></ul>
                    </div>
                    <div className='hamburger-social'>
                        <div className="social-link ham-social-link">
                            <a href="#" target="blank" className="brands-link-nav ham-brands-link"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#" target="blank" className="brands-link-nav ham-brands-link"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" target="blank" className="brands-link-nav ham-brands-link"><i class="fa-brands fa-discord"></i></a>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Nav;
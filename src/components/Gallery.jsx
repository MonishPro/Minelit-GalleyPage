import React from "react";
import Main from './Main';
import GalleryTop from './GalleryTop';
import Footer from './Footer';
import logo from "./images/DoorVerse.png"

const Gallery = () => {
    return (
        <>
            <GalleryTop />
            <Main />
            <Footer mail = 'dvofficial@doorversenft.com'/>
        </>
    )
}

export default Gallery;
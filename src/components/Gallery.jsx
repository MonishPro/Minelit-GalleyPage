import React from "react";
import './Gallery.css';

const Gallery = () => {
    return (
        <>
            <div className='banner-container'>

                <div className="banner">
                    <div className="banner-img">
                        <div className="banner-text">
                            <h2>Open The Door<br /> To The Collection</h2>
                            <a href="#">March To OpenSea</a>
                        </div>
                    </div>
                </div>
                <div className="search-id">
                <i class="fa-solid fa-bars"></i>
                    <div class="wrap">
                        <div class="search">
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                            <input type="text" class="searchTerm" placeholder="Search By ID" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gallery;
import React, { useState } from "react";
import Footer from "./Footer";
import './css/Gallery.css';
import './css/Main.css';

import image from './images/category.png'
import Card from './Card';
import CardData from './CardData';
import { type } from "@testing-library/user-event/dist/type";
import { queries } from "@testing-library/react";


const Gallery = () => {
    var bool = "false";
    var a = localStorage.getItem('name');

    if (a === "1") {
        bool = true;
    }
    else {
        bool = false;
    }

   

    var getFilteredItems = (query, CardData) => {
        if (!query) {
            return CardData;
        }
        return CardData.filter(data => data.title.toLowerCase().includes(query.toLowerCase()));
    }

 
    var [query, setQuery] = useState('');
    var FilteredItems = getFilteredItems(query, CardData)

    return (
        <>
            <div className='banner-container'>

                <div className="banner ">
                    <div className="banner-img">
                        <div className="banner-text">
                            <h2>Open The Door<br /> To The Collection</h2>
                            <a href="https://opensea.io/" target="blank">March To OpenSea</a>
                        </div>
                    </div>
                </div>
                <div className="search-id">
                    <i class="menu fa-solid fa-bars"></i>
                    <div class="wrap">
                        <div class="search">
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                            <input type="text" onChange={e => setQuery(e.target.value)} class="searchTerm" placeholder="Search By ID" />
                        </div>
                    </div>
                </div>

            </div>
            <div class="whole">
                <div class="twocontainer">
                    <div className="main-left main-container">
                        <div className="category">
                            <img className="category-icon" src={image} />
                            <p className="category-title">Category</p>
                        </div>
                        <div className="category">
                            <p className="attribute-title">Attributes</p>
                        </div>
                        {/* <div className="example">
                            <p className="example-title">All</p>
                            <input type="checkbox" id="ancient" defaultChecked={gallery} onChange={e => setQuery("Space")} />
                        </div> */}
                        <div className="example">
                            <p className="example-title">Ancient</p>
                            <input type="checkbox" id="ancient" defaultChecked={bool}/>
                            
                        </div>
                        {/* <div className="example">
                            <p className="example-title">Space</p>
                            <input type="checkbox" id="checkbox" value="" onChange={e => setQuery("Space")}  />
                        </div> */}
                        {/*
                        <div className="example">
                            <p className="example-title">Example</p>
                            <input type="checkbox" id="checkbox" value="" />
                        </div>
                        <div className="example">
                            <p className="example-title">Example</p>
                            <input type="checkbox" id="checkbox" value="" />
                        </div> */}
                    </div>
                    <div className="main-right">
                        <div class="container-fluid">
                            <div class="row g-3">
                                {FilteredItems.map((val) => {
                                    return (
                                        <Card
                                            imgSrc={val.imgSrc}
                                            title={val.title}
                                            id={val.id}
                                            link={val.link}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery;
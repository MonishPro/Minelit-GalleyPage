import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import './css/Gallery.css';
import './css/Main.css';

import image from './images/category.png'
import Card from './Card';
import CardData from './CardData';

const Gallery = () => {

    const [query, setQuery] = useState('');
    const [status1, setSatus1] = useState(false);
    const [status2, setSatus2] = useState(false);
    const handle = () => {
        if (!status1 && !status2) {
            setQuery('');
        }
    }
    useEffect(() => {
        if (!status1 && !status2) {
            setQuery('');
        }
    }, [query, setQuery]);
    var getFilteredItems = (query, CardData) => {
        if (!query) {
            return CardData;
        }
        return CardData.filter(data => data.title.toLowerCase().includes(query.toLowerCase()));
    }

    const handleCheckbox1 = (event) => {
        setSatus1(event.target.checked);

        if (!status1 && !status2) {
            setQuery('door');
        }
        else {
            setQuery('');
        }
    }

    const handleCheckbox2 = (event) => {
        setSatus2(event.target.checked);
        if (!status2 && !status1) {
            setQuery('space');
        }
        else {
            setQuery('');
        }
    }

    var FilteredItems = getFilteredItems(query, CardData);

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
                        <div className="example">
                            <p className="example-title">Ancient</p>
                            <input type="checkbox" id="ancient" onClick={handleCheckbox1} />
                        </div>
                        <div className="example">
                            <p className="example-title">Space</p>
                            <input type="checkbox" id="space" onClick={handleCheckbox2} />
                        </div>
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
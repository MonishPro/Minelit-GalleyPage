import React from "react";
import './css/Main.css';
import image from './images/category.png'
import Card from './Card';
import CardData from './CardData';

const Main = () => {
    return (
        <>
            <div class="container-fluid whole">
                <div class="twocontainer">
                    <div className="left container">
                        <div className="category">
                            <img className="category-icon" src={image} />
                            <p className="category-title">Category</p>
                        </div>
                        <div className="category">
                            <p className="attribute-title">Attributes</p>
                        </div>
                        <div className="example">
                            <p className="example-title">Example</p>
                            <input type="checkbox" id="checkbox" value="" />
                        </div>
                        <div className="example">
                            <p className="example-title">Example</p>
                            <input type="checkbox" id="checkbox" value="" />
                        </div>
                        <div className="example">
                            <p className="example-title">Example</p>
                            <input type="checkbox" id="checkbox" value="" />
                        </div>
                        <div className="example">
                            <p className="example-title">Example</p>
                            <input type="checkbox" id="checkbox" value="" />
                        </div>
                    </div>
                    <div className="right container">
                        <div class="container-fluid">
                            <div class="row g-3">
                                {CardData.map((val) => {
                                    return (
                                        <Card
                                            imgSrc={val.imgSrc}
                                            title={val.title}
                                            link={val.link}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
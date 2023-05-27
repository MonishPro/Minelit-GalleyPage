import React from "react";
import ancient_img from './images/ancient_image.png';
import article_img from './images/chapter1.png';
import './css/Ancient.css';
import './css/Main.css';
import Card from './Card';
import DoorData from './DoorData';

const Ancient = () => {
    return (
        <>
            <div className="container-fluid ancient_container" id="top">
                <img className="ancient_img" src={ancient_img} alt="image" />
            </div>
            <div className="article container">
                <div className="article_top">
                    <img className="article_img" alt="image" src={article_img} />
                    <div className="article_right">
                        <h2 className="article_title">Ancient</h2>
                        <p className="article_text">A long time ago, in a remote region of the globe, there lived an elderly man. His name was Arthur, and he led a calm, unassuming life amid the verdant and stunning countryside. One day, Arthur was taking a stroll through the woods when he came across a strange entrance. The door was old and corroded, and it was made of an unfamiliar metal that Arthur had never seen before. The door was locked when he attempted to open it.
                            Although Arthur tried for weeks to figure out how to open the door, no matter what he did, it remained stuck. Just as he was about to give up, he saw a little keyhole in the door's middle.
                        </p>
                    </div>
                </div>
                <div className="article_bottom">
                    <p className="article_text">An antique key that he had discovered while excavating in his garden was taken out of his pocket. He turned the key after placing it in the keyhole. Unexpectedly, the door squeaked open. Arthur entered the unknown and emerged in a sizable chamber. A pedestal with a bright orb perched atop it stood in the middle. As Arthur slowly drew nearer, he became aware that the sphere was pulsing with a primordial power. He gently touched the orb and felt a surge of energy rush through his body. He realized that this was an ancient door, one that had been sealed away for centuries. He slowly took the orb from the pedestal and held it close to his chest. For years, he kept the orb close by and never told anyone about it, but he knew that it was a powerful object that could be used for good. To this day, the door remains closed, but the story of the ancient door lives on.
                    </p>
                </div>
            </div>
            <div className="totaldoor">
                <p className="totaltext">Total Dooors - 50</p>
                <p className="totaltext">Launch Date - 20/05/2023</p>
            </div>
            <div className="ancient-card">
                <p className="card-door">Ancient Doors</p>
                <div className="article-right container">
                    <div class="container-fluid">
                        <div class="row g-3">
                            {DoorData.map((val) => {
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
                <a className="card-btn" href="#">Buy Them</a>
            </div>
        </>
    )
}
export default Ancient;
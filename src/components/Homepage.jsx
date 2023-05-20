import React from "react";
import './css/Homepage.css';


import img1 from "./part1images/1440_398.png"
import img2 from "./part1images/door3.png"
import img3 from "./part1images/door2.png"
import img4 from "./part1images/door1.png"
import img5 from "./gridimages/image8.png"
import img6 from "./gridimages/seashellsdoor.png"
import img7 from "./gridimages/Ancient.png"
import img8 from "./gridimages/Space.png"
import img9 from "./gridimages/Sandy.png"
import img10 from "./logos/mail.png"
import img11 from "./logos/instagram.png"
import img12 from "./logos/twitter.png"
import img13 from "./logos/discord.png"
import img14 from "./part1images/D2.png"

const Homepage = () => {
    return (
        <>
            <div class="contain">
                <img src={img1} class="images" />
                <div class="knock">
                    KNOCK<br />
                    KNOCK<br />
                    <div class="push">WHO'S THERE?</div>
                </div>
            </div>

            <div class="abe">
                WELCOME TO THE<br />
                DOOR VERSE
            </div>
            <div class="abb">
                <p>
                    Welcome to DoorVerse, where art and doors converge in a captivating
                    collection of<br />
                    NFTs.Step into a world where the ordinary becomes exceptional and we
                    explore the<br />
                    artist dimensions of doors through digitals masterprices. the DoorVerse
                    is a place<br />
                    where art and doors interwine in a realm of boundless creativity.
                </p>
            </div>

            <div class="dooriimg">
                <img class="img1" src={img2} />
                <img class="img2" src={img3} />
                <img class="img3" src={img4} />
            </div>

            <div class="megacontainer">
                <div class="firstimage">
                    <img class="door100img" src={img5} />
                    <img class="door100" src={img6} />
                    <div class="marchtoopensea">
                        <a className="march" href="https://opensea.io/">Open the Door <br />To the Collection</a>
                    </div>
                    <div class="whitebox"><p className="whiteboxp">March to Open Sea</p></div>
                </div>

                <div class="chapters">
                    <div class="contact"></div>
                    <div class="textbold">Chapters</div>
                    <div class="home-container">
                        <div><img class="gridimg1" src={img7} /></div>
                        <div class="box2">
                            <img class="gridimg2" src={img8} />
                        </div>
                        <div><img class="gridimg3" src={img9} /></div>
                    </div>
                    <div class="content">
                        Your Bored Ape doubles as your Yacht Club membership card, and grants
                        <div>
                            access to members-only benefits, the first of which is access to THE
                        </div>
                        BATHROOM, a collaborative graffiti board. Future areas and perks can
                        be
                        <div>unlocked by the community through roadmap activation</div>
                    </div>
                    <div class="buttonrow">
                        <input type="button" value="Explore All Chapters" />
                    </div>

                    <div class="megacontainer2">
                        <div class="container0"></div>
                        <div class="container2">
                            <div id="squirrelnft">DoorVerse NFT</div>
                            <div id="emailaddress">
                                <img
                                    src={img10}
                                    class="mail"
                                    width="35px"
                                    height="30px"
                                    style={{ position: 'relative', top: 0, left: -2 }}
                                />
                                dvofficial@doorversenft.com
                            </div>
                            <div id="text">Get Latest Update Here</div>
                        </div>
                        <div class="whiteline">
                            <div className="home-social">
                                <a href="#" target="blank" className="brands-link"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" target="blank" className="brands-link"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" target="blank" className="brands-link"><i class="fa-brands fa-discord"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="container3">
                        <img
                            src={img14}
                            width="60px"
                            height="60px"
                            style={{ position: 'relative', top: 16, left: 25 }}
                        />
                        <p class="ends">2023 Squirrel. All Rights Reserved.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Homepage;
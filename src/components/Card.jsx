import React, { useEffect } from 'react';

const Card = (props) => {

    // const a=localStorage.getItem('name');
    // if (a=="1"){
    //     document.getElementById('card1').displ
    // }

    useEffect(() => {

        document.addEventListener('contextmenu', handleRightClick);
        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
        }
    }, [])
    const handleRightClick = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <div class="col-12 col-md-6 col-lg-4 col-sm-6">
                <div class="card">
                    <div className="inner">
                        <a className='card-link' href='https://opensea.io/' target='blank'><img src={require(`./galleryimages/${props.imgSrc}.png`)} draggable="false" class="card-img-top" alt="Image" /></a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
import React, { useEffect } from 'react';

const Card = (props) => {
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
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div className="inner">
                        <a className='card-link' href='https://opensea.io/' target='blank'><img src={require(`./images/${props.imgSrc}.png`)} id='image' draggable="false" class="card-img-top" alt="Image" /></a>

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
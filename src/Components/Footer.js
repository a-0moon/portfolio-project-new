import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const handleRate = () => {

    }
    return (
        <div className='footer-page'>
            <div className="App">
                <h1>Rate the Website!</h1>
                <div className="rating">
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <i
                                    className={
                                        ratingValue <= (hover || rating) ? 'fas fa-star' : 'far fa-star'
                                    }
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                ></i>
                            </label>
                        );
                    })}
                </div>
                <p>{!rating ? 'Rate my website' : `You rated the website with ${rating} stars`}</p>


            </div>
            <div className="footer__copyrights">
                <small>&copy; Diana Ahmadi. All rights reserved.</small>
            </div>
        </div>
    );
}

export default Footer;


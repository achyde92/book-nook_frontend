import React, { useState } from 'react';

const Book = ({imageURL, title, author, description, activeInedex: activeIndex, setActiveIndex, index}) => {
    const [isFavorite, setIsFavortite] = useState(false);

    const handleFavorite = (e) => {
        setIsFavortite(!isFavorite);
    };

    const handleActive = () => {
        setActiveIndex(index)
    };

    const btnClass = isFavorite ? "btn btn-success" : "btn btn-secondary"
    const activeClass = index === activeIndex ? "active-movie" : ""

    return (
    <div onClick={handleActive} className={`music-item ${activeClass}`}>
        <p>
        {imageURL}
        {title}
        {author}
        {description}
        </p>
        <button className= {btnClass} onClick={handleFavorite}>favorite</button>
    </div> 
    );
}

export default Book;
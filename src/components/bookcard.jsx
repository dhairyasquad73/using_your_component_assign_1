// cart/BookCard.jsx
import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ title, author, price, coverImage }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-64 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
                src={coverImage}
                alt={title}
                className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2 text-gray-800 justify-center">{title}</h2>
            <p className="text-gray-600 justify-center">by {author}</p>
            <p className="text-green-600 font-semibold mt-1 justify-center">${price}</p>
        </div>
    );
};

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
};

export default BookCard;

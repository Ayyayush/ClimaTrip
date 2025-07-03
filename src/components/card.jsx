import React from 'react';
import { Star, Heart } from 'lucide-react';

function Card({ image, title, description, rating, price, onLike }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={onLike}
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            {rating}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-bold">${price}</span>
          <button className="text-sm text-blue-600 hover:underline">View More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

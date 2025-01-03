import React from 'react';
import { Heart, Clock, Star, Filter, ChevronDown, MoreVertical } from 'lucide-react';

const RestaurantListings = () => {
  const topRatedRestaurants = [
    {
      name: "Domino's Pizza",
      rating: 4.4,
      time: "20-25 mins",
      categories: "Pizzas, Italian, Pastas",
      offer: "ITEMS AT ₹89",
      freeDelivery: true,
      theme: "from-blue-500 to-purple-500"
    },
    {
      name: "McDonald's",
      rating: 4.5,
      time: "10-15 mins",
      categories: "Burgers, Beverages, Cafe",
      offer: "ITEMS AT ₹99",
      freeDelivery: true,
      theme: "from-red-500 to-orange-500"
    },
    {
      name: "Bikanervala",
      rating: 4.5,
      time: "20-25 mins",
      categories: "North Indian, Fast Food",
      offer: "50% OFF",
      freeDelivery: true,
      theme: "from-green-500 to-teal-500"
    }
  ];

  const exploreRestaurants = [
    {
      name: "Wow! China",
      rating: "4.2",
      reviews: "365",
      time: "35-40 mins",
      categories: "Tibetan, Chinese, Asian, Snacks",
      location: "Alfa One Mall • 1.7 km",
      badge: "Best In Veg Noodles",
      offer: "ITEMS AT ₹129",
      theme: "from-yellow-500 to-orange-500"
    },
    {
      name: "The Belgian Waffle Co.",
      rating: "4.6",
      reviews: "5.6K",
      time: "20-25 mins",
      categories: "Waffle, Desserts, Ice Cream, Beverages",
      location: "Navrangpura • 2.0 km",
      badge: "Best In Desserts",
      offer: "20% OFF",
      offerSubtext: "UPTO ₹50",
      theme: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        TOP RATED NEAR YOU
      </h2>
      
      <div className="flex gap-4 overflow-x-auto mb-6 pb-2">
        {topRatedRestaurants.map((restaurant, index) => (
          <div key={index} className="min-w-[240px] relative transform transition-all duration-300 hover:scale-105">
            <div className="relative group">
              <div className={`w-full h-40 rounded-lg overflow-hidden bg-gradient-to-br ${restaurant.theme}`}>
                <img
                  src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f"
                  alt={restaurant.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-90 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-2 left-2 bg-white text-red-500 px-2 py-1 rounded-md text-sm flex items-center gap-1 transform transition-transform duration-300 hover:scale-105">
                <span className="text-xs font-semibold">one</span>
                <span className="animate-pulse">Free Delivery</span>
              </div>
              <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg group">
                <Heart className="w-5 h-5 transition-colors duration-300 group-hover:text-red-500" />
              </button>
              <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-sm backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
                {restaurant.offer}
              </div>
            </div>
            <div className="mt-2 p-2">
              <h3 className="font-semibold text-gray-800 transition-colors duration-300 hover:text-purple-600">
                {restaurant.name}
              </h3>
              <div className="flex items-center gap-2 text-sm mt-1">
                <div className="flex items-center bg-green-600 text-white px-1 rounded transition-transform duration-300 hover:scale-105">
                  <Star className="w-3 h-3 fill-white" />
                  <span className="ml-0.5">{restaurant.rating}</span>
                </div>
                <span>•</span>
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{restaurant.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate mt-1 hover:text-gray-800">
                {restaurant.categories}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-4 overflow-x-auto">
        {["Filter", "Sort by", "10 Mins Delivery", "Cuisines"].map((item, index) => (
          <button 
            key={index}
            className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-300 hover:bg-purple-50"
          >
            {item === "Filter" && <Filter className="w-4 h-4" />}
            {item === "Sort by" && <ChevronDown className="w-4 h-4" />}
            <span className="text-sm whitespace-nowrap">{item}</span>
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-4 animate-pulse">Top 2294 restaurants to explore</p>

      <div className="space-y-4">
        {exploreRestaurants.map((restaurant, index) => (
          <div key={index} className="bg-white rounded-lg p-3 flex gap-4 transform transition-all duration-300 hover:shadow-xl hover:scale-102">
            <div className="relative min-w-[120px] group">
              <div className={`w-full h-28 rounded-lg overflow-hidden bg-gradient-to-br ${restaurant.theme}`}>
                <img
                  src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f"
                  alt={restaurant.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-90 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <button className="absolute top-2 right-2 bg-white/80 p-1 rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg group">
                <Heart className="w-4 h-4 transition-colors duration-300 group-hover:text-red-500" />
              </button>
              <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                <div className="animate-pulse">{restaurant.offer}</div>
                {restaurant.offerSubtext && (
                  <div className="text-[10px] opacity-80">{restaurant.offerSubtext}</div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="bg-green-100 text-green-700 text-xs px-1 rounded transform transition-all duration-300 hover:scale-105">
                      ✓ {restaurant.badge}
                    </div>
                  </div>
                  <h3 className="font-semibold transition-colors duration-300 hover:text-purple-600">
                    {restaurant.name}
                  </h3>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <div className="flex items-center bg-green-600 text-white px-1 rounded transition-transform duration-300 hover:scale-105">
                  <Star className="w-3 h-3 fill-white" />
                  <span className="ml-0.5">{restaurant.rating}</span>
                </div>
                <span className="text-gray-500">({restaurant.reviews})</span>
                <span>•</span>
                <span>{restaurant.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate mt-1 hover:text-gray-800">
                {restaurant.categories}
              </p>
              <p className="text-sm text-gray-600 mt-1">{restaurant.location}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-red-500 font-semibold transform transition-all duration-300 hover:scale-105">
                  one LITE
                </span>
                <span className="text-xs text-green-600 font-medium animate-pulse">
                  FREE DELIVERY
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListings;
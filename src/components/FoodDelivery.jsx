import { useState } from "react";
import { Search, Heart, Clock, Star, ChevronRight } from "lucide-react";

const FoodDelivery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const restaurants = [
    {
      name: "The Black Chimney",
      time: "25-30 mins",
      rating: 4.1,
      type: "Biryani",
      discount: "₹125 OFF",
      theme: "from-orange-500 to-red-500"
    },
    {
      name: "Burger Farm",
      time: "25-30 mins",
      rating: 4.5,
      type: "Burgers",
      discount: "₹125 OFF",
      theme: "from-blue-500 to-purple-500"
    },
    {
      name: "New Waffle House",
      time: "30-35 mins",
      rating: 4.3,
      type: "Waffles",
      discount: "₹125 OFF",
      theme: "from-pink-500 to-rose-500"
    },
  ];

  const categories = [
    { name: "Cakes & Desserts", icon: "🎂", theme: "from-pink-400 to-red-400" },
    { name: "Pizzas", icon: "🍕", theme: "from-yellow-400 to-orange-400" },
    { name: "Chinese", icon: "🥢", theme: "from-red-400 to-rose-400" },
    { name: "Paratha", icon: "🫓", theme: "from-green-400 to-teal-400" },
    { name: "Rolls", icon: "🌯", theme: "from-blue-400 to-indigo-400" },
  ];

  const bottomCategories = [
    { name: "Gift Hampers", icon: "🎁", theme: "from-purple-400 to-indigo-400" },
    { name: "North Indian", icon: "🫔", theme: "from-orange-400 to-red-400" },
    { name: "Burgers", icon: "🍔", theme: "from-green-400 to-emerald-400" },
    { name: "Biryani", icon: "🍚", theme: "from-yellow-400 to-amber-400" },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex items-center group cursor-pointer">
          <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Home
          </h1>
          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-1.5 text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-red-500/30 hover:scale-105">
            Buy One
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full cursor-pointer transition-transform hover:scale-110" />
        </div>
      </header>

      <div className="p-4">
        <div className="flex items-center bg-white rounded-full border border-gray-200 p-3 shadow-sm transition-all hover:shadow-md group">
          <Search className="w-5 h-5 text-gray-400 transition-transform group-hover:rotate-12" />
          <input
            type="text"
            placeholder="Search for 'Christmas Special'"
            className="ml-2 flex-1 outline-none"
          />
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-red-600 to-rose-500 rounded-xl p-6 text-white relative overflow-hidden transform transition-all hover:scale-102 group">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold animate-pulse">Flat 50% OFF</h2>
            <p className="text-sm opacity-90 mt-2">
              The unbeatable deal of the season is up for grabs!
            </p>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full mt-4 font-medium transition-all hover:shadow-lg hover:shadow-white/30 hover:scale-105">
              ORDER NOW
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">
            <img
              src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f"
              alt="Food items"
              className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6 transform transition-all hover:scale-102">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl animate-bounce">🎁</span>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            ENJOY YOUR WELCOME OFFER!
          </h3>
        </div>
        <p className="text-sm text-gray-600 animate-pulse">
          Get flat ₹125 off on your next order
        </p>
      </div>

      <div className="px-4 flex gap-4 overflow-x-auto pb-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="min-w-[200px] bg-white rounded-xl shadow-md transition-all hover:shadow-xl hover:scale-105">
            <div className="relative group">
              <div className={`w-full h-32 rounded-t-xl overflow-hidden bg-gradient-to-br ${restaurant.theme}`}>
                <img
                  src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f"
                  alt={restaurant.name}
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full transition-all hover:bg-white hover:shadow-lg group">
                <Heart className="w-5 h-5 transition-colors duration-300 group-hover:text-red-500" />
              </button>
              <div className="absolute bottom-2 left-2 bg-black/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm transition-all hover:scale-105">
                {restaurant.discount}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold transition-colors hover:text-purple-600">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm mt-2">
                <div className="flex items-center bg-green-500 text-white px-2 py-0.5 rounded-full transition-transform hover:scale-105">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="ml-1">{restaurant.rating}</span>
                </div>
                <span>•</span>
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{restaurant.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 hover:text-gray-800">{restaurant.type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-6">
        <h3 className="font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          GAURANG, WHAT'S ON YOUR MIND?
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.theme} rounded-full flex items-center justify-center text-2xl mb-2 shadow-lg transition-all hover:shadow-xl hover:scale-110 cursor-pointer`}>
                <span className="transition-transform group-hover:scale-125 duration-300">
                  {category.icon}
                </span>
              </div>
              <p className="text-sm font-medium transition-colors group-hover:text-purple-600">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 grid grid-cols-4 gap-4 pb-6">
        {bottomCategories.map((category, index) => (
          <div key={index} className="text-center group">
            <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.theme} rounded-full flex items-center justify-center text-2xl mb-2 shadow-lg transition-all hover:shadow-xl hover:scale-110 cursor-pointer`}>
              <span className="transition-transform group-hover:scale-125 duration-300">
                {category.icon}
              </span>
            </div>
            <p className="text-sm font-medium transition-colors group-hover:text-purple-600">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDelivery;
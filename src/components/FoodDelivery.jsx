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
    },
    {
      name: "Burger Farm",
      time: "25-30 mins",
      rating: 4.5,
      type: "Burgers",
      discount: "₹125 OFF",
    },
    {
      name: "New Waffle House",
      time: "30-35 mins",
      rating: 4.3,
      type: "Waffles",
      discount: "₹125 OFF",
    },
  ];

  const categories = [
    { name: "Cakes & Desserts", icon: "🎂" },
    { name: "Pizzas", icon: "🍕" },
    { name: "Chinese", icon: "🥢" },
    { name: "Paratha", icon: "🫓" },
    { name: "Rolls", icon: "🌯" },
  ];

  const bottomCategories = [
    { name: "Gift Hampers", icon: "🎁" },
    { name: "North Indian", icon: "🫔" },
    { name: "Burgers", icon: "🍔" },
    { name: "Biryani", icon: "🍚" },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Home</h1>
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 text-white bg-red-500 rounded-md">
            Buy One
          </button>
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>
      </header>

      <div className="p-4">
        <div className="flex items-center bg-white rounded-lg border p-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for 'Christmas Special'"
            className="ml-2 flex-1 outline-none"
          />
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-red-600 rounded-lg p-4 text-white relative overflow-hidden">
          <h2 className="text-2xl font-bold">Flat 50% OFF</h2>
          <p className="text-sm opacity-90">
            The unbeatable deal of the season is up for grabs!
          </p>
          <button className="bg-white text-red-600 px-4 py-1 rounded-md mt-2 font-medium">
            ORDER NOW
          </button>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPMT_qirl5oZ-GB9-Y-FtkU-9CcxV6qLr6YHXKX=s1360-w1360-h1020"
            alt="Food items"
            className="absolute right-0 top-0 h-full"
          />
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🎁</span>
          <h3 className="font-semibold">ENJOY YOUR WELCOME OFFER!</h3>
        </div>
        <p className="text-sm text-gray-600">
          Get flat ₹125 off on your next order
        </p>
      </div>

      <div className="px-4 flex gap-4 overflow-x-auto pb-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="min-w-[200px] bg-white rounded-lg shadow">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPMT_qirl5oZ-GB9-Y-FtkU-9CcxV6qLr6YHXKX=s1360-w1360-h1020"
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <Heart className="absolute top-2 right-2 w-6 h-6 text-white" />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-sm">
                {restaurant.discount}
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-semibold">{restaurant.name}</h3>
              <div className="flex items-center gap-2 text-sm mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{restaurant.rating}</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>{restaurant.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{restaurant.type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-6">
        <h3 className="font-semibold mb-4">GAURANG, WHAT'S ON YOUR MIND?</h3>
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-100 border-slate-950 border-2 rounded-full flex items-center justify-center text-2xl mb-2">
                {category.icon}
              </div>
              <p className="text-sm">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 grid grid-cols-4 gap-4">
        {bottomCategories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="border-slate-950 border-2 w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2">
              {category.icon}
            </div>
            <p className="text-sm">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDelivery;

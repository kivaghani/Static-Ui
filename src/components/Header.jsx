import React from 'react';
import { Search, Heart, Mic, User, Home, Clock, Star } from 'lucide-react';

const Header = () => {
  const quickLinks = [
    { name: "FLASH SALE", icon: "🔥", label: "Flat 50% Off" },
    { name: "Cakes & More", icon: "🍰", label: "Special Offers" },
    { name: "Party Delights", icon: "🍽️", label: "Party Specials" },
    { name: "Food in 10 Mins", icon: "⚡", label: "Bolt" }
  ];

  const restaurants = [
    {
      name: "The Black Chimney",
      rating: 4.1,
      time: "25-30 mins",
      type: "Biryani",
      offer: "₹125 OFF"
    },
    {
      name: "Burger Farm",
      rating: 4.5,
      time: "20-25 mins",
      type: "Burgers",
      offer: "₹125 OFF"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 min-h-screen">
      <div className="p-4 pt-2">
        <div className="flex justify-between items-center mb-4 transition-transform hover:scale-102">
          <div className="flex items-center text-white group">
            <Home className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            <div>
              <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                Home
              </h1>
              <p className="text-xs opacity-80">Samras Boys Hostel, 132 Feet Ring Ro...</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm transition-all hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105">
              Buy one
            </button>
            <User className="w-6 h-6 text-white transition-transform hover:scale-110 cursor-pointer" />
          </div>
        </div>

        <div className="relative mb-4 group">
          <div className="flex items-center bg-white rounded-full px-4 py-2 transition-all shadow-lg hover:shadow-xl group-hover:scale-102">
            <Search className="w-5 h-5 text-gray-400 transition-transform group-hover:rotate-12" />
            <input
              type="text"
              placeholder="Search for 'Sweets'"
              className="ml-2 flex-1 outline-none"
            />
            <Mic className="w-5 h-5 text-gray-400 transition-transform hover:scale-110 cursor-pointer" />
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 mb-4 overflow-hidden transform transition-all hover:scale-102 hover:shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center text-yellow-300 mb-2 animate-bounce">
              <span className="text-2xl mr-2">✨</span>
              <h2 className="text-2xl font-cursive">Merry Christmas</h2>
            </div>
            <button className="px-4 py-1 bg-yellow-400 text-red-900 rounded-full text-sm font-medium transition-all hover:bg-yellow-300 hover:scale-105">
              Order Now
            </button>
            <p className="text-white mt-2 text-sm animate-pulse">Get Flat ₹200 OFF</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {quickLinks.map((link, index) => (
            <div key={index} className="text-center transform transition-all hover:scale-110">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3 mb-2 shadow-lg hover:shadow-xl transition-all">
                <div className="text-2xl mb-1 animate-bounce">{link.icon}</div>
                <p className="text-white text-xs">{link.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
          <p className="text-xs text-white opacity-70">POWERED BY</p>
          <div className="flex gap-4">
            <div className="h-5 w-16 bg-white/20 rounded transition-all hover:bg-white/30"></div>
            <div className="h-5 w-16 bg-white/20 rounded transition-all hover:bg-white/30"></div>
            <div className="h-5 w-16 bg-white/20 rounded transition-all hover:bg-white/30"></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl p-4 mb-6 relative overflow-hidden transform transition-all hover:scale-102">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-1 animate-pulse">Flat ₹200 OFF</h3>
            <p className="text-sm text-white opacity-80">on Party Delights</p>
            <p className="text-xs text-white opacity-80">to celebrate Christmas!</p>
            <button className="mt-2 px-4 py-1 bg-white text-indigo-600 rounded-full text-sm font-medium transition-all hover:bg-gray-100 hover:scale-105">
              ORDER NOW
            </button>
          </div>
        </div>

        <div className="mb-4 transform transition-all hover:scale-102">
          <div className="flex items-center gap-2 text-white mb-2">
            <span className="text-2xl animate-bounce">🎁</span>
            <div>
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                ENJOY YOUR WELCOME OFFER!
              </h3>
              <p className="text-sm opacity-80">Get flat ₹125 off on your next order</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="min-w-[200px] bg-white rounded-xl transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="relative group">
                <div className="w-full h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl"></div>
                <div className="absolute top-2 left-2 bg-white px-2 py-0.5 rounded text-xs text-red-500 font-medium">
                  one LITE
                </div>
                <Heart className="absolute top-2 right-2 w-6 h-6 text-white transition-transform hover:scale-125 cursor-pointer" />
                <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {restaurant.offer}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{restaurant.name}</h3>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <div className="flex items-center bg-green-600 text-white px-1 rounded">
                    <Star className="w-3 h-3 fill-white" />
                    <span className="ml-0.5">{restaurant.rating}</span>
                  </div>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{restaurant.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{restaurant.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
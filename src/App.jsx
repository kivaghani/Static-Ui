import React from 'react'
import FoodDelivery from './components/FoodDelivery'
import RestaurantListings from './components/RestautantList'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      {/* <FoodDelivery/> */}
      <Header/>
      <RestaurantListings/>
    </div>
  )
}

export default App

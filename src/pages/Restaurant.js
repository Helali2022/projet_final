import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RestaurantCard from '../components/Card'
import RestaurantModal from '../components/Modal'
import '../styles/restaurant.css'

const Restaurant = () => {
  const restaurantList = useSelector(state => state.restaurant)
  const [show, setShow] = useState(false);
  console.log(restaurantList)

  return (
    <div >
      <div className='title-container'>
        <h1 style={{ textAlign: 'center' }}>Les Meilleurs Restaurants   </h1>
        <button style={{ margin: '0 auto' }} onClick={() => setShow(true)}>Add Plan</button>
      </div>
      <div className='restaurant-container'>
        {restaurantList.map((el, i) => <RestaurantCard type={"restaurant"} element={el} key={i} />)}
      </div>
      {show && <RestaurantModal type={"restaurant"} setShow={setShow} />}
    </div>
  )
}

export default Restaurant
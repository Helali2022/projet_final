import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import HotelCard from '../components/Card'
import HotelModal from '../components/Modal'
import '../styles/restaurant.css'

const Hotel = () => {
  const restaurantList = useSelector(state => state.hotel)
  const [show, setShow] = useState(false);
  console.log(restaurantList)

  return (
    <div >
      <div className='title-container'>
        <h1 style={{ textAlign: 'center' }}>Les Meilleurs Hotels   </h1>
        <button style={{ margin: '0 auto' }} onClick={() => setShow(true)}>Add Plan</button>
      </div>
      <div className='restaurant-container'>
        {restaurantList.map((el, i) => <HotelCard type={"hotel"} element={el} key={i} />)}
      </div>
      {show && <HotelModal type={"hotel"} setShow={setShow} />}
    </div>
  )
}

export default Hotel
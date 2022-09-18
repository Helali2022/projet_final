import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import GymCard from '../components/Card'
import GymModal from '../components/Modal'
import '../styles/restaurant.css'

const Gym = () => {
  const restaurantList = useSelector(state => state.gym)
  const [show, setShow] = useState(false);
  console.log(restaurantList)

  return (
    <div >
      <div className='title-container'>
        <h1 style={{ textAlign: 'center' }}>Les Meilleurs Gyms   </h1>
        <button style={{ margin: '0 auto' }} onClick={() => setShow(true)}>Add Plan</button>
      </div>
      <div className='restaurant-container'>
        {restaurantList.map((el, i) => <GymCard type={"gym"} element={el} key={i} />)}
      </div>
      {show && <GymModal type={"gym"} setShow={setShow} />}
    </div>
  )
}

export default Gym
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import RestaurantModal from '../components/Modal'
import { deleteRestaurant } from '../redux/restaurant/restaurantSlice'
import ReactStars from "react-rating-stars-component";


const RestaurantDetails = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate=useNavigate()
  const restaurant = location.state?.restaurant
  const type = location.state?.type

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  return (
    <div className='restaurant-details'>
      <div className='details-text'>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.ville}</h3>
        <p>{restaurant.address}</p>
        <h2>{restaurant.phone}</h2>
        <ReactStars size={35} count={5} edit={false} value={3}/>
        <div>
          <button onClick={() => {dispatch(deleteRestaurant({ id: restaurant.id }));navigate("/restaurant")}}>Supprimer</button>
          <button onClick={() => setShow(true)}>update</button>
          {show && <RestaurantModal type={type} element={restaurant} methode={"update"} setShow={setShow} />}
        </div>
      </div>
      <img src={restaurant.images} alt={restaurant.name} />
    </div>
  )
}

export default RestaurantDetails
import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


const RestaurantCard = ({ element, type }) => {
    return (<>
        <Link to={"/RestaurantDetails"} state={{ restaurant: element, type: type }}>
            <div className='restaurant-card'>
                <img src={element.images} alt="restaurant"></img>
                <div className="stars-container">
                    <ReactStars
                        edit={false}
                        value={element.rating} 
                        size={20}/>
                </div>
                <div className='card-text'>
                    <h3>{element.name}</h3>
                    <p>{element.address}</p>
                    <h4>{element.phone}</h4>
                </div>
            </div>
        </Link>

    </>
    )
}

export default RestaurantCard
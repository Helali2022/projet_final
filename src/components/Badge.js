import React from 'react'
import { Link } from 'react-router-dom'

const Badge = ({ el }) => {
    
    return (
        <Link to={"/RestaurantDetails"} state={{ restaurant: el }}>
            <div>
                <img src={el.images} alt="" />
                <h3>{el.name}</h3>
            </div>
        </Link>
    )
}

export default Badge
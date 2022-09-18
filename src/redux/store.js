import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './restaurant/restaurantSlice'
import gymReducer from "./gym/gymSlice";
import  hotelReducer  from './hotel/hotelSlice';


export const store = configureStore({
    reducer: {
        restaurant:restaurantReducer,
        gym:gymReducer,
        hotel:hotelReducer
    },
})
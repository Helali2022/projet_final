import { createSlice } from '@reduxjs/toolkit'
import { restaurant } from './restaurantData'

const initialState = restaurant

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            state = state.unshift(action.payload)
        },
        deleteRestaurant: (state, action) => {
            return state.filter(el => el.id !== action.payload.id)
        },
        updateRestaurant: (state, action) => {
            console.log(state.restaurant)
            return state.map(el => { console.log(el.id); return el.id === action.payload.id ? {...el,...action.payload} : el})
        },
    },
})

// Action creators are generated for each case reducer function
export const { addRestaurant, deleteRestaurant, updateRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer
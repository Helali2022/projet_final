import { createSlice } from '@reduxjs/toolkit'
import { hotel } from './hotelData'

const initialState = hotel

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        addHotel: (state, action) => {
            state = state.unshift(action.payload)
        },
        deleteHotel: (state, action) => {
            return state.filter(el => el.id !== action.payload.id)
        },
        updateHotel: (state, action) => {
            console.log(state.restaurant)
            return state.map(el => { console.log(el.id); return el.id === action.payload.id ? { ...el, ...action.payload } : el })
        },
    },
})

// Action creators are generated for each case reducer function
export const { addHotel, deleteHotel, updateHotel } = hotelSlice.actions

export default hotelSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { gym } from './gymData'

const initialState = gym

export const gymSlice = createSlice({
    name: 'gym',
    initialState,
    reducers: {
        addGym: (state, action) => {
            state = state.unshift(action.payload)
        },
        deleteGym: (state, action) => {
            return state.filter(el => el.id !== action.payload.id)
        },
        updateGym: (state, action) => {
            return state.map(el => { console.log(el.id); return el.id === action.payload.id ? { ...el, ...action.payload } : el })
        },
    },
})

// Action creators are generated for each case reducer function
export const { addGym, deleteGym, updateGym } = gymSlice.actions

export default gymSlice.reducer
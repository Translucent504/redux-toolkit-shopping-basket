import { createSlice, configureStore } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './state'
import { truncate } from 'fs/promises'

const basketSlice = createSlice({
    name: 'basket',
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, action) => {
            const productToUpdate = state.find((product) => product.id === action.payload)
            productToUpdate.added = true
        },
        remove: (state, action) => {
            const productToRemove = state.find((product) => product.id === action.payload)
            productToRemove.added = false
        }
    }
})

const store = configureStore({
    reducer: basketSlice.reducer
})

export const { add, remove } = basketSlice.actions

export { basketSlice, store }
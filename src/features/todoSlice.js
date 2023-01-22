import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        newItem: (state, action) => {
            return{ items: [...state.items, action.payload]}
        },
        removeItem: (state, action) => {
            let array = [...state.items]
            let index = action.payload
            if (index !== -1) {
                array.splice(index, 1)
                return {items: array}
            }
        },
        clearList: () => {
            return {items: []}
        },

    }, 
        
})

export const { newItem, removeItem, clearList} = todoSlice.actions
export default todoSlice.reducer
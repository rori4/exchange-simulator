import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
	name: "orderBook",
	initialState: {
		orders: [],
	},
	// Redux Toolkit allows us to write "mutating" logic in reducers. It
	// doesn't actually mutate the state because it uses the Immer library,
	// which detects changes to a "draft state" and produces a brand new
	// immutable state based off those changes
	reducers: {
		updateOrderBook: (state, action) => {
			state.orders = action.payload
		},
	},
})

export const { setAllOrders } = counterSlice.actions

// Thunks
export const fetchOrders = (amount) => (dispatch) => {
	//TODO:
}

// Selectors
export const selectCount = (state) => state.orders

// Default export reducer
export default counterSlice.reducer

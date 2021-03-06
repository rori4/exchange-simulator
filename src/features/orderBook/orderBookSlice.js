import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { serverApi } from "common/api"

// Thunks
export const fetchOrders = createAsyncThunk(
	"orderBook/fetchOrders",
	async (_, { dispatch, getState }) => {
		console.log("here")
		return await serverApi.fetchOrderbook().then((res) => res.json())
	}
)

export const orderBookSlice = createSlice({
	name: "orderBook",
	initialState: {
		orders: [],
	},
	// Redux Toolkit allows us to write "mutating" logic in reducers. It
	// doesn't actually mutate the state because it uses the Immer library,
	// which detects changes to a "draft state" and produces a brand new
	// immutable state based off those changes
	reducers: {
		// updateOrderBook: (state, action) => {
		// 	state.orders = action.payload
		// },
	},
	extraReducers: {
		[fetchOrders.pending]: (state, action) => {},
		[fetchOrders.fulfilled]: (state, { payload }) => {
			state.orders = payload
		},
		[fetchOrders.rejected]: (state, action) => {},
	},
})

export const { updateOrderBook } = orderBookSlice.actions

// Selectors
export const selectCount = (state) => state.orders

// Default export reducer
export default orderBookSlice.reducer

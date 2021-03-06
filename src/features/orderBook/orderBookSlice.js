import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { groupBy, get } from "lodash"
import { createSelector } from "reselect"
import { serverApi } from "common/api"

// Thunks
export const fetchOrders = createAsyncThunk(
	"orderBook/fetchOrders",
	async (_, { dispatch, getState }) => {
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
export const selectPendingOrders = (state) =>
	state.orderBook.orders.filter((o) => o.status === "pending")

export const selectOrderBook = createSelector(selectPendingOrders, (orders) => {
	const orderBookBySide = groupBy(orders, "side")
	const bidOrders = get(orderBookBySide, "BID", []).sort(
		(a, b) => b.price - a.price
	)
	const askOrders = get(orderBookBySide, "ASK", []).sort(
		(a, b) => b.price - a.price
	)
	return {
		BID: bidOrders.slice(bidOrders.length - 10, bidOrders.length),
		ASK: askOrders.slice(0, 10),
	}
})
// Default export reducer
export default orderBookSlice.reducer

import { configureStore } from "@reduxjs/toolkit"
import orderBookReducer from "../features/orderBook/orderBookSlice"

export default configureStore({
	reducer: {
		orderBook: orderBookReducer,
	},
})

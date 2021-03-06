import { configureStore } from "@reduxjs/toolkit"
import orderBookReducer from "features/orderBook/orderBookSlice"
import userWidgetReducer from "features/userWidget/userWidgetSlice"

export default configureStore({
	reducer: {
		orderBook: orderBookReducer,
		user: userWidgetReducer,
	},
})

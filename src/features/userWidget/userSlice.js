import { createSlice } from "@reduxjs/toolkit"
import { get } from "lodash"

export const userWidgetSlice = createSlice({
	name: "user",
	initialState: {
		id: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload
		},
	},
})

export const { setUser } = userWidgetSlice.actions

// Selectors
export const selectUserId = (state) => get(state, "user.id", null)

// Default export reducer
export default userWidgetSlice.reducer

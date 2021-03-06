import React, { useState } from "react"
import CommonCard from "common/components/CommonCard"
import { Button, InputGroup, FormControl } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setUser } from "features/user/userSlice"
export default function UserWidget() {
	const dispatch = useDispatch()
	const [userIdInput, setUserIdInput] = useState("")
	return (
		<CommonCard header="User Widget">
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={(ev) => setUserIdInput(ev.target.value)}
				/>
			</InputGroup>

			<Button
				variant="primary"
				size="lg"
				block
				onClick={() => dispatch(setUser(userIdInput))}
			>
				Login
			</Button>
			{/* TODO: history of logged users */}
		</CommonCard>
	)
}

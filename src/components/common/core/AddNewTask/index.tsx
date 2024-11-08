import { memo, useCallback, useState } from "react"
import styles from "./AddNewTask.module.css"
import { uuidv4 } from "utils"
import Input from "components/common/shared/Input"
import Button from "components/common/shared/Button"
import { ListItemType } from "components/types/list"

interface AddNewTaskProps {
	onSubmit: (item: ListItemType) => void
}

const AddNewTask = (props: AddNewTaskProps) => {
	const { onSubmit } = props
	const [value, setValue] = useState<string>("")

	const handleSubmit = useCallback(() => {
		onSubmit({
			id: uuidv4(),
			label: value,
			completed: false,
		})
	}, [value, onSubmit])

	return (
		<>
			<Input
				className={styles.input}
				height={42}
				value={value}
				placeholder="Type something..."
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button width="100%" disabled={!value.trim()} onClick={handleSubmit}>
				Add Task
			</Button>
		</>
	)
}

export default memo(AddNewTask)

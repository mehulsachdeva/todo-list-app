import { useCallback, useContext } from "react"
import styles from "./Home.module.css"
import { ListContext } from "contexts/list"
import Input from "components/common/shared/Input"
import ListItem from "components/common/core/ListItem"
import AddNewTask from "components/common/core/AddNewTask"
import { ListItemType } from "components/types/list"

const Home = () => {
	const { list, setList } = useContext<any>(ListContext)

	const handleSubmit = useCallback((item: ListItemType) => {
		setList((curr: Array<ListItemType>) => [...curr, item])
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.day}>Today</div>
				<Input className={styles.input} placeholder="Search" />
				<div className={styles.chips}>Chips</div>
			</div>
			<div className={styles.list}>
				{list.map((item: ListItemType) => {
					return <ListItem key={item.id} data={item} />
				})}
			</div>
			<div className={styles.newTask}>
				<AddNewTask onSubmit={handleSubmit} />
			</div>
		</div>
	)
}

export default Home

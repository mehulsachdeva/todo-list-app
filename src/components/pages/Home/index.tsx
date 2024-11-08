import { useContext } from "react"
import styles from "./Home.module.css"
import { ListContext } from "contexts/list"
import Input from "components/common/shared/Input"
import ListItem from "components/common/core/ListItem"
import AddNewTask from "components/common/core/AddNewTask"
import { ListItemType } from "components/types/list"

const Home = () => {
	const { list, addItem, removeItem } = useContext<any>(ListContext)

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.day}>Today</div>
				<Input className={styles.input} placeholder="Search" />
				<div className={styles.chips}>Chips</div>
			</div>
			<div className={styles.list}>
				{list.map((item: ListItemType) => {
					return <ListItem key={item.id} data={item} onRemove={removeItem} />
				})}
			</div>
			<div className={styles.newTask}>
				<AddNewTask onSubmit={addItem} />
			</div>
		</div>
	)
}

export default Home

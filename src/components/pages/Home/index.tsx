import { useState, useLayoutEffect, useContext } from "react"
import styles from "./Home.module.css"
import { ListContext } from "contexts/list"
import Input from "components/common/shared/Input"
import ListItem from "components/common/core/ListItem"
import AddNewTask from "components/common/core/AddNewTask"
import { debounce } from "utils/debounce"
import { ListItemType } from "components/types/list"

const Home = () => {
	const [searchValue, setSearchValue] = useState<string>("")
	const [listClone, setListClone] = useState<Array<ListItemType>>([])
	const { list, addItem, removeItem } = useContext<any>(ListContext)

	useLayoutEffect(() => {
		const updatedList = list.filter((item: ListItemType) =>
			item.label?.toLowerCase().includes(searchValue.toLowerCase()),
		)
		setListClone(updatedList)
	}, [list, searchValue])

	const handleSearchChange = (e) => setSearchValue(e.target.value)

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.day}>Today</div>
				<Input
					className={styles.input}
					placeholder="Search"
					onChange={debounce(handleSearchChange, 500)}
				/>
				<div className={styles.chips}>Chips</div>
			</div>
			{searchValue.length > 0 || listClone.length > 0 ? (
				<div className={styles.list}>
					{listClone.length > 0 ? (
						listClone.map((item: ListItemType) => {
							return <ListItem key={item.id} data={item} onRemove={removeItem} />
						})
					) : (
						<div className={styles.emptyLabel}>No tasks found</div>
					)}
				</div>
			) : null}
			<div className={styles.newTask}>
				<AddNewTask onSubmit={addItem} />
			</div>
		</div>
	)
}

export default Home

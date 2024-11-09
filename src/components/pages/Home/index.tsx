import { useState, useLayoutEffect, useContext } from "react"
import styles from "./Home.module.css"
import { ListContext } from "contexts/list"
import Tabs from "components/common/core/Tabs"
import Input from "components/common/shared/Input"
import ListItem from "components/common/core/ListItem"
import AddNewTask from "components/common/core/AddNewTask"
import { TABS } from "./constants"
import { debounce } from "utils/debounce"
import { TabType } from "components/types/tabs"
import { ListItemType } from "components/types/list"

const Home = () => {
	const [searchValue, setSearchValue] = useState<string>("")
	const [listClone, setListClone] = useState<Array<ListItemType>>([])
	const [selectedTab, setSelectedTab] = useState<TabType>(TABS[0])
	const { list, addItem, removeItem, checkItem } = useContext<any>(ListContext)

	useLayoutEffect(() => {
		let updatedList = list.filter((item: ListItemType) => {
			let statusMatch = true
			if (selectedTab.key === "completed") {
				statusMatch = item.completed
			} else if (selectedTab.key === "incomplete") {
				statusMatch = !item.completed
			}
			const searchMatch = item.label?.toLowerCase().includes(searchValue.toLowerCase())
			return statusMatch && searchMatch
		})
		setListClone(updatedList)
	}, [list, searchValue, selectedTab])

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
				<div className={styles.chips}>
					<Tabs tabs={TABS} selected={selectedTab} onClick={setSelectedTab} />
				</div>
			</div>
			{searchValue.length > 0 || listClone.length > 0 ? (
				<div className={styles.list}>
					{listClone.length > 0 ? (
						listClone.map((item: ListItemType) => {
							return (
								<ListItem key={item.id} data={item} onCheck={checkItem} onRemove={removeItem} />
							)
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

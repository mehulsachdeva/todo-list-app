import { useState, useEffect, createContext } from "react"
import { ListItemType } from "components/types/list"

interface ListContextProps {
	children: React.ReactNode
}

const ListContext = createContext({})

const ListContextProvider = (props: ListContextProps) => {
	const { children } = props
	const [list, setList] = useState<Array<ListItemType>>([])

	useEffect(() => {
		let list = []
		try {
			const localList = localStorage.getItem("list") || "[]"
			list = JSON.parse(localList)
		} catch (err) {}
		setList(list)
	}, [])

	const addItem = (item: ListItemType) => {
		setList((curr: Array<ListItemType>) => {
			const updatedCurr = [...curr, item]
			localStorage.setItem("list", JSON.stringify(updatedCurr))
			return updatedCurr
		})
	}

	const removeItem = (id: string) => {
		setList((curr: Array<ListItemType>) => {
			const updatedCurr = curr.filter((item) => item.id !== id)
			localStorage.setItem("list", JSON.stringify(updatedCurr))
			return updatedCurr
		})
	}

	return (
		<ListContext.Provider value={{ list, addItem, removeItem }}>{children}</ListContext.Provider>
	)
}

export { ListContext, ListContextProvider }

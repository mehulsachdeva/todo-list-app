import { useState, createContext } from "react"
import { ListItemType } from "components/types/list"

interface ListContextProps {
	children: React.ReactNode
}

const ListContext = createContext({})

const ListContextProvider = (props: ListContextProps) => {
	const { children } = props
	const [list, setList] = useState<Array<ListItemType>>([])

	return <ListContext.Provider value={{ list, setList }}>{children}</ListContext.Provider>
}

export { ListContext, ListContextProvider }

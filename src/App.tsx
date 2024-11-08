import Home from "components/pages/Home"
import { ListContextProvider } from "contexts/list"

const App = () => {
	return (
		<ListContextProvider>
			<Home />
		</ListContextProvider>
	)
}

export default App

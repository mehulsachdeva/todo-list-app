import { memo } from "react"
import styles from "./Tabs.module.css"
import { TabType } from "components/types/tabs"

interface TabsProps {
	tabs: Array<TabType>
	selected: TabType | null
	onClick: (tab: TabType) => void
}

const Tabs = (props: TabsProps) => {
	const { tabs, selected, onClick } = props

	return (
		<div className={styles.container}>
			{tabs.map((tab) => {
				const isSelected = selected?.key === tab.key

				return (
					<div
						key={tab.key}
						className={`${styles.tab} ${isSelected ? styles.selectedTab : ""}`}
						onClick={() => onClick(tab)}
					>
						{tab.label}
					</div>
				)
			})}
		</div>
	)
}

export default memo(Tabs)

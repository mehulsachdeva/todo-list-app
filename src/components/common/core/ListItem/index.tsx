import { memo } from "react"
import styles from "./ListItem.module.css"
import { ListItemType } from "components/types/list"
import { Cross } from "components/common/icons/Cross"

interface ListItemProps {
	data: ListItemType
	onRemove: (id: string) => void
}

const ListItem = (props: ListItemProps) => {
	const { data, onRemove } = props

	if (!data) return null
	return (
		<div className={styles.container}>
			<div>{data.label}</div>
			<div className={styles.deleteIcon} onClick={() => onRemove(data.id)}>
				<Cross width={10} height={10} fill="#a8a8a8" />
			</div>
		</div>
	)
}

export default memo(ListItem)

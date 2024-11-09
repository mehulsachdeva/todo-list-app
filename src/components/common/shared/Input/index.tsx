import React, { memo, CSSProperties } from "react"
import styles from "./Input.module.css"
import { convertToPixels } from "utils"
import { Search } from "components/common/icons/Search"

interface InputProps {
	type?: "text"
	className?: string
	width?: string | number
	height?: string | number
	value?: string
	placeholder?: string
	showSearchIcon?: boolean
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
	const {
		type = "text",
		width = "100%",
		height = 36,
		value,
		placeholder,
		className = "",
		showSearchIcon = false,
		onKeyDown,
		onChange,
	} = props

	return (
		<div
			style={
				{
					"--width": convertToPixels(width),
					"--height": convertToPixels(height),
				} as CSSProperties
			}
			className={styles.container}
		>
			<input
				className={`${styles.input} ${showSearchIcon ? styles.paddedInput : ""} ${className}`}
				type={type}
				value={value}
				placeholder={placeholder}
				onKeyDown={onKeyDown}
				onChange={onChange}
			/>
			{showSearchIcon ? (
				<div className={styles.searchIcon}>
					<Search fill="#909193" />
				</div>
			) : null}
		</div>
	)
}

export default memo(Input)

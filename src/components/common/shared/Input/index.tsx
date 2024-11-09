import React, { memo, CSSProperties } from "react"
import styles from "./Input.module.css"
import { convertToPixels } from "utils"

interface InputProps {
	type?: "text"
	className?: string
	width?: string | number
	height?: string | number
	value?: string
	placeholder?: string
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
		onKeyDown,
		onChange,
	} = props

	return (
		<input
			style={
				{
					"--width": convertToPixels(width),
					"--height": convertToPixels(height),
				} as CSSProperties
			}
			className={`${styles.input} ${className}`}
			type={type}
			value={value}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
			onChange={onChange}
		/>
	)
}

export default memo(Input)

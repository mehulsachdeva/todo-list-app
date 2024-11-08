type TickType = {
	width?: number
	height?: number
	fill?: string
}

const Tick = (props: TickType) => {
	const { width = 14, height = 14, fill = "currentColor" } = props

	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 448 512">
			<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
		</svg>
	)
}

export { Tick }

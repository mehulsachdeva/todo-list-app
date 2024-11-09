type SearchType = {
	width?: number
	height?: number
	fill?: string
}

const Search = (props: SearchType) => {
	const { width = 18, height = 18, fill = "currentColor" } = props

	return (
		<svg width={width} height={height} fill={fill} viewBox="0 0 24 24">
			<g>
				<path
					d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
						c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
						M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
						z"
				></path>
			</g>
		</svg>
	)
}

export { Search }

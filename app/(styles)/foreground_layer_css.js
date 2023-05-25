// Variables
  let primaryColor = '#000000'
  let textColor = '#ffffff'
  let tl ='200px' // Triangle length
	let hl = '20px' // Hover length

export const foreground = (isMouseOverTopLeft, isTopLeftClicked) => {
	let clipPathValue = `polygon(
		calc(-1 * (50vh - ${tl})) 50vh, /*Left*/
		50vw calc(-1 * (50vw - ${tl})), /*Top*/
		calc(100vw + 50vh - ${tl}) 50vh, /*Right*/
		50vw calc(100vh + 50vw - ${tl}) /*Bottom*/
	)`;

	if (isMouseOverTopLeft) {
		clipPathValue = `polygon(
			calc(-1 * (50vh - ${tl}) + ${hl})			calc(50vh + ${hl}),											/*Left*/
			calc(50vw + ${hl}) 										calc(-1 * (50vw - ${tl}) + ${hl}), 			/*Top*/
			calc(100vw + 50vh - ${tl}) 						50vh, 																	/*Right*/
			50vw 																	calc(100vh + 50vw - ${tl}) 							/*Bottom*/
		)`;
	}
	if (isTopLeftClicked) {
		clipPathValue = `polygon(
			50vw calc(100vh + 50vw - var(--tl)), /*Left*/
			calc(100vw + 50vh - var(--tl)) 50vh, /*Top*/
			calc(100vw + 50vh - var(--tl)) 50vh, /*Right*/
			50vw calc(100vh + 50vw - var(--tl)) /*Bottom*/
		)`;
	}

	return {
		height:'100vh',
		width:'100vw',
		backgroundColor:'black',
		padding:'0',
		margin:'0',
		clipPath: clipPathValue,
		transition:`clip-path 250ms ease-in-out`,
	}
}
const corners = () => {
	return {
		background: 'white',
		width: `${tl}`,
		height: `${tl}`,
		cursor: 'pointer',
	}
}

export const topLeft = () => {
	return {
		...corners(),
		position: 'absolute',
		top: '0',
		left: '0',
		clipPath: `polygon(
			0 0,
			100% 0,
			0 100%
		)`,
		background: '#00000000',
	}
}

export const topRight = () => {
	return {
		...corners(),
		position: 'absolute',
		top: '0',
		right: '0',
		clipPath: `polygon(
			0 0,
			100% 0,
			100% 100%
		)`,
	}
}

export const bottomRight = () => {
	return {
		...corners(),
		position: 'absolute',
		bottom: '0',
		right: '0',
		clipPath: `polygon(
			100% 0,
			100% 100%,
			0 100%
		)`,
	}
}

export const bottomLeft = () => {
	return {
		...corners(),
		position: 'absolute',
		bottom: '0',
		left: '0',
		clipPath: `polygon(
			0 0,
			100% 100%,
			0 100%
		)`,
	}
}

// Texts
export const topLeftText = () => {
	let width = '150px'
	let height = '35px'
	const oneOverSqrtTwo = '0.707106781'
	let offset = `calc(50% - ${oneOverSqrtTwo} * (${width}/2 + ${height}))`
	return {
		display: 'inline-block',
		position: 'relative',
		top: `${offset}`,
		right: `${offset}`,
		width: `${width}`,
		height: `${height}`,
		textAlign: 'right',
		transformOrigin: 'top right',
		fontSize: '2.0rem',
	}
}

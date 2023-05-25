'use client'

import { topLeft, topRight, bottomRight, bottomLeft, foreground, topLeftText} from './(styles)/foreground_layer_css'
import {useState, useRef, useEffect} from 'react'

export default function Home() {
	const topLeftTextRef = useRef()
	const [topLeftHover, setTopLeftHover] = useState(false)
	const [topLeftClicked, setTopLeftClicked] = useState(false)

	useEffect(() => {
		// rotate to 0 deg in 250ms
		if(topLeftClicked){
			topLeftTextRef.current.style.transform = 'rotate(0deg)'	
			topLeftTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
			topLeftTextRef.current.style.color = '#ffffff00'	
			setTimeout(() => {
				topLeftTextRef.current.textContent = '< Back'	
				topLeftTextRef.current.style.color = '#ffffff'	
			}, 125)
		}else{
			topLeftTextRef.current.style.transform = 'rotate(-45deg)'	
			topLeftTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
			topLeftTextRef.current.style.color = '#00000000'	
			setTimeout(() => {
				topLeftTextRef.current.textContent = 'About Me'	
				topLeftTextRef.current.style.color = '#ffffff'	
			}, 125)
		}
			// opacity to 0 in 125ms

			// Change content
			// opacity to 100 in 125ms

	}, [topLeftClicked])

  return (
		<>
			<div style={topLeft()} onMouseOver={() => setTopLeftHover(true)} onMouseOut={() => setTopLeftHover(false)} onClick={() => setTopLeftClicked(!topLeftClicked)}>
				<span style={topLeftText()} ref={topLeftTextRef}>About Me</span>
			</div>
			<div style={topRight()}>Portfolio</div>
			<div style={bottomRight()}>Contact Me</div>
			<div style={bottomLeft()}>Skills</div>
			<div style={foreground(topLeftHover, topLeftClicked)}></div>
		</>
  )
}

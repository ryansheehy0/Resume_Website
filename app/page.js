'use client'

import { topLeft, topRight, bottomRight, bottomLeft, foreground, topLeftText, topRightText, bottomRightText, bottomLeftText} from './(styles)/foreground_layer_css'
import {useState, useRef, useEffect} from 'react'

export default function Home() {
	// Top Left
		const topLeftTextRef = useRef()
		const topLeftRef = useRef()
		const [topLeftHover, setTopLeftHover] = useState(false)
		const [topLeftClicked, setTopLeftClicked] = useState(false)
		useEffect(() => {
			if(topLeftClicked){
				topLeftTextRef.current.style.transform = 'rotate(0deg)'	
				topLeftTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				topLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topLeftTextRef.current.textContent = '< Back'	
					topLeftTextRef.current.style.color = 'white'	
				}, 125)
				// Hide other corners
					topRightRef.current.style.display = 'none'
					bottomRightRef.current.style.display = 'none'
					bottomLeftRef.current.style.display = 'none'
			}else{
				topLeftTextRef.current.style.transform = 'rotate(-45deg)'	
				topLeftTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				topLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topLeftTextRef.current.textContent = 'About Me'	
					topLeftTextRef.current.style.color = 'white'	
				}, 125)
				// Show other corners
					topRightRef.current.style.display = 'block'
					bottomRightRef.current.style.display = 'block'
					bottomLeftRef.current.style.display = 'block'
			}
		}, [topLeftClicked])

	// Top Right
		const topRightTextRef = useRef()
		const topRightRef = useRef()
		const [topRightHover, setTopRightHover] = useState(false)
		const [topRightClicked, setTopRightClicked] = useState(false)
		useEffect(() => {
			if(topRightClicked){
				topRightTextRef.current.style.transform = 'rotate(0deg)'	
				topRightTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				topRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topRightTextRef.current.textContent = 'Back >'	
					topRightTextRef.current.style.color = 'white'	
				}, 125)
				// Hide other corners
					topLeftRef.current.style.display = 'none'
					bottomRightRef.current.style.display = 'none'
					bottomLeftRef.current.style.display = 'none'
			}else{
				topRightTextRef.current.style.transform = 'rotate(45deg)'	
				topRightTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				topRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topRightTextRef.current.textContent = 'Portfolio'	
					topRightTextRef.current.style.color = 'white'	
				}, 125)
				// Show other corners
					topLeftRef.current.style.display = 'block'
					bottomRightRef.current.style.display = 'block'
					bottomLeftRef.current.style.display = 'block'
			}
		}, [topRightClicked])

	// Bottom Right
		const bottomRightTextRef = useRef()
		const bottomRightRef = useRef()
		const [bottomRightHover, setBottomRightHover] = useState(false)
		const [bottomRightClicked, setBottomRightClicked] = useState(false)
		useEffect(() => {
			if(bottomRightClicked){
				bottomRightTextRef.current.style.transform = 'rotate(0deg)'	
				bottomRightTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				bottomRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomRightTextRef.current.textContent = 'Back >'	
					bottomRightTextRef.current.style.color = 'white'	
				}, 125)
				// Hide other corners
					topLeftRef.current.style.display = 'none'
					topRightRef.current.style.display = 'none'
					bottomLeftRef.current.style.display = 'none'
			}else{
				bottomRightTextRef.current.style.transform = 'rotate(-45deg)'	
				bottomRightTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				bottomRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomRightTextRef.current.textContent = 'Contact Me'	
					bottomRightTextRef.current.style.color = 'white'	
				}, 125)
				// Show other corners
					topLeftRef.current.style.display = 'block'
					topRightRef.current.style.display = 'block'
					bottomLeftRef.current.style.display = 'block'
			}
		}, [bottomRightClicked])

	// Bottom Left
		const bottomLeftTextRef = useRef()
		const bottomLeftRef = useRef()
		const [bottomLeftHover, setBottomLeftHover] = useState(false)
		const [bottomLeftClicked, setBottomLeftClicked] = useState(false)
		useEffect(() => {
			if(bottomLeftClicked){
				bottomLeftTextRef.current.style.transform = 'rotate(0deg)'	
				bottomLeftTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				bottomLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomLeftTextRef.current.textContent = '< Back'	
					bottomLeftTextRef.current.style.color = 'white'	
				}, 125)
				// Hide other corners
					topLeftRef.current.style.display = 'none'
					topRightRef.current.style.display = 'none'
					bottomRightRef.current.style.display = 'none'
			}else{
				bottomLeftTextRef.current.style.transform = 'rotate(45deg)'	
				bottomLeftTextRef.current.style.transition = 'transform 250ms ease-in-out, color 250ms ease-in-out'	
				bottomLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomLeftTextRef.current.textContent = 'My Skills'
					bottomLeftTextRef.current.style.color = 'white'	
				}, 125)
				// Show other corners
					topLeftRef.current.style.display = 'block'
					topRightRef.current.style.display = 'block'
					bottomRightRef.current.style.display = 'block'
			}
		}, [bottomLeftClicked])

  return (
		<>
			<div style={topLeft()} onMouseOver={() => setTopLeftHover(true)} onMouseOut={() => setTopLeftHover(false)} onClick={() => setTopLeftClicked(!topLeftClicked)} ref={topLeftRef}>
				<span style={topLeftText()} ref={topLeftTextRef}>About Me</span>
			</div>
			<div style={topRight()} onMouseOver={() => setTopRightHover(true)} onMouseOut={() => setTopRightHover(false)} onClick={() => setTopRightClicked(!topRightClicked)} ref={topRightRef}>
				<span style={topRightText()} ref={topRightTextRef}>Portfolio</span>
			</div>
			<div style={bottomRight()} onMouseOver={() => setBottomRightHover(true)} onMouseOut={() => setBottomRightHover(false)} onClick={() => setBottomRightClicked(!bottomRightClicked)} ref={bottomRightRef}>
				<span style={bottomRightText()} ref={bottomRightTextRef}>Contact Me</span>
			</div>
			<div style={bottomLeft()} onMouseOver={() => setBottomLeftHover(true)} onMouseOut={() => setBottomLeftHover(false)} onClick={() => setBottomLeftClicked(!bottomLeftClicked)} ref={bottomLeftRef}>
				<span style={bottomLeftText()} ref={bottomLeftTextRef}>My Skills</span>
			</div>
			<div style={foreground(topLeftHover, topLeftClicked, topRightHover, topRightClicked, bottomRightHover, bottomRightClicked, bottomLeftHover, bottomLeftClicked)}></div>
		</>
  )
}

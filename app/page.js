'use client'

import {topLeft, topRight, bottomRight, bottomLeft, foreground, topLeftText, topRightText, bottomRightText, bottomLeftText} from './(styles)/foreground_layer_css'
import {useState, useRef, useEffect} from 'react'
import ThreeDName from "./ThreeDName"

export default function Home() {
	// Background
		const backgroundRef = useRef()
		useEffect(() => {
			setTimeout(() => {
				backgroundRef.current.style.background = 'rgba(0,0,0,0)'
			}, 1000)
		}, [])

		const backgroundCss = () => {
			return {
				background: 'rgba(0,0,0,1)',
				padding: '0',
				margin: '0',
				transition: 'background 1s ease-in-out',
			}
		}

	// Top Left
		const topLeftTextRef = useRef()
		const topLeftRef = useRef()
		const [topLeftHover, setTopLeftHover] = useState(false)
		const [topLeftClicked, setTopLeftClicked] = useState(false)
		const [topLeftFlag, setTopLeftFlag] = useState(false) // This is to prevent an initial load
		useEffect(() => {
			if(!topLeftFlag){
				setTopLeftFlag(true)
				return
			}
			if(topLeftClicked){
				topLeftTextRef.current.style.transform = 'rotate(0deg)'	
				topLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topLeftTextRef.current.textContent = '< Back'	
					topLeftTextRef.current.style.color = 'white'	
					// Hide other corners
						topRightRef.current.style.display = 'none'
						bottomRightRef.current.style.display = 'none'
						bottomLeftRef.current.style.display = 'none'
				}, 125)
			}else{
				topLeftTextRef.current.style.transform = 'rotate(-45deg)'	
				topLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topLeftTextRef.current.textContent = 'About Me'	
					topLeftTextRef.current.style.color = 'white'	
					// Show other corners
						topRightRef.current.style.display = 'block'
						bottomRightRef.current.style.display = 'block'
						bottomLeftRef.current.style.display = 'block'
				}, 125)
			}
		}, [topLeftClicked])

	// Top Right
		const topRightTextRef = useRef()
		const topRightRef = useRef()
		const [topRightHover, setTopRightHover] = useState(false)
		const [topRightClicked, setTopRightClicked] = useState(false)
		const [topRightFlag, setTopRightFlag] = useState(false) // This is to prevent an initial load
		useEffect(() => {
			if(!topRightFlag){
				setTopRightFlag(true)
				return
			}
			if(topRightClicked){
				topRightTextRef.current.style.transform = 'rotate(0deg)'	
				topRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topRightTextRef.current.textContent = 'Back >'	
					topRightTextRef.current.style.color = 'white'	
					// Hide other corners
						topLeftRef.current.style.display = 'none'
						bottomRightRef.current.style.display = 'none'
						bottomLeftRef.current.style.display = 'none'
				}, 125)
			}else{
				topRightTextRef.current.style.transform = 'rotate(45deg)'	
				topRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					topRightTextRef.current.textContent = 'Portfolio'	
					topRightTextRef.current.style.color = 'white'	
					// Show other corners
						topLeftRef.current.style.display = 'block'
						bottomRightRef.current.style.display = 'block'
						bottomLeftRef.current.style.display = 'block'
				}, 125)
			}
		}, [topRightClicked])

	// Bottom Right
		const bottomRightTextRef = useRef()
		const bottomRightRef = useRef()
		const [bottomRightHover, setBottomRightHover] = useState(false)
		const [bottomRightClicked, setBottomRightClicked] = useState(false)
		const [bottomRightFlag, setBottomRightFlag] = useState(false) // This is to prevent an initial load
		useEffect(() => {
			if(!bottomRightFlag){
				setBottomRightFlag(true)
				return
			}
			if(bottomRightClicked){
				bottomRightTextRef.current.style.transform = 'rotate(0deg)'	
				bottomRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomRightTextRef.current.textContent = 'Back >'	
					bottomRightTextRef.current.style.color = 'white'	
					// Hide other corners
						topLeftRef.current.style.display = 'none'
						topRightRef.current.style.display = 'none'
						bottomLeftRef.current.style.display = 'none'
				}, 125)
			}else{
				bottomRightTextRef.current.style.transform = 'rotate(-45deg)'	
				bottomRightTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomRightTextRef.current.textContent = 'Contact Me'	
					bottomRightTextRef.current.style.color = 'white'	
					// Show other corners
						topLeftRef.current.style.display = 'block'
						topRightRef.current.style.display = 'block'
						bottomLeftRef.current.style.display = 'block'
				}, 125)
			}
		}, [bottomRightClicked])

	// Bottom Left
		const bottomLeftTextRef = useRef()
		const bottomLeftRef = useRef()
		const [bottomLeftHover, setBottomLeftHover] = useState(false)
		const [bottomLeftClicked, setBottomLeftClicked] = useState(false)
		const [bottomLeftFlag, setBottomLeftFlag] = useState(false) // This is to prevent an initial load
		useEffect(() => {
			if(!bottomLeftFlag){
				setBottomLeftFlag(true)
				return
			}
			if(bottomLeftClicked){
				bottomLeftTextRef.current.style.transform = 'rotate(0deg)'	
				bottomLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomLeftTextRef.current.textContent = '< Back'	
					bottomLeftTextRef.current.style.color = 'white'	
					// Hide other corners
						topLeftRef.current.style.display = 'none'
						topRightRef.current.style.display = 'none'
						bottomRightRef.current.style.display = 'none'
				}, 125)
			}else{
				bottomLeftTextRef.current.style.transform = 'rotate(45deg)'	
				bottomLeftTextRef.current.style.color = 'rgba(0,0,0,0)'	
				setTimeout(() => {
					bottomLeftTextRef.current.textContent = 'My Skills'
					bottomLeftTextRef.current.style.color = 'white'	
					// Show other corners
						topLeftRef.current.style.display = 'block'
						topRightRef.current.style.display = 'block'
						bottomRightRef.current.style.display = 'block'
				}, 125)
			}
		}, [bottomLeftClicked])

  return (
		<div style={backgroundCss()} ref={backgroundRef}>
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
			<div style={foreground(topLeftHover, topLeftClicked, topRightHover, topRightClicked, bottomRightHover, bottomRightClicked, bottomLeftHover, bottomLeftClicked)}>
				<img src='/profile_picture.png' style={{height: '100%', position: 'relative', top: '100%', left: '0%', transform: 'translateX(-170px) translateY(-100%)', backgroundColor: 'black'}}/>
				<ThreeDName/>
			</div>
		</div>
  )
}

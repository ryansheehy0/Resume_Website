import { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Text } from '@react-three/drei'

const ThreeDName = () => {
	const textRef = useRef();

	const degToRad = (deg) => {
		return deg * (Math.PI / 180)
	}

	const textFollowMouse = (event) => {
		const text = textRef.current
		const screenWidth = window.innerWidth
		const screenHeight = window.innerHeight
		const x = event.clientX
		const y = event.clientY
		const textX = screenWidth - (100 + 500 / 2)
		const textY = screenHeight / 2
		const normalizedXAroundText = x > textX ? ((x - textX) / (screenWidth - textX)) : -((textX - x) / textX)
		const normalizedYAroundText = y > textY ? ((y - textY) / (screenHeight - textY)) : -((textY - y) / textY)
		const maxAngle = 12
		if ( text ) {
			text.rotation.x = degToRad(maxAngle * normalizedYAroundText)
			text.rotation.y = degToRad(maxAngle * normalizedXAroundText)
		}
	}

	document.addEventListener('mousemove', textFollowMouse)

  return (
		<div style={{position: "fixed", top: "50%", right: "100px", transform: "translateY(-50%)"}}>
			<Canvas
				style={{width: "500px", height: "500px"}}
				camera={{fov: 80, aspect: 500 / 500, near: 0.1, far: 1000}}
			>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Text 
					ref={textRef}
					position={[0, 0, 0]}
					rotation={[0, 0, 0]}
					fontSize={2}
					color="white"
					anchorX="center"
					anchorY="middle"
				>
					{'I\'m\nRyan\nSheehy'}
				</Text>
			</Canvas>
		</div>
  );
};

export default ThreeDName;

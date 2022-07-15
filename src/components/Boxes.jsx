import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    useFrame((state, delta) => (ref.current.rotation.x = props.y/1000))
    useFrame((state, delta) => (ref.current.rotation.y = props.x/1000))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={.5}
        >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    )
  }

export default function Boxes(props) {
  return (
    <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[5, -1, 1]} x={props.x} y={props.y}/>
            <Box position={[2, 1.5, 1]} x={props.x} y={props.y}/>
            <Box position={[-3, 1, 1]} x={props.x} y={props.y}/>
            <Box position={[1, 0, 1]} x={props.x} y={props.y}/>
    </Canvas>
  )
}

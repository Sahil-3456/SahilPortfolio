import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Shape({ geometry, position, speed, color, rotAxis = [1, 1, 0] }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x += 0.003 * rotAxis[0] * speed
    ref.current.rotation.y += 0.004 * rotAxis[1] * speed
    ref.current.rotation.z += 0.002 * rotAxis[2] * speed
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.4
  })
  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
    </mesh>
  )
}

export default function FloatingShapes() {
  return (
    <>
      <Shape
        geometry={<torusGeometry args={[1.1, 0.28, 12, 48]} />}
        position={[-5.5, 1, -3]} speed={0.7} color="#00d4ff" rotAxis={[1, 1, 0]}
      />
      <Shape
        geometry={<torusGeometry args={[0.8, 0.22, 12, 40]} />}
        position={[5.5, -1.5, -2]} speed={0.9} color="#0096c7" rotAxis={[0, 1, 1]}
      />
      <Shape
        geometry={<icosahedronGeometry args={[0.85, 0]} />}
        position={[4.5, 2.5, -4]} speed={0.6} color="#00b4d8" rotAxis={[1, 0, 1]}
      />
      <Shape
        geometry={<icosahedronGeometry args={[0.65, 0]} />}
        position={[-4, -2, -5]} speed={0.5} color="#00d4ff" rotAxis={[1, 1, 0]}
      />
      <Shape
        geometry={<octahedronGeometry args={[0.75, 0]} />}
        position={[0, 3.5, -6]} speed={0.8} color="#0077b6" rotAxis={[1, 1, 1]}
      />
      <Shape
        geometry={<octahedronGeometry args={[0.55, 0]} />}
        position={[-3, -3.5, -4]} speed={0.65} color="#00b4d8" rotAxis={[0, 1, 0]}
      />
    </>
  )
}

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 2000 }) {
  const mesh = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const c1 = new THREE.Color('#00d4ff')
    const c2 = new THREE.Color('#0077b6')
    const c3 = new THREE.Color('#ffffff')
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28
      pos[i * 3 + 2] = (Math.random() - 0.5) * 28
      const t = Math.random()
      const c = t < 0.45 ? c1 : t < 0.7 ? c2 : c3
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.025
    mesh.current.rotation.x = t * 0.01
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} vertexColors transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box(props) {
	const meshRef = useRef();

	useFrame((state) => {
		meshRef.current.rotation.x += 0.01 * props.speed;
		meshRef.current.rotation.y += 0.01 * props.speed;
		meshRef.current.rotation.z += 0.01 * props.speed;
	});
    
	return (
		<mesh {...props} ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshNormalMaterial/>
		</mesh>
	);
}

export default Box;

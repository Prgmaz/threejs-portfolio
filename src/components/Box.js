import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Box({ rotation, position, scale, color, ...props }) {
	const meshRef = useRef();

	return (
		<mesh
			ref={meshRef}
			position={position}
			rotation={rotation}
			scale={scale}
			castShadow={props.castShadow}
			receiveShadow={props.receiveShadow}
		>
			<boxGeometry scale={[1, 1, 1]} />
			<meshLambertMaterial color={color} />
		</mesh>
	);
}

export default Box;

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function Loading(props) {
	return (
		// <Canvas>
		// 	<OrbitControls />
		// 	<ambientLight intensity={1} color={"white"} />
		// 	<pointLight intensity={1.25} color="white" position={[0, 2, 2]} />
		// 	<Box speed={2} {...props} />
		// </Canvas>
		<div className="centered">Loading...</div>
	);
}
export default Loading;

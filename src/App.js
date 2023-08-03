import { Canvas } from "@react-three/fiber";
import "./App.scss";
import Box from "./components/Box";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {
	return (
		<Canvas shadows="soft">
			<PerspectiveCamera position={[0, 2.5, 10]} makeDefault />
			<ambientLight color="#f1f1f1" intensity="1" />
			<directionalLight
				color="white"
				intensity={2}
				position={[10, 7.5, 5]}
				castShadow
			/>
			<OrbitControls />

			<mesh scale={[40, 40, 0.1]} receiveShadow>
				<boxGeometry args={[1, 1, 1]} />
				<meshLambertMaterial color="white" />
			</mesh>
			<mesh scale={[40, 0.1, 40]} receiveShadow>
				<boxGeometry args={[1, 1, 1]} />
				<meshLambertMaterial color="white" />
			</mesh>

			<Box position={[0, 0.6, 1]} castShadow receiveShadow />
		</Canvas>
	);
}

export default App;

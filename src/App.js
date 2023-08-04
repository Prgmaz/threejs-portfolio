import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./components/Model";

function App() {
	return (
		<Canvas shadows="soft">
			<PerspectiveCamera position={[0, 7.5, 7.5]} makeDefault />
			<ambientLight color="#f1f1f1" intensity="1" />
			<directionalLight
				color="white"
				intensity={2}
				position={[10, 7.5, 5]}
				castShadow
			/>
			<OrbitControls
				enableZoom={false}
				enablePan={false}
				minAzimuthAngle={(-Math.PI / 180) * 30}
				maxAzimuthAngle={(Math.PI / 180) * 30}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 2.5}
			/>

			<mesh scale={[60, 60, 0.1]} receiveShadow>
				<boxGeometry args={[1, 1, 1]} />
				<meshLambertMaterial color="white" />
			</mesh>
			<mesh scale={[60, 0.1, 60]} receiveShadow>
				<boxGeometry args={[1, 1, 1]} />
				<meshLambertMaterial color="white" />
			</mesh>

			<Model
				path="/assets/desk.obj"
				rotation={[0, -Math.PI / 2, 0]}
				position={[0, 0.1, 5]}
				scale={[0.6, 0.6, 0.6]}
				castShadow
			/>
		</Canvas>
	);
}

export default App;

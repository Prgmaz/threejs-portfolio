import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./components/Model";
import {
	EffectComposer,
	Glitch,
	Noise,
	Vignette,
} from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
	const controls = useRef();
	function mouseMove(e) {
		if (controls.current) {
			var x = e.clientX / window.innerWidth;
			var y = e.clientY / window.innerHeight;
			x = (x - 0.5) * 2;

			controls.current.setAzimuthalAngle(x * (Math.PI / 180) * 30);
			controls.current.setPolarAngle(
				y * (Math.PI / 2.5 - Math.PI / 4) + Math.PI / 4
			);
		}
	}

	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className="holder" onMouseMove={mouseMove}>
					<Canvas className="canvas-board" shadows="soft">
						<PerspectiveCamera position={[0, 10, 5]} makeDefault />
						{/* <EffectComposer>
						<Noise opacity={0.45} premultiply={true} />
						<Vignette
							opacity={0.65}
							darkness={0.85}
							eskil={false}
						/>
						<Glitch
							delay={[1.5, 3.5]}
							duration={[0.6, 1.0]}
							strength={[0.3, 0.55]}
							mode={1}
							ratio={0.85}
							active
						/>
					</EffectComposer> */}

						<ambientLight color="#f1f1f1" intensity="1" />
						<directionalLight
							color="white"
							intensity={2}
							position={[10, 7.5, 5]}
							castShadow
						/>
						<OrbitControls
							ref={controls}
							enableZoom={false}
							enablePan={false}
							minAzimuthAngle={(-Math.PI / 180) * 30}
							maxAzimuthAngle={(Math.PI / 180) * 30}
							minPolarAngle={Math.PI / 4}
							maxPolarAngle={Math.PI / 2.5}
							target={[0, 1, 0]}
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
						/>
						<Model
							path="/assets/plant.obj"
							position={[5, 0.1, 1.5]}
							scale={[0.6, 0.6, 0.6]}
						/>
					</Canvas>
				</div>
				<Home />
				<Info />
			</Suspense>
		</>
	);
}

export default App;

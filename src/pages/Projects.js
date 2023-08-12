import { MeshWobbleMaterial, OrthographicCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

function Projects() {
	const projects = [
		{
			name: "Loopverse",
			url: "https://loopverse.herokuapp.com",
			img: "/images/1.png",
			desc: "An Infinite Geometric Pattern World",
		},
		{
			name: "Loopverse",
			url: "https://loopverse.herokuapp.com",
			img: "/images/2.png",
			desc: "An Infinite Geometric Pattern World",
		},
		{
			name: "Loopverse",
			url: "https://loopverse.herokuapp.com",
			img: "/images/3.png",
			desc: "An Infinite Geometric Pattern World",
		},
		{
			name: "Loopverse",
			url: "https://loopverse.herokuapp.com",
			img: "/images/4.png",
			desc: "An Infinite Geometric Pattern World",
		},
		{
			name: "Loopverse",
			url: "https://loopverse.herokuapp.com",
			img: "/images/5.png",
			desc: "An Infinite Geometric Pattern World",
		},
		{
			name: "Loopverse",
			url: "https://loopverse.herokuapp.com",
			img: "/images/6.png",
			desc: "An Infinite Geometric Pattern World",
		},
	];

	const meshRef = useRef();
	const canvasRef = useRef();

	const [texname, setTexname] = useState("/images/default.png");
	const texture = useLoader(TextureLoader, texname);

	function onMouseMoveCanvas(e) {
		var x = e.clientX / window.innerWidth; // [0, 1920] -> [0, 1]
		var y = e.clientY / window.innerHeight; // [0, 1080] -> [0, 1]

		x = x * (1 - -1) + -1; // [-1, 1]
		y = y * (1 - -1) + -1; // [-1, 1]

		meshRef.current.position.x = (x * canvasRef.current.width) / 200;
		meshRef.current.position.y = -(y * canvasRef.current.height) / 200;
	}

	return (
		<section id="projects" onMouseMove={onMouseMoveCanvas}>
			<Canvas className="canvas-projects" ref={canvasRef}>
				<OrthographicCamera
					zoom={100}
					position={[0, 0, 1]}
					makeDefault
				/>
				<ambientLight intensity={1} color="white" />
				<mesh ref={meshRef}>
					<planeGeometry args={[1.6 * 4, 0.9 * 4, 32, 32]} />
					<MeshWobbleMaterial
						map={texture}
						factor={0.5}
						speed={1.5}
						side={2}
						transparent={true}
						opacity={0.5}
					/>
				</mesh>
			</Canvas>
			<div className="d-grid">
				{projects.map((pro, idx) => {
					return (
						<div
							className="card"
							key={idx}
							onMouseOver={() => setTexname(pro.img)}
						>
							<a
								href={pro.url}
								target="_blank"
								className="card-button"
							>
								Visit Website
							</a>
							<div className="card-name">{pro.name}</div>
							<div className="card-desc">{pro.desc}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;

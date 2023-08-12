import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { Html, OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo } from "react";
import * as THREE from "three";

function getShadesOfGray() {
	const r = Math.round(Math.random() * 220);
	const number = (r << 16) + (r << 8) + r;
	return number;
}

function InstancedSpheres({ count = 10 }) {
	const { viewport } = useThree();
	const [ref, api] = useSphere((index) => ({
		mass: data[index].scale * 100,
		position: [
			Math.random() * viewport.width - viewport.width / 2,
			Math.random() * viewport.height - viewport.width / 2,
			0,
		],
		args: [data[index].scale],
	}));
	const data = useMemo(() =>
		Array.from({ length: count }, () => ({
			color: getShadesOfGray(),
			scale: 0.25 + Math.random(),
		}))
	);
	const tempColor = new THREE.Color();
	const colorArray = useMemo(
		() =>
			Float32Array.from(
				new Array(count)
					.fill()
					.flatMap((_, i) => tempColor.set(data[i].color).toArray())
			),
		[count]
	);
	useLayoutEffect(() => {
		for (let i = 0; i < count; i++)
			api.at(i).scaleOverride([
				data[i].scale,
				data[i].scale,
				data[i].scale,
			]);
	}, []);

	return (
		<instancedMesh ref={ref} args={[null, null, count]}>
			<sphereGeometry args={[1, 32, 32]}>
				<instancedBufferAttribute
					attach="attributes-color"
					args={[colorArray, 3]}
				/>
			</sphereGeometry>
			<meshBasicMaterial toneMapped={false} vertexColors />
		</instancedMesh>
	);
}

function Plane({ color, position = [0, 0, 0], ...props }) {
	const [, api] = usePlane(() => ({ ...props }));
	useEffect(() => api.position.set(...position), [api, position]);
}

function Mouse() {
	const { viewport } = useThree();
	const [, api] = useSphere(() => ({ type: "Kinematic", args: [1] }));

	useFrame((state) =>
		api.position.set(
			(state.mouse.x * viewport.width) / 2,
			(state.mouse.y * viewport.height) / 2,
			0
		)
	);
}

function Borders() {
	const { viewport } = useThree();
	return (
		<>
			<Plane
				position={[0, -viewport.height / 2, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<Plane
				position={[-viewport.width / 2, 0, 0]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<Plane
				position={[viewport.width / 2, 0, 0]}
				rotation={[0, -Math.PI / 2, 0]}
			/>
			<Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
			<Plane position={[0, 0, 1.5]} rotation={[0, -Math.PI, 0]} />
		</>
	);
}

function Contact() {
	return (
		<section id="contact">
			<Canvas eventSource={document.body} className="canvas-contact">
				<OrthographicCamera
					top={-window.innerHeight / 2}
					bottom={window.innerHeight / 2}
					left={-window.innerWidth / 2}
					right={window.innerWidth / 2}
					position={[0, 0, 100]}
					zoom={100}
					makeDefault
				/>
				<Physics>
					<InstancedSpheres count={25} />
					<Borders />
					<Mouse />
				</Physics>
			</Canvas>
			<div className="contact-form">
				<form action="https://formspree.io/f/xoqybylk" method="POST">
					<div className="container">
						<div className="heading">Contact me</div>
						<div className="form-field">
							<div className="input">
								<label htmlFor="first_name">First Name</label>
								<input
									type="text"
									name="first_name"
									placeholder="Your First Name"
									required
								/>
							</div>
							<div className="input">
								<label htmlFor="last_name">Last Name</label>
								<input
									type="text"
									name="last_name"
									placeholder="Your Last Name"
									required
								/>
							</div>
						</div>
						<div className="form-field">
							<div className="input">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									name="email"
									placeholder="Your Email Address"
									required
								/>
							</div>
							<div className="input">
								<label htmlFor="phone">
									Phone Number (with country code)
								</label>
								<input
									type="tel"
									name="phone"
									placeholder="Your Phone number"
									required
								/>
							</div>
						</div>
						<div className="form-field">
							<div className="input">
								<label htmlFor="address">Address</label>
								<input
									type="text"
									name="address"
									placeholder="Your Address"
									required
								/>
							</div>
						</div>
						<div className="form-field">
							<div className="input">
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									rows="5"
									placeholder="Your Message"
									required
								></textarea>
							</div>
						</div>
						<div className="form-field">
							<div className="input">
								<input type="submit" value="Send Message" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Contact;

import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function Model({ path, mat, ...props }) {
	const obj = useLoader(OBJLoader, path);

	if (obj) {
		obj.traverse((child) => {
			if (child instanceof Mesh) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		return <primitive object={obj} {...props} />;
	}
	return <></>;
}

export default Model;

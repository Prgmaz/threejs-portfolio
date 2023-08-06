import Navbar from "./Navbar";

function Home() {
	return (
		<section id="home">
			<Navbar />
			<div className="container">
				<div className="container-title">Hello, World!</div>
				<div className="container-name">
					Hi, I'm Prgmaz. Welcome to my website
				</div>
			</div>
		</section>
	);
}

export default Home;

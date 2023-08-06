function Navbar() {
	return (
		<nav className="navbar">
			<a href="/" className="navbar-brand">
				Prgmaz
			</a>

			<div className="nav-links">
				<a href="#home" className="nav-link">
					Home
				</a>
				<a href="#info" className="nav-link">
					Info
				</a>
				<a href="#projects" className="nav-link">
					Projects
				</a>
				<a href="#contact" className="nav-link">
					Contact
				</a>
			</div>
		</nav>
	);
}

export default Navbar;

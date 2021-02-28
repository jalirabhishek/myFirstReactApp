import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "./Contexts/SearchContextProvider";

const Navbar = () => {
	const { setSearchTerm } = useContext(SearchContext);
	return (
		<div className="navbar">
			<Link to="/">
				<h1>BlogIt</h1>
			</Link>
			<div class="search-container">
				<input
					type="text"
					placeholder="Search.."
					name="search"
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
			</div>
			<div className="links">
				<Link to="/">Home</Link>
				<Link>
					<div class="dropdown">
						<button class="dropbtn">Category</button>
						<div class="dropdown-content">
							<Link to="/lifestyle">Lifestyle</Link>
							<Link to="/food">Food</Link>
							<Link to="/travel">Travel</Link>
							<Link to="/tech">Technology</Link>
							<Link to="/fashion">Fashion</Link>
							<Link to="/nature">Nature</Link>
						</div>
					</div>
				</Link>
				<Link to="/create">New blog</Link>
			</div>
		</div>
	);
};

export default Navbar;

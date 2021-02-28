import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "./Contexts/SearchContextProvider";
const Bloglist = ({ data, Title }) => {
	const { searchTerm } = useContext(SearchContext);
	const [blogs, setBlogs] = useState([]);
	const { category } = useParams();
	useEffect(() => {
		//url anusar blog change garreko
		if (category) {
			let techBlogs = data.filter((blog) => blog.category === category);
			setBlogs(techBlogs);
		} else {
			//url /blogs matra xa vaye sab blog chaiyo
			setBlogs(data);
		}
	}, [category]);
	useEffect(() => {
		if (searchTerm === "") {
			setBlogs(data);
		} else {
			let searchedBlogs = data.filter((blog) =>
				blog.Title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setBlogs(searchedBlogs);
		}
	}, [searchTerm]);
	return (
		<div className="blog-list">
			<h2>{Title}</h2>
			{blogs.map((abc) => (
				<div className="blog-preview" key={abc.Id}>
					<Link to={`/blogs/${abc.id}`}>
						<h2> {abc.Title}</h2>
						<p>Written By: {abc.author}</p>
						<p>Category: {abc.category}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Bloglist;

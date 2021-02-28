import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import SearchContextProvider from "./Contexts/SearchContextProvider";
function App() {
	return (
		<Router>
			<SearchContextProvider>
				<div className="App">
					<Navbar />
					<div className="content">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/create">
								<Create />
							</Route>
							<Route exact path="/:category">
								<Home />
							</Route>
							<Route path="/blogs/:id">
								<BlogDetails />
							</Route>
							<Route path="*">
								<NotFound />
							</Route>
						</Switch>
					</div>
				</div>
			</SearchContextProvider>
		</Router>
	);
}

export default App;

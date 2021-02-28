import { createContext, useContext, useState } from "react";
export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<SearchContext.Provider
			value={{ searchTerm: searchTerm, setSearchTerm: setSearchTerm }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;

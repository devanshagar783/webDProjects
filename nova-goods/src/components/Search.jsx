import React, { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                className="border-2 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
        </div>
    );
};

export default Search;

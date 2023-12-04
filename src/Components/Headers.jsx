import React, { useState } from "react";
import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {
    const [searchValue, setSearch] = useState("");

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img
                        className="header__icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                        alt="IMDb Logo"
                    />
                </Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    <span>Popular</span>
                </Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                    <span>Top Rated</span>
                </Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                    <span>Upcoming</span>
                </Link>
            </div>
            
            <div className="input-section">
                <input
                    value={searchValue}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search..."
                    // You can add more attributes or handle input events as needed
                />
                {searchValue !== "" ? (
                    <Link to={`/find/${searchValue}`}>
                        <button type="button">Search</button>
                    </Link>
                ) : (
                    <button type="button" disabled>
                        Search
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
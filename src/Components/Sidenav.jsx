import React, { useState } from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';
const Sidenav = () => {

    const [showNav, setShowNav] = useState("");
    const [searchValue, setSearch] = useState("");


    return (
        <div>
            <header>

                <div className="menu">

                    <i class="fa-solid fa-bars" onClick={() => { setShowNav("active") }}></i>

                    <div className={`navbar ${showNav} navbar-list`}>
                        <i class="fa-solid fa-xmark" onClick={() => { setShowNav("") }}></i>
                        <ul>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Adventure/${12}/${1}`}>Adventure</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Action/${28}/${1}`}>Action</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Animation/${16}/${1}`}>Animation</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Comedy/${35}/${1}`}>Comedy</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Crime/${80}/${1}`}>Crime</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Documentary/${99}/${1}`}>Documentary</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Drama/${18}/${1}`}>Drama</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Family/${10751}/${1}`}>Family</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Fantasy/${14}/${1}`}>Fantasy</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/History/${36}/${1}`}>History</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Horror/${27}/${1}`}>Horror</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Music/${10402}/${1}`}>Music</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Mystery/${9648}/${1}`}>Mystery</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Romance/${10749}/${1}`}>Romance</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Science Fiction/${878}/${1}`}>Science Fiction</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/TV Movie/${10770}/${1}`}>TV Movie</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Thriller/${53}/${1}`}>Thriller</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/War/${10752}/${1}`}>War</Link></li>
                            <li><Link onClick={() => { setShowNav("") }} to={`/category/Western/${37}/${1}`}>Western</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="headerLeft">
                    <Link to="/">
                        <img
                            className="header__icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                            alt="IMDb Logo"
                        />
                    </Link>
                    <Link to="/movies/popular/1" style={{ textDecoration: "none" }}>
                        <span>Popular</span>
                    </Link>
                    <Link to="/movies/top_rated/1" style={{ textDecoration: "none" }}>
                        <span>Top Rated</span>
                    </Link>
                    <Link to="/movies/upcoming/1" style={{ textDecoration: "none" }}>
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
                    <Link to={`/find/${searchValue}/1`}>
                        <button onClick={()=>{setSearch("")}} type="button">Search</button>
                    </Link>
                ) : (
                    <button type="button" disabled>
                        Search
                    </button>
                )}
            </div>


            </header>
        </div>
    )
}

export default Sidenav;

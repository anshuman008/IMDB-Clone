import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/HomePage';
import MovieList from './Components/Movielist';
import Movie from './Components/MovieDetail';
import Header from './Components/Headers';
import SearchComp from './Components/Search';
function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type/:page" element={<MovieList />}></Route>
                <Route path="/find/:search/:page" element={<SearchComp/>}/>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
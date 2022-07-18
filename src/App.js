import { useState, useEffect } from "react";

import './App.css';
import MovieCard from "./components/MovieCard";
import SearchIcon from './Search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=fdb90ae8'
// const movie1 = {
//     "Title": "Superman IV: The Quest for Peace",
//     "Year": "1987",
//     "imdbID": "tt0094074",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
// }

const App = () => {
    const [Movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');

// const SearchMovies  = async(title) => {  // async is used to run code asynchronously means This code can run in background also
//     console.log(title)
//     const response = await fetch(`${API_URL}&s=${title}`); // It is used to fetch data with api_url on basis of title parameter
//     const data = await response.json(); // It get data in json format from response variable
//    setMovies(data.Search);
//    console.log(data.Search)
// }

const SearchMovies = (title)=> {
    fetch(`${API_URL}&s=${title}`).then((Response)=>{
        console.log(title)
        return Response.json();
    }).then((data)=> {
        setMovies(data.Search);
    }).catch((err)=> {
        alert(err)
    })
}

    useEffect(() => {
        SearchMovies('superman');
    }, []);

    return(
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search Movie"  
                    value={SearchTerm}
                    onChange={(e) =>setSearchTerm(e.target.value) }              
                />
                <img
                    src={SearchIcon}
                    alt="search" // alt attribute is used to show additional information about image if it is not loaded
                    onClick={() => {SearchMovies(SearchTerm)}}
                />
            </div>

            {
                Movies?.length > 0
                ? (
                    <div className="container">
                         { Movies.map((movie) => (
                            <MovieCard movie = {movie} />
                         ))
                         }
                     </div>
                 ) : 
                 (
                    <div className="empty">
                        <h2>Movie not found</h2>
                    </div>
                 )
            }

            
        </div>
    )
};

export default App;
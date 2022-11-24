import React, { useState, useEffect } from 'react';
import './home.css';
import MovieList from './MovieList'
import MovieListHeading from './MovieListHeading'
import SearchBox from './SearchBox'


const Home = () => {
        const [movies, setMovies] = useState([]);
        const [searchValue, setSearchValue] = useState('');

        const getMovieRequest = async (searchValue) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7f827594`;

            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            }
        };

        useEffect(() => {
            getMovieRequest(searchValue);
        }, [searchValue]);

    return (
        <div className='movie-app'>
            <div className='movies-row'>
                <MovieListHeading heading='Movies' />
                <SearchBox className='search-bar' searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default Home;
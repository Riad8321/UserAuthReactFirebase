import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container'>
                    <img className='image-size' src={movie.Poster} alt='movie'></img>
                    <div className='overlay d-flex align-items-center justify-content-center movie-title'>
                        {movie.Title}
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
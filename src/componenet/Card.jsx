import React from 'react'

const Card = ({movies,loading}) => {
    return (
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6">
        {movies.length === 0 && !loading && <p>No movies found</p>}
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="border-2 border-blue-300 flex flex-col rounded-3xl items-center shadow-md transform hover:scale-105 transition-transform duration-300 w-full sm:w-60 md:w-80 h-auto"
          >
            <img
              src={movie.Poster}
              className="h-60 md:h-64 w-full rounded-t-3xl object-cover"
              alt={movie.Title}
            />
            <div className="p-4 flex flex-col items-center">
              <p className="text-blue-950 font-bold text-base md:text-lg">{movie.Title}</p>
              <p className="text-blue-950 font-semibold">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Card

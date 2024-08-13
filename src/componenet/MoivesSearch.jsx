// MoviesSearch.js
import React, { useEffect, useState } from 'react';
import { getMovies } from './moviApi';  // Adjust the path as needed
import Loader from './Loader';
import Card from './Card';
import Button from './Button';
import Input from './Input';

const MoviesSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    setMovies([]);

    const { allMovies, error } = await getMovies(searchTerm);
    if (error) {
      setError(error);
    } else {
      setMovies(allMovies);
    }
    setLoading(false);
  };
  const handleSearch = () => {
    fetchMovies()
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Sticky header and search field container */}
      <div className="sticky top-0 z-50 bg-gray-100">
        <div className="flex flex-col items-center p-5">
          <h1 className="text-blue-950 text-2xl md:text-3xl mb-4 font-bold whitespace-nowrap overflow-hidden text-ellipsis text-center">
            Find Your Favorite Movies Here
          </h1>
          <div className="w-full border-2 border-blue-300 flex justify-between items-center h-12 md:h-14 rounded-3xl text-lg md:text-xl p-4 bg-white shadow-md">
            <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Button handleSearch={handleSearch} loading={loading} />
          </div>
          {error && <p className="text-red-600 font-semibold mt-2">Error: {error}</p>}
        </div>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-auto px-4 md:px-6 py-4">
        {loading ? (
          <Loader />
        ) : (
          <Card movies={movies} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default MoviesSearch;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Trending() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA1NWZkMzBkMjZkM2VhNjY4Nzc0MWE3MWY2OTI2ZCIsInN1YiI6IjY2MjM1NDcwZTg5NGE2MDE0YTM5Yjg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZ1YnK6Dzmj5zVMiXc4K63HX7Eb-4KuYnev6TeTs2Cc",
            },
          }
        );
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-3/4 mx-auto mt-36">
      <h1 className="text-2xl font-semibold ml-5 mt-36">Trending Movies</h1>
      <ul className="grid grid-cols-5 gap-10 mt-10">
        {trendingMovies.map((movie) => (
          <li key={movie.id} className="text-stone-900">
            <Link href={`/movies/${movie.id}`}>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-44 h-auto rounded-md mb-2 border-2 border-gray-300 hover:border-gray-800 transition duration-300 ease-in-out"
                />
                <h3 className="text-md font-semibold text-center">
                  {movie.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

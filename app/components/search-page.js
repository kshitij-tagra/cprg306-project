"use client";

import Link from "next/link";

export default function SearchPage({ searchResults, formatDate }) {
  return (
    <section className="flex flex-col items-center">
      {searchResults.length > 0 ? (
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold ml-5 mt-36">Search results</h2>
          <ul className="flex flex-col px-5 pt-3 mt-10">
            {searchResults.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <li
                  className="flex flex-row text-stone-900 py-3"
                  key={movie.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-44 h-72 rounded-md mb-2 border-2 border-gray-300 hover:border-gray-800 transition duration-300 ease-in-out"
                  />
                  <div>
                    <h3 className="text-md font-semibold pl-3">
                      {movie.title} ({formatDate(movie.release_date)})
                    </h3>
                    <p className="text-sm pl-3">{movie.overview}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="w-3/4 text-2xl font-semibold ml-5 mt-36">
          No results found
        </h2>
      )}
    </section>
  );
}

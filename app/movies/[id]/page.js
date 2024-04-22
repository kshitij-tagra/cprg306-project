"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
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
        setMovie(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p>Error: {error.message}</p>
        <Link href="/">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center py-10">
        <p>Movie not found</p>
        <Link href="/">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  const handleBackButton = (event) => {
    event.preventDefault();
    window.history.back();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-36 px-5">
        <div className="flex flex-row">
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-60 h-auto rounded-lg mr-10"
          />
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-700 mt-2">{movie.overview}</p>
            <br />
            <p className="text-gray-600 mt-2">
              Release date: {movie.release_date}
            </p>
            <br />
            <p className="text-gray-600 mt-2">
              Rating: {movie.vote_average} / 10
            </p>
          </div>
        </div>
        <form onSubmit={handleBackButton}>
          <button className="bg-blue-900 text-white font-bold px-4 py-2 rounded-md mt-10 hover:hover:text-gray-400">
            Go Back
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

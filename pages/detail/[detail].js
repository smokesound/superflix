import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/Header/Header";

const Detail = () => {
  const router = useRouter();
  const detailId = router.query.detail;
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    getDetails(detailId);
  }, [detailId]);
  const getDetails = async (id) => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7f753478c8faa75bdd0b9b33b3521125&language=en-US`
    );
    const data = await res.json();
    setMovieDetail(data);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Superflix app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-xxl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
              style={{ marginTop: 20, cursor: "pointer", marginBottom: 20 }}
              onClick={() => router.back()}
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>

            <div className="text-center">
              <Image
                src={`http://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                width={300}
                height={420}
              />

              <h1> {movieDetail.original_title} </h1>

              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                {movieDetail.genres !== undefined && (
                  <Link
                    href={`/genre/${movieDetail.genres[0].name}?id=${movieDetail.genres[0].id}`}
                    as={`/genre/${movieDetail.genres[0].name}`}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary text-light border-light"
                    >
                      {movieDetail.genres !== undefined &&
                        movieDetail.genres[0].name}
                    </button>
                  </Link>
                )}
                {movieDetail.genres !== undefined &&
                  movieDetail.genres
                    .slice(1, movieDetail.genres.length - 1)
                    .map((genre, index) => {
                      return (
                        <Link
                          href={`/genre/${genre.name}?id=${genre.id}`}
                          as={`/genre/${genre.name}`}
                          key={index}
                        >
                          <button
                            type="button"
                            className="btn btn-outline-primary text-light border-light"
                          >
                            {genre.name}
                          </button>
                        </Link>
                      );
                    })}
                {movieDetail.genres !== undefined && (
                  <Link
                    href={`/genre/${
                      movieDetail.genres[movieDetail.genres.length - 1].name
                    }?id=${
                      movieDetail.genres[movieDetail.genres.length - 1].id
                    }`}
                    as={`/genre/${
                      movieDetail.genres[movieDetail.genres.length - 1].name
                    }`}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary text-light border-light"
                    >
                      {movieDetail.genres !== undefined &&
                        movieDetail.genres[movieDetail.genres.length - 1].name}
                    </button>
                  </Link>
                )}
              </div>
              <p className="mt-3">
                <em> {movieDetail.tagline} </em>
              </p>
              <p> {movieDetail.overview} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

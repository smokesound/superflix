import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../components/MovieList/MovieList.module.css";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
const Genre = () => {
  const router = useRouter();
  const genreName = router.query.genre;
  const genreId = router.query.id;
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getGenreBased(genreName);
  }, [genreName]);
  const getGenreBased = async (id) => {
    let res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7f753478c8faa75bdd0b9b33b3521125&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
    );
    const data = await res.json();
    setMovieData(data.results);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Superflix app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container-fluid">
        <div style={{ overflow: "hidden" }}>
          <main className="container-fluid p-0">
            <Subheader name={genreName} />
            <div className={`row  g-2 ${styles.hidescroll}`}>
              {movieData.length > 0 &&
                movieData.map((movie, index) => {
                  return (
                    <div
                      className={`col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 ${styles.singleMovie}`}
                      key={index}
                    >
                      <Link href={`/detail/${movie.id}`}>
                        <div>
                          <Image
                            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            width={300}
                            height={420}
                          />
                          <br />
                          <div className={styles.title}>{movie.title}</div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Genre;

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import styles from "./MovieList.module.css";
import Link from "next/link";
import {
  ScrollMenu,
  VisibilityContext,
  Arrow,
} from "react-horizontal-scrolling-menu";

const MovieList = (data) => {
  const [movieData, setMovieData] = useState({});
  const { id, name } = data.data;
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
      <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
          className={styles.iconLeft}
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </div>
    );
  };
  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
      <div
        disabled={isLastItemVisible}
        onClick={() => {
          console.log("haaa");
          scrollNext();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
          className={styles.iconRight}
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </div>
    );
  };
  useEffect(() => {
    getMovie(id);
  }, [data]);

  const getMovie = async (id) => {
    let res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7f753478c8faa75bdd0b9b33b3521125&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    );
    const data = await res.json();
    setMovieData(data.results);
  };
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <h3>{name}</h3>
      <main className="container-fluid p-0">
        <div className={`row flex-nowrap g-2 ${styles.hidescroll}`}>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
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
          </ScrollMenu>
        </div>
      </main>
    </div>
  );
};

export default MovieList;

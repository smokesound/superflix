import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import MovieList from "../components/MovieList/MovieList";
import Subheader from "../components/Subheader/Subheader";
import Footer from "../components/Footer/Footer";

const Home = (res) => {
  const { genres } = res;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Superflix app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="p-4">
        <Subheader />

        <main className="container-fluid">
          <div>
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
          <div>
            {genres.slice(0, 5).map((data, index) => {
              return <MovieList data={data} key={index} />;
            })}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
Home.getInitialProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=7f753478c8faa75bdd0b9b33b3521125&language=en-US"
  );
  const data = await res.json();
  return data;
};

export default Home;

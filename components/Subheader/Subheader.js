import styles from "./Subheader.module.css";
const Subheader = (data) => {
  return (
    <div className="container m-0">
      <div className="row">
        <div className="col-lg-6 col-12">
          <h1>{data.name !== undefined ? data.name : "Movie"}</h1>
          <p>
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience. Asian Movies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subheader;

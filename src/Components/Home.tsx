import classes from "./Home.module.css";
import BackgroundBanner from "./BackgroundBanner";
import Generic from "./Generic";
import Button from "../UI/Button";
import { useLoaderData, json } from "react-router-dom";
import PopulatedMovies from "./PopulatedMovies";
import populatesData from "../model/populatesMovies";
import Categories from "./Categories";
import Recommended from "./Recomended";
import { Link } from "react-router-dom";
import TopNews from "./TopNews";
const Home = () => {
  const { results } = useLoaderData() as populatesData;

  const topPopulatesMovies = results.slice(8, 11);
  console.log(topPopulatesMovies);
  console.log(results[0])
  return (
    <>
      <BackgroundBanner bgDrop={`https://image.tmdb.org/t/p/original${results[0].backdrop_path}`} />
      <div className={classes.container}>
        <div className={classes.info_banner}>
          <h1>{results[0].title}</h1>
          <Generic  />
          <Button classes={classes.btn}>
            <span>Watch Me</span>
            <img
              src="https://clipart-library.com/images_k/play-button-image-transparent/play-button-image-transparent-14.png"
              alt="Play Icon"
            />
          </Button>
        </div>
        <div className={classes.info_movies}>
          {topPopulatesMovies.map((item) => (
            <Link to={`detail/${item.id}`}>
              <PopulatedMovies
                id={item.id}
                bgImage={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                width={300}
                height={200}
              >
                <div className={classes.info_populate}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/010/148/443/original/play-button-icon-sign-design-free-png.png"
                    alt="Play Icon"
                  />
                  <span>{item.title}</span>
                </div>
              </PopulatedMovies>
            </Link>
          ))}
        </div>
      </div>
      <Categories />
      <Recommended />
      <TopNews gap="15rem" horizon="row"/>
    </>
  );
};
export default Home;
export const loader = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=90865bea14b1012286656881417ea75b"
  );

  if (!response.ok) {
    throw json({ message: "fail to fetch data" }, { status: response.status });
  }

  return response.json();
};

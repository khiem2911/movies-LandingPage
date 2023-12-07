import { useQuery } from "@tanstack/react-query";
import classes from "./Recomended.module.css";
import { ButtonGroup, Button } from "@mui/material";
import { fetchRecommened } from "../../http/moveis";
import Categoriess from "../../model/categoriesMovies";
import { ThreeDots } from "react-loader-spinner";
import PopulatedMovies from "./PopulatedMovies";
import InfoMovies from "../InfoMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Recommended = () => {
  const { data, isLoading } = useQuery<Categoriess[]>({
    queryKey: ["recommend"],
    queryFn: () => fetchRecommened(),
  });

  let content;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) {
    content = (
      <ThreeDots
        height="80"
        width="50"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        visible={isLoading}
      />
    );
  }

  if (data) {
    content = data.map((item) => (
      <PopulatedMovies
        key={item.id}
        id={item.id}
        width={300}
        height={400}
        bgImage={`https://image.tmdb.org/t/p/original${item.poster_path}`}
      >
        <div className={classes.info_populate}>
          <img
            src="https://clipart-library.com/images_k/play-button-image-transparent/play-button-image-transparent-14.png"
            alt="Play Icon"
          />
          <span id={classes.score}>{Math.round(item.vote_average).toFixed(1)}</span>
        </div>
        <InfoMovies title={item.title} genericsMovies={item.genre_ids} />
      </PopulatedMovies>
    ));
  }

  return (
    <div className={classes.container_recommended}>
      <span className={classes.recommened}>
        <h2>Recommened </h2>
      </span>
      <Carousel responsive={responsive}>{content}</Carousel>
    </div>
  );
};
export default Recommended;

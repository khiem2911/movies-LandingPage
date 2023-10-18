import { useQuery } from "@tanstack/react-query";
import classes from "./Recomended.module.css";
import { ButtonGroup, Button } from "@mui/material";
import { fetchRecommened } from "../http/moveis";
import Categoriess from "../model/categoriesMovies";
import { ThreeDots } from "react-loader-spinner";
import PopulatedMovies from "./PopulatedMovies";
import InfoMovies from "./InfoMovies";

const Recommended = () => {
  const { data, isLoading } = useQuery<Categoriess[]>({
    queryKey: ["recommend"],
    queryFn: () => fetchRecommened(),
  });

  let content;

 

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
      <div>
        <PopulatedMovies
         
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
            <span id={classes.score}>{item.vote_average}</span>
          </div>
          <InfoMovies title={item.title} genericsMovies={item.genre_ids} />
        </PopulatedMovies>
      </div>
    ));
  }

  return (
    <>
     <div className={classes.container_recommended}>
      <div className={classes.recommened}>
        <h2>Recommened </h2>
        <ButtonGroup>
          <Button size="small" variant="outlined">
            &lt;
          </Button>
          <Button size="small" variant="outlined">
            &gt;
          </Button>
        </ButtonGroup>
      </div>
      </div>
      <div className={classes.recommened_Movies}>
        {content}
      </div>
    </>
   
      
  );
};
export default Recommended;

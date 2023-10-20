import Input from "../../UI/Input";
import classes from "./Categories.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../http/moveis";
import { ThreeDots } from "react-loader-spinner";
import Categoriess from "../../model/categoriesMovies";
import PopulatedMovies from "./PopulatedMovies";
import { useState } from "react";
import InfoMovies from "../InfoMovies";
import { Link } from "react-router-dom";

const Categories = () => {
  const [cate, setCateState] = useState("All");
  const [inputValue, setInputValue] = useState("");

  const { data, isLoading } = useQuery<Categoriess[]>({
    queryKey: ["categories", cate],
    queryFn: ({ signal }) => fetchCategories(cate, signal!),
  });

  const onHandlerSearch = (value: string) => {
    setInputValue(value);
  };

  const onChangeCate = (value: string) => {
    setCateState(value);
  };

  let content: any;

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

  if (data && inputValue === "") {
    content = data.map((item) => (
      
      <>
        <Link key={item.id} to={`detail/${item.id}`}>
          <PopulatedMovies
            id={item.id}
            width={200}
            height={300}
            bgImage={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          >
            <div className={classes.info_populate}>
            <img
              src="https://clipart-library.com/images_k/play-button-image-transparent/play-button-image-transparent-14.png"
              alt="Play Icon"
            />
              <span id={classes.score}>{item.vote_average}</span>
            </div>
          </PopulatedMovies>
          <InfoMovies title={item.title} genericsMovies={item.genre_ids} />
        </Link>
      </>
    ));
  } else if (inputValue !== "") {
    const inputFilter = data!.filter((item) => item.title.match(inputValue));
    content = inputFilter.map((item) => (
     
        <div key={item.id}>
          <PopulatedMovies
            id={item.id}
            width={200}
            height={300}
            bgImage={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          />
          <InfoMovies title={item.title} genericsMovies={item.genre_ids} />
        </div>
    
    ));
  }
  return (
    <div className={classes.categories}>
      <ul className={classes.list}>
        <li
          onClick={() => onChangeCate("All")}
          className={cate === "All" ? classes.active : undefined}
        >
          All
        </li>
        <li
          onClick={() => onChangeCate("Popular")}
          className={cate === "Popular" ? classes.active : undefined}
        >
          Popular
        </li>
        <li
          onClick={() => onChangeCate("Coming Soon")}
          className={cate === "Coming Soon" ? classes.active : undefined}
        >
          Coming Soon
        </li>
        <li
          onClick={() => onChangeCate("Top Rated")}
          className={cate === "Top Rated" ? classes.active : undefined}
        >
          Top Rated
        </li>
      </ul>
      <Input onSubmit={onHandlerSearch} />
      {content && <div className={classes.moviesCategories}>{content}</div>}
      {content.length === 0 && <p>No results</p>}
    </div>
  );
};
export default Categories;

import { useLoaderData, useParams } from "react-router-dom";
import { fetchGenres, moviesList } from "../http/moveis";
import BackgroundBanner from "../UI/BackgroundBanner";
import Categoriess from "../model/categoriesMovies";
import classes from "./Categorie.module.css";
import { Link } from "react-router-dom";
import PopulatedMovies from "./Home/PopulatedMovies";
import { useQuery } from "@tanstack/react-query";
import { genericCategoris } from "../model/Generic";
import Input from "../UI/Input";
import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';


const Categorie = () => {
  const data = useLoaderData() as Categoriess[];
  const [inputValue, setInputValue] = useState("");

  const { data: genericsData } = useQuery<genericCategoris[]>({
    queryKey: ["categories", "categories_generic"],
    queryFn: () => fetchGenres(),
  });

  const onHandlerInput = (value: string) => {
    setInputValue(value);
  };

  const { id } = useParams();

  const idCate = parseInt(id as string);

  const filterDataGeneric = data.filter((item) => item.genre_ids.includes(idCate))


  const [visibleData, setVisibleData] = useState(filterDataGeneric.slice(0, 10));

  useEffect(() => {
    setVisibleData(filterDataGeneric.slice(0, 10))
  }, [id])


  const genericTitle = genericsData?.find((item) => item.id === idCate);

  let content = visibleData


  if (inputValue !== "") {
    content = content.filter((item) => item.title.match(inputValue));
  }

  const onShowMore = () => {
    const dataShowMore = filterDataGeneric.slice(0, visibleData.length + 10);
    setVisibleData(dataShowMore);
  };

  return (
    <>
      <BackgroundBanner />
      <div className={classes.container}>
        <span>
          <h2>{genericTitle?.name}</h2>
        </span>
        <Input onSubmit={onHandlerInput} />
        {content!.length > 0 && (
          <div className={classes.container_movies}>
            {content!.map((item) => (
              <div className={classes.wrap_movie}>
                <Link key={item.id} to={`detail/${item.id}`}>
                  <PopulatedMovies
                    id={item.id}
                    bgImage={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    width={300}
                    height={400}
                  />
                </Link>
                <div className={classes.infoMovie}>
                  <p>{item.title}</p>
                  <div className={classes.voteInfo}>
                    <FaStar />
                    <p>{item.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {visibleData.length < filterDataGeneric.length && content!.length > 0 && (
          <button onClick={onShowMore} className={classes.btnShowmore}>
            Show more
          </button>
        )}
        {content!.length === 0 && (
          <span>
            <h2>No Results</h2>
          </span>
        )}
      </div >
    </>
  );
};
export default Categorie;
export const loader = async () => {
  const data = await moviesList();
  return data;
};

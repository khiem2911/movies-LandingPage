import { useLoaderData } from 'react-router-dom'
import BackgroundBanner from '../UI/BackgroundBanner'
import { moviesList } from '../http/moveis'
import classes from './Movies.module.css'
import Categoriess from '../model/categoriesMovies'
import {useState} from 'react'
import Input from '../UI/Input'
import { Link } from 'react-router-dom'
import PopulatedMovies from './Home/PopulatedMovies'
import { FaStar } from 'react-icons/fa'
const Movies = () =>{

    const data = useLoaderData() as Categoriess[]
    const [visibleData, setVisibleData] = useState(data.slice(0, 10));
    const [inputValue, setInputValue] = useState("");
    console.log(data)
    let content = visibleData
    const onHandlerInput = (value: string) => {
        setInputValue(value);
      };


      if (inputValue !== "") {
        content = content.filter((item) => item.title.match(inputValue));
      }

      const onShowMore = () => {
        const dataShowMore = data.slice(0, visibleData.length + 10);
        setVisibleData(dataShowMore);
      };

    return (
        <>
        <BackgroundBanner/>
        <div className={classes.container}>
        <span><h2>Movies</h2></span>
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
        {visibleData.length < data.length && content!.length > 0 && (
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
        )
}
export default Movies
export const loader = async () =>{
    const data = await moviesList()
    return data
}
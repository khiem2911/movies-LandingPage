import BackgroundBanner from "../../UI/BackgroundBanner";
import Generic from "./Generic";
import Button from "../../UI/Button";
import classes from "./Detail.module.css";
import { fetchGenres, fetchMovieDetail, fetchVideoId } from "../../http/moveis";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import { LoaderFunction } from "react-router-dom";
import data from "../../model/detail";
import PopulatedMovies from "./PopulatedMovies";
import YouTube from "react-youtube";
import { sideopts } from "../../constant/videosOTP";
import Recommended from "./Recomended";
import { useEffect,useState } from "react";
import TopNews from "./TopNews";
import Modal from "../../UI/Modal";

const Detail = () => {
  const { data, generic, videos } = useLoaderData() as data;
  const [modal,setModal] = useState(false)
 


  const onVideoTrailer = () =>{
    setModal(!modal)
  }

  const {id} = useParams()

  const onChangeDetail = () =>{
    return redirect(`http://localhost:3000/detail/${1}`)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  },[id]);

  const genericId = data.genres.map((item) => item.id);
  const genericMovie = generic.filter((item) => genericId.includes(item.id));
  const genericsName = genericMovie.map((item) => item.name);
  const genericNameValues = genericsName.join(",");
  const country = data.production_countries.map((item) => item.name);
  const date = new Date(data.release_date);

  const convertDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let keysVideo = videos.map((item) => item.key);
  const trailer = keysVideo[keysVideo.length - 1];

  if (keysVideo.length > 4) {
    keysVideo = keysVideo.slice(0,3);
  } else if (keysVideo.length <= 4) {
    keysVideo = keysVideo.slice(0, keysVideo.length-1);
  }

  return (
    <>
      <BackgroundBanner
        bgDrop={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
      />
      {modal && <Modal onClick={onVideoTrailer} videoKey={trailer} />}
      <div className={classes.info_banner}>
        <h1 onClick={()=>onChangeDetail()}>{data.title}</h1>
        <Generic items={genericsName} />
        <Button onClick={onVideoTrailer}  classes={classes.btn}>
          <span >Watch Me</span>
          <img
            src="https://clipart-library.com/images_k/play-button-image-transparent/play-button-image-transparent-14.png"
            alt="Play Icon"
          />
        </Button>
      </div>
      <div className={classes.container_detail}>
        <div className={classes.content_detail}>
          <div className={classes.header_detail}>
            <div className={classes.img_container}>
              <PopulatedMovies
                id={data.id}
                bgImage={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                width={250}
                height={400}
              >
                <span>{data.vote_average.toFixed(1)}</span>
              </PopulatedMovies>
            </div>
            <div className={classes.movie_detail}>
              <h2>Movies details</h2>
              <span className={classes.movie_info}>
                <p>Release date:</p>
                <p>{convertDate}</p>
              </span>
              <span className={classes.movie_info}>
                <p>Categorie:</p>
                <p>{genericNameValues}</p>
              </span>
              <span className={classes.movie_info}>
                <p>Actors:</p>
                <p>{data.tagline}</p>
              </span>
              <span className={classes.movie_info}>
                <p>Country:</p>
                <p>{country.join(",")}</p>
              </span>
              <span className={classes.movie_info}>
                <p>Language:</p>
                <p>{data.original_language}</p>
              </span>
            </div>
          </div>
          <div className={classes.Summary}>
            <h2>Polt Summary</h2>
            <p>{data.overview}</p>
          </div>
          
          <div className={classes.movies_video}>
          <h2>Trailer & Videos</h2>
            <div className={classes.custom_youtube}>
              <YouTube className={classes.mainTrailer} videoId={trailer}></YouTube>
            </div>
            <div className={classes.bts_videos}>
              {keysVideo.map((item) => (
                <div className={classes.custom_btsVideos}>
                  <YouTube opts={sideopts} videoId={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Recommended  />
    </>
  );
};
export default Detail;
export const loader: LoaderFunction = async ({ params }) => {
  const data = await fetchMovieDetail(params.id!);
  const generic = await fetchGenres();
  const videos = await fetchVideoId(params.id!);
  return {
    data: data,
    generic: generic,
    videos: videos,
  };
};

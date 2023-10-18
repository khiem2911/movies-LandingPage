import { Link } from "react-router-dom";
import populateMovies from "../model/populatedMovies";
import classes from "./PopulatedMovies.module.css";

const PopulatedMovies: React.FC<populateMovies> = (props) => {
  
  const style = {
    backgroundImage: `url(${props.bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: props.width,
    height: props.height,
    backgroundPosition: "center",
    borderRadius: 14,
    boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.5)",
    opacity: 1,
  };
 

  return (
    <>
      <Link  to={`/detail/${props.id}`} className={classes.modalMovies} style={style}>
        {props.children}
      </Link>
    </>
  );
};
export default PopulatedMovies;

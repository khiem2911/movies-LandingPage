import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../http/moveis";
import {genericCategoris} from "../model/Generic";
const MainNavigation = () => {


 const {data} = useQuery<genericCategoris[]>({
    queryKey:['genres'],
    queryFn:()=>fetchGenres()
  })


  return (
    <div className={classes.navigation}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
            >
              CATEGORIES
            </NavLink>
            <ul className={classes.sub_menu}>
              {data?.map((item)=><li> <Link to={`categorie/${item.id}`}>{item.name}</Link></li>)}
            </ul>
          </li>
          <li>
            <NavLink
              to="/4"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              RECOMMENDED
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/5"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              NEWS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainNavigation;

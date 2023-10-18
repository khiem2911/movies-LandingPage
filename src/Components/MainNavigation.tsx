import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
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
              to="/2"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CATEGORIES
            </NavLink>
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

import Button from "../UI/Button";
import classes from "./Footer.module.css";
import { FaTwitter, FaFacebook, FaYoutube,FaGooglePlusG,FaGithub  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={classes.container_footer}>
      <h2>Signup For Newsletter</h2>
      <div className={classes.content_footer}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora rem deleniti fuga modi impedit nulla alias minus placeat!</p>
        <div className={classes.register}>
        <input placeholder="Your name" className={classes.input}></input>
        <input placeholder="Your mail" className={classes.input}></input>
        <Button>Sign Up</Button>
        </div>
      </div>
      <div className={classes.container_link}>
        <p>Copyright @ 2023 MoviesLandingPage</p>
        <ul className={classes.list}>
            <li><FaTwitter/></li>
            <li><FaFacebook/></li>
            <li><FaYoutube/></li>
            <li><FaGooglePlusG/></li>
            <li><FaGithub/></li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;

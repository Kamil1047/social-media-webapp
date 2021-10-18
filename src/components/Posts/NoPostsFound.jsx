import { Link } from "react-router-dom";
import classes from "./NoPostFound.module.css";

const NoPostsFound = () => {
  return (
    <div className={classes.noposts}>
      <p>No posts found!</p>
      <Link className={classes.btn} to="/addpost">
        Add a post
      </Link>
    </div>
  );
};

export default NoPostsFound;

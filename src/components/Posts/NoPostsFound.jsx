import { Link } from "react-router-dom";
import classes from "./NoPostFound.module.css";

/******************* 
@Purpose : If there are no post data found it will display below text
@Parameter : {}
@Author : INIC
******************/

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

import classes from "./NotFound.module.css";

/******************* 
@Purpose : It will display page not found page
@Parameter : {}
@Author : INIC
******************/

const NotFound = () => {
  return (
    <div className={classes.div_container}>
      <p className={classes.content}>Page Not Found!</p>
    </div>
  );
};

export default NotFound;

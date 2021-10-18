import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import classes from "./Navigation.module.css";

/******************* 
@Purpose : It will display navigation bar
@Parameter : {}
@Author : INIC
******************/

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar className={classes.navbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className={classes.links} to="/">
              Social Posts
            </NavLink>
          </Typography>
          <NavLink
            activeStyle={{ color: "#95bcf0" }}
            className={classes.links}
            to="/posts"
          >
            Posts
          </NavLink>
          <NavLink
            activeStyle={{ color: "#95bcf0" }}
            className={classes.links}
            to="/addpost"
          >
            Add Post
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;

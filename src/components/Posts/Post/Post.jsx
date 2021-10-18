import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory, Link } from "react-router-dom";
import { deletePost, likePost } from "../../../redux/Actions/actions";
import classes from "./Post.module.css";

/******************* 
@Purpose : It is used to display all post data
@Parameter : {props}
@Author : INIC
******************/

const Post = (props) => {
  const imageId = Math.floor(Math.random() * 10) + 1;
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = (id) => {
    dispatch(deletePost(id));
  };

  const likeHandler = () => {
    setLike(!like);
    dispatch(likePost({ like }, props.id));
  };

  return (
    <Grid item md={6} xs={12} xl={4} sm={12} key={props.id}>
      <Card className={classes.grid_post}>
        <CardMedia
          component="img"
          width="auto"
          height="300px"
          className={classes.post_img}
          image={`https://picsum.photos/200/30${imageId}`}
          alt="Random Images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.post_desc}
          >
            {props.message}
          </Typography>
          <span className={classes.read_data}>
            <Link to={`/postdetail/${props.id}`}>Read More</Link>
          </span>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className={classes.icon_class}
            onClick={() => likeHandler()}
          >
            {props.like ? <ThumbUpAltIcon /> : <ThumbUpOutlinedIcon />}
          </Button>
          <Button
            className={classes.edit_btn}
            onClick={() => history.push(`/editpost/${props.id}`)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            onClick={() => deleteHandler(props.id)}
            className={classes.delete_btn}
          >
            <DeleteOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;

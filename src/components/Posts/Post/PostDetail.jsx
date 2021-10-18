import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSinglePost } from "../../../redux/Actions/actions";
import classes from "./PostDetail.module.css";

/******************* 
@Purpose : It is used to display single post detail
@Parameter : {}
@Author : INIC
******************/

const Postdetail = () => {
  const imageId = Math.floor(Math.random() * 10) + 1;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  return (
    <Grid className={classes.post_detail} container>
      <Grid item md={12} xs={12} xl={12} sm={12}>
        <Card xl={12}>
          <CardMedia
            component="img"
            width="auto"
            height="300px"
            className="post_img"
            image={`https://picsum.photos/200/30${imageId}`}
            alt="Reandom Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h3">
              Title: {post.title}
            </Typography>
            <p className={classes.post_message}>Message: {post.message}</p>
            <p className={classes.post_time}>
              Posted At:
              {post.createdAt &&
                new Date(post.createdAt.seconds * 1000).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Postdetail;

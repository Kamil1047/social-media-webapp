import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Postdetail = () => {
  const { id } = useParams();

  return (
    <Card>
      <CardMedia
        component="img"
        width="auto"
        height="300px"
        className="post_img"
        image={`https://picsum.photos/200/30${id}`}
        alt="Reandom Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="post_desc"
        >
          Message
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Postdetail;

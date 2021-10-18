import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Button, TextField, Container } from "@mui/material";
import postImg from "../../assets/images/postImg.gif";
import { addPost } from "../../redux/Actions/actions";
import classes from "./styles.module.css";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  message: "",
  like: false,
  createdAt: new Date(),
};
const Addpostform = () => {
  const [post, setPost] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const InputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!post.title || !post.message) {
      return toast.error("Please fill all fields");
    }

    dispatch(addPost(post));
    history.push("/");
    toast.success("Post added successfully");
    clearData();
  };

  const clearData = () => {
    setPost(initialState);
  };
  return (
    <Container>
      <div className={classes.form_card}>
        <Grid container direction="row" justify="flex-between" item xs={12}>
          <Grid item sm={6}>
            <img src={postImg} alt="post figure" height="300px" />
          </Grid>
          <Grid item sm={6}>
            <form
              autoComplete="off"
              className={classes.post_form}
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                className={classes.form_textfield}
                name="title"
                variant="outlined"
                label="Title"
                onChange={InputChange}
                fullWidth
                required
              />
              <TextField
                name="message"
                className={classes.form_textfield}
                variant="outlined"
                label="Message"
                onChange={InputChange}
                fullWidth
                multiline
                rows={4}
                required
              />
              <Button
                className={classes.button_submit}
                variant="contained"
                size="large"
                type="submit"
                fullWidth
              >
                Add Post
              </Button>
              <Button
                className={classes.button_clear}
                onClick={clearData}
                variant="contained"
                size="large"
                type="reset"
                fullWidth
              >
                Clear
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Addpostform;

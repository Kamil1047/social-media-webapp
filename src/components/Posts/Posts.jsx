import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/Actions/actions";
import Post from "./Post/Post";
import CardUI from "../UI/CardUI";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoPostsFound from "./NoPostsFound";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.data.posts.reverse());
  const state = useSelector((state) => state.data);
  const { loading } = state;

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (posts.length === 0) {
    return <NoPostsFound />;
  }
  return (
    <CardUI>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          message={post.message}
          like={post.like}
        />
      ))}
    </CardUI>
  );
};

export default Posts;

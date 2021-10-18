import * as types from "./actionType";
import db from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const postsCollectionRef = collection(db, "posts");

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const postDelete = () => ({
  type: types.DELETE_POST,
});

const postAdd = () => ({
  type: types.ADD_POST,
});

const getPost = (post) => ({
  type: types.GET_SINGLE_POST,
  payload: post,
});

const postEdit = () => ({
  type: types.EDIT_POST,
});

const postLike = () => ({
  type: types.LIKE_POST,
});

export const loadPosts = () => {
  return async function (dispatch) {
    const data = await getDocs(postsCollectionRef);
    dispatch(getPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    try {
      addDoc(postsCollectionRef, post);
      dispatch(postAdd(post));
      toast.success("Post added successfully", { theme: "colored" });
    } catch {
      toast.error("Something went wrong", { theme: "colored" });
    }
  };
};
export const editPost = (post, id) => {
  return async (dispatch) => {
    try {
      const postDoc = doc(postsCollectionRef, id);
      const newData = post;
      await updateDoc(postDoc, newData);
      dispatch(postEdit());
      toast.success("Post updated successfully", { theme: "colored" });
    } catch {
      toast.error("Something went wrong", { theme: "colored" });
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const postDoc = doc(postsCollectionRef, id);
      await deleteDoc(postDoc);
      dispatch(postDelete());
      dispatch(loadPosts());
      toast.success("Post deleted successfully", { theme: "colored" });
    } catch {
      toast.error("Something went wrong", { theme: "colored" });
    }
  };
};

export const getSinglePost = (id) => {
  return async (dispatch) => {
    try {
      const docRef = doc(postsCollectionRef, id);
      const docSnap = await getDoc(docRef);
      dispatch(getPost(docSnap.data()));
    } catch {
      toast.error("Something went wrong", { theme: "colored" });
    }
  };
};

export const likePost = (post, id) => {
  return async (dispatch) => {
    try {
      const postDoc = doc(postsCollectionRef, id);
      const newData = post;
      await updateDoc(postDoc, newData);
      dispatch(postLike());
      dispatch(loadPosts());
    } catch {
      toast.error("Something went wrong", { theme: "colored" });
    }
  };
};

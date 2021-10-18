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
    addDoc(postsCollectionRef, post);
    dispatch(postAdd(post));
  };
};
export const editPost = (post, id) => {
  return async (dispatch) => {
    const postDoc = doc(postsCollectionRef, id);
    const newData = post;
    await updateDoc(postDoc, newData);
    dispatch(postEdit());
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const postDoc = doc(postsCollectionRef, id);
    await deleteDoc(postDoc);
    dispatch(postDelete());
    dispatch(loadPosts());
  };
};

export const getSinglePost = (id) => {
  return async (dispatch) => {
    const docRef = doc(postsCollectionRef, id);
    const docSnap = await getDoc(docRef);
    dispatch(getPost(docSnap.data()));
  };
};

export const likePost = (post, id) => {
  return async (dispatch) => {
    const postDoc = doc(postsCollectionRef, id);
    const newData = post;
    await updateDoc(postDoc, newData);
    dispatch(postLike());
    dispatch(loadPosts());
  };
};

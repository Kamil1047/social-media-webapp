import { lazy } from "react";
import Home from "../pages/Home";
const Addpost = lazy(() => import("../pages/AddPost"));
const Postdetail = lazy(() => import("../components/Posts/Post/PostDetail"));
const UpdatePost = lazy(() => import("../pages/UpdatePost"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Routes = [
  {
    path: ["/", "/posts"],
    component: Home,
    exact: true,
  },
  {
    path: "/addpost",
    component: Addpost,
    exact: true,
  },
  {
    path: "/editpost/:id",
    component: UpdatePost,
    exact: true,
  },
  {
    path: "/postdetail/:id",
    component: Postdetail,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    exact: true,
  },
];

export default Routes;

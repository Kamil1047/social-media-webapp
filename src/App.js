import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
// import Postdetail from "./components/Posts/Post/PostDetail";
import Home from "./pages/Home";
// import Addpost from "./pages/AddPost";
// import UpdatePost from "./pages/UpdatePost";
import Layout from "./components/Layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addpost = lazy(() => import("./pages/AddPost"));
const Postdetail = lazy(() => import("./components/Posts/Post/PostDetail"));
const UpdatePost = lazy(() => import("./pages/UpdatePost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const App = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/">
            <Redirect to="/posts" />
          </Route>
          <Route exact path="/posts" component={Home} />
          <Route exact path="/addpost" component={Addpost} />
          <Route exact path="/editpost/:id" component={UpdatePost} />
          <Route path="/postdetail/:id" component={Postdetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;

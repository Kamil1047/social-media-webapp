import { Route, Switch } from "react-router";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./components/routes";

const App = () => {
  const routes = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <ToastContainer position="top-center" />
        <Switch>{routes}</Switch>
      </Suspense>
    </Layout>
  );
};

export default App;

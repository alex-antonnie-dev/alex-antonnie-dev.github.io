import {lazy} from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import ImageGrid from "../components/ImageGrid";
// import Home from "../components/Home";
// import PageNotFound from "../components/PageNotFound";

const Movies    = lazy(() => import("../modules/movies"));
const HomePage  = lazy(() => import("../modules/homePage"));
const ErrorPage = lazy(() => import("../modules/errorPage"));


function MoviesRoute(){

return(
    <Router>
      <Routes>
        <Route index element={<Movies/>} />
        <Route path="/" element={<Movies/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
  }

  export default MoviesRoute;
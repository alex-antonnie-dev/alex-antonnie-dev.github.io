import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";

function MoviesRoute(){

return(
    <Router>
      <Routes>
        <Route index element={<ImageGrid />} />
        <Route path="/" element={<ImageGrid/>} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
  }

  export default MoviesRoute;
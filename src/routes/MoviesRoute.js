import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";

function MoviesRoute(){

return(
    <Router>
      <Routes>
        {/* <Route index element={<ImageGrid />} /> */}
        <Route path="/dg-movies-list" element={<ImageGrid/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/error404" element={<Error404 />} />
        <Route path="/error403" element={<Error403 />} /> */}
        {/* <Route path="/community-tabs-iframe" element={<CommunityForumTabs />} /> */}
      </Routes>
    </Router>
  );
  }

  export default MoviesRoute;
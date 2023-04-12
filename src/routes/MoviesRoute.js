import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";

function MoviesRoute(){
  
  const pathname = window.location.pathname;
  let basename = process.env.REACT_APP_BASENAME || '';
  const matched = pathname.match(/^\/[^/]+\/student-dashboard/);
  if (matched) {
    basename = matched.toString();
  }
  console.log('basename', basename);

return(
    <Router basename={basename}>
      <Routes>
        <Route index element={<ImageGrid />} />
        <Route path="/" element={<ImageGrid/>} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
  }

  export default MoviesRoute;
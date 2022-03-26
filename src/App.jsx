import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Courses } from "./components/course";
import { About } from "./components/about";
import { Blog } from "./components/blog";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes >
          <Route path="/" element={<Header data={landingPageData.Header} />}>
          </Route>
          <Route path="/course" element={<Courses data={landingPageData.Course} />}>
          </Route>
          <Route path="/about" element={<About data={landingPageData.About} />}>
          </Route>
          <Route path="/blog" element={<Blog data={landingPageData.Blog} itemsPerPage={4} />}>
          </Route>
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />}>
          </Route>
        </Routes >
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import "./css/navbar.css";
import "./css/navigation.css";
import "./css/home.css";
import "./css/video.css";
import "./css/videoDetail.css";
import "./css/search.css";
import "./css/loadingImage.css";
import "@fortawesome/fontawesome-free/js/all.js";
import dotenv from "dotenv";
import Home from "./routes/home";
import Navigation from "./components/navigation";
import VideoDetail from "./routes/videoDetail";
import Navbar from "./components/navbar";
import Search from "./routes/search";
import Sport from "./routes/sport";
import Education from "./routes/education";
import News from "./routes/news";
import Comedy from "./routes/comedy";
dotenv.config();

function App() {
  console.log(`app`);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="body-container">
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/popular/sport" component={Sport} />
          <Route path="/popular/education" component={Education} />
          <Route path="/popular/news" component={News} />
          <Route path="/popular/comedy" component={Comedy} />
          <Route path="/video/:id" component={VideoDetail} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

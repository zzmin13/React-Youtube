import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import "./css/navbar.css";
import "./css/navigation.css";
import "./css/videos.css";
import "./css/video.css";
import "./css/videoDetail.css";
import "@fortawesome/fontawesome-free/js/all.js";
import dotenv from "dotenv";
import Home from "./routes/home";
import Navigation from "./components/navigation";
import VideoDetail from "./routes/videoDetail";
import Navbar from "./components/navbar";
import Search from "./routes/search";
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
          <Route path="/video/:id" component={VideoDetail} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import "@fortawesome/fontawesome-free/js/all.js";
import dotenv from "dotenv";
import Navbar from "./components/navbar/navbar";
import Navigation from "./components/navigation/navigation";
import Home from "./routes/home/home";
import Education from "./routes/education/education";
import Sport from "./routes/sport/sport";
import News from "./routes/news/news";
import Comedy from "./routes/comedy/comedy";
import VideoDetail from "./routes/videoDetail/videoDetail";
import Search from "./routes/search/search";

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

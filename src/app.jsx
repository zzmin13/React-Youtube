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

function App({ youtube }) {
  console.log(`app`);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="body-container">
          <Navigation />
          <Route
            path="/"
            exact={true}
            render={() => <Home youtube={youtube} />}
          />
          <Route
            path="/popular/sport"
            render={() => <Sport youtube={youtube} />}
          />
          <Route
            path="/popular/education"
            render={() => <Education youtube={youtube} />}
          />
          <Route
            path="/popular/news"
            render={() => <News youtube={youtube} />}
          />
          <Route
            path="/popular/comedy"
            render={() => <Comedy youtube={youtube} />}
          />
          <Route
            path="/video/:id"
            render={(props) => <VideoDetail youtube={youtube} {...props} />}
          />
          <Route
            path="/search"
            render={(props) => <Search youtube={youtube} {...props} />}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

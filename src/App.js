import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import ImagePage from "./pages/ImagePage";
import VideoPage from "./pages/VideoPage";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Route path="/" exact component={ImagePage} />
        <Route path="/videoPage" component={VideoPage} />
      </MainLayout>
    </HashRouter>
  );
}

export default App;

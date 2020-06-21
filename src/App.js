import React from "react";
import { HashRouter, Route } from "react-router-dom";
import ConversionPage from "./pages/ConversionPage";
import DataPage from "./pages/DataPage";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Route path="/" exact component={ConversionPage} />
        <Route path="/data" component={DataPage} />
      </MainLayout>
    </HashRouter>
  );
}

export default App;

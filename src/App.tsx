import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import store from "./store";
// import "./App.css";
import Header from "./component/Header/Header";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

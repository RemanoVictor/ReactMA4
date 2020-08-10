import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import Nav from "./components/nav";

export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="[ container-fluid ]">
          <div className="[ row ] [ navigation ]">
            <div className="[ col-sm-12 ]">
              <Nav />
            </div>
          </div>
        </div>
        <div className="[ container-fluid ]">{props.children}</div>
      </div>
    </Provider>
  );
}

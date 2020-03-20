import React, { useState } from "react";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import Nav from "./components/nav";
import Login from "./pages/Login";

export default function App(props) {
  const [isloggedin, setisloggedin] = useState(false);

  function updateLogin() {
    setisloggedin(true);
  }

  function logOut() {
    setisloggedin(false);
    sessionStorage.clear();
  }

  return sessionStorage.getItem("username") === "cameron" &&
    sessionStorage.getItem("password") === "chikipowpow!" ? (
    <div className="App">
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-10 ]">
            <Nav />
          </div>
          <div className="[ col-sm-2 ]">
            <button onClick={logOut} className="btn btn-default">
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div className="[ container-fluid ]">{props.children}</div>
    </div>
  ) : (
    <>
      <Login updateLoginStatus={updateLogin} />
    </>
  );
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//components
import HomeAbout from "./HomeAbout";
import Workflow from "../workflow/Workflow";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="h2_cont">
            <h2>Dejan Markovic</h2>
          </div>
          <div className="h3_cont">
            <h3>
              <span>J</span>
              avascript Developer.
            </h3>
            <p>
              I`m in web programing for about a year. I`m working Javascript,
              React, Node. This is my portfolio site, and here you can see and
              track all my works and projects. Also, this site is one big MERN
              application.
            </p>
            <div className="login_and_register_btn_cont">
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
        <HomeAbout />
        <Workflow />
      </React.Fragment>
    );
  }
}

export default Home;

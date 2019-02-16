import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>Youtube Keyword Feed</h1>
        </div>
        <div className="main-content">
          <div className="container">
            <div className="container-item">
              <img src="#" />
              <div className="title">Bu başlık</div>
            </div>
            <div className="container-item">
              <img src="#" />
              <div className="title">Bu başlık</div>
            </div>
            <div className="container-item">
              <img src="#" />
              <div className="title">Bu başlık</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>Great Footer</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;

import React, { Component } from "react";
import ContainerItem from "./ContainerItem";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>Youtube Keyword Feed</h1>
        </div>
        <div className="main-content">
          <div className="search-container">
            <div className="search-fields">
              <input type="text" name="keyword" />
              <button>Ekle</button>
            </div>
          </div>
          <div className="container">
            <ContainerItem />
            <ContainerItem />
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

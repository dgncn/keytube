import React, { Component } from "react";

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
            <div className="container-item">
              <div className="item-detail">
                <img src="#" alt="k" />
                <div className="title">
                  <a href="http://youtube.com">Bu başlık</a>
                </div>
              </div>
              <div className="item-detail">
                <img src="#" alt="k" />
                <div className="title">
                  <a href="http://youtube.com">Bu başlık</a>
                </div>
              </div>
              <div className="item-detail">
                <img src="#" alt="k" />
                <div className="title">
                  <a href="http://youtube.com">Bu başlık</a>
                </div>
              </div>
            </div>
            <div className="container-item">
              <img src="#" alt="k" />
              <div className="title">Bu başlık</div>
            </div>
            <div className="container-item">
              <img src="#" alt="k" />
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

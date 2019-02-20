import React, { Component } from "react";

class ItemDetail extends Component {
  render() {
    return (
      <div className="item-detail">
        <div className="item-image">
          <img src="https://via.placeholder.com/50/008000" alt="k" />
        </div>
        <div className="title">
          <a href="http://youtube.com">Bu başlık {this.props.name}</a>
        </div>
      </div>
    );
  }
}

export default ItemDetail;

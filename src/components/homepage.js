import React, { Component } from "react";
import ContainerItem from "./ContainerItem";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", keyList: [] };

    this.getText = this.getText.bind(this);
    this.addKey = this.addKey.bind(this);
  }

  getText(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  addKey() {
    const { inputValue } = this.state;

    this.setState(state => {
      const list = [...state.keyList, inputValue];

      return {
        keyList: list,
        inputValue: ""
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>Youtube Keyword Feed</h1>
        </div>
        <div className="main-content">
          <div className="search-container">
            <div className="search-fields">
              <input
                type="text"
                name="keyword"
                value={this.state.inputValue}
                onChange={event => this.getText(event)}
              />
              <button type="button" onClick={this.addKey}>
                Ekle
              </button>
            </div>
          </div>
          <div className="container">
            {this.state.keyList.map((keyItem, index) => {
              return <ContainerItem key={index} items={obj.ids} />;
            })}
            <ContainerItem items={obj.ids} />
            <ContainerItem items={obj.ids} />
          </div>
        </div>
        <div className="footer">
          <span>Great Footer</span>
        </div>
      </React.Fragment>
    );
  }
}

const obj = {
  ids: ["hey", "lol", "ck"]
};

export default Homepage;

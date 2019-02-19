import React from "react";
import ItemDetail from "./ItemDetail";
class ContainerItem extends React.Component {
  render() {
    return (
      <div className="container-item">
        <ItemDetail myprop={elem.name} />
        <ItemDetail />
        <ItemDetail />
      </div>
    );
  }
}

const elem = {
  name: "Ad"
};

export default ContainerItem;

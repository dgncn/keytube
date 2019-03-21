import React from "react";
import ItemDetail from "./ItemDetail";
class ContainerItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-item">
          {this.props.items.map((item, i) => {
            return <ItemDetail key={i} name={item} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ContainerItem;

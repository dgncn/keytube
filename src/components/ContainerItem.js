import React from "react";
import ItemDetail from "./ItemDetail";
class ContainerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-item">
          {this.props.items.map((item, i) => {
            //console.log("Entered");
            // Return the element. Also pass key
            return <ItemDetail key={i} name={item} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ContainerItem;

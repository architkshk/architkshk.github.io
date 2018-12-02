import React from "react";

const DesignCard = props => {
  return (
    <div className="design-card">
      <img className="design-card-img" src={props.design.img} />
    </div>
  );
};
export default DesignCard;

import React from "react";
import Header from "../Header/header";
import designs from "./design-details";
import DesignCard from "./design-card";

const Designs = () => {
  return (
    <div className="main-inner">
      <Header title="Designs" />
      <div className="designs">
        <div className="content">
          {designs.map((s, a) => {
            return <DesignCard key={a} design={s} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Designs;

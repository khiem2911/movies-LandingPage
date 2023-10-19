import Generics from "../../model/Generic";
import React from "react";
import clasess from "./Generic.module.css";

const Generic: React.FC<Generics> = (props) => {
  return (
    <div className={clasess.generic}>
      <span>
        <ul className={clasess.list}>
          {props.items?.map((item)=><li>{item}</li>)}
        </ul>
      </span>
    </div>
  );
};
export default Generic;

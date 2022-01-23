import React from "react";

import "./BasicComponents.scss";

function Heading({ title, color, className }) {
  return (
    <h4 className={`${color ? color : "text-light"} ${className} my-3`}>
      {title}
    </h4>
  );
}

const Devider = () => {
  return <div className="devider"></div>;
};

export { Heading, Devider };

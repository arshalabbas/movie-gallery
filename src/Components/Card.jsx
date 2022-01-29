import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

export default function Card({ loaded, id, title, lang, img, category, year }) {
  return loaded ? (
    <Link to={`/download?id=${id}`} style={{ textDecoration: "none" }}>
      <div className="custom-card my-md-2">
        <img src={img} alt="banner" />
        <div className="gradient"></div>

        <div className="card-group mx-2">
          <h3>{title}</h3>
          <p>
            {year} ‧ {category}
          </p>
          <p>{lang}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="custom-card my-md-2">
      <div className="gradient"></div>
      <h3 className="my-auto mx-auto text-dark d-md-none">Loading...</h3>
    </div>
  );
}

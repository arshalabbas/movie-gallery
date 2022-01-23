import React, { useState, useEffect } from "react";

import queryString from "query-string";

export default function Download() {
  const [movieID, setMovieID] = useState("");

  useEffect(() => {
    const { id } = queryString.parse(window.location.search);

    setMovieID(id);
  }, []);

  return (
    <div className="page">
      <h1 className="text-center">Download page</h1>
      <video controls width="100%">
        <source
          src={`https://filetolinkbot0.herokuapp.com/${movieID}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

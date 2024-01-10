import React from "react";
import { useParams } from "react-router-dom";

function Search() {
  const { title } = useParams();
  return <div>{title}</div>;
}

export default Search;

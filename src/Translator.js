import React, { useState } from "react";
import "./Translator.css";

export default function Translator() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert("Searching");
  }

  return (
    <div className="Translator">
      <form onSubmit={search}>
        <imput type="search" autofocus={true} />
      </form>
    </div>
  );
}

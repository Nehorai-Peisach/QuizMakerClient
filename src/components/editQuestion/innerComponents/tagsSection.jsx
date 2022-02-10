import React from "react";
import "../../../styles/editQuestion/innerStyles/tagsSection.css";

const tagsSection = (props) => {
  return (
  <div className="tagsSection__main">
      <p>Tags:</p>
      <div className="tagsSection__input">
          <input type="text" placeholder="Tags here"></input>
      </div>
  </div>
    )
};

export default tagsSection;

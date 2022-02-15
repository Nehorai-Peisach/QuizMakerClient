import React from "react";
import "../../../styles/editQuestion/innerStyles/tagsSection.css";

const tagsSection = (props) => {
  const onTagsChange = (event) => {
    props.onTagsChange(event.target.value);
  };
  return (
    <div className="tagsSection__main">
      <p>Tags:</p>
      <div className="tagsSection__input">
        <input
          type="text"
          placeholder="Tags here"
          onChange={onTagsChange}
        ></input>
      </div>
    </div>
  );
};

export default tagsSection;

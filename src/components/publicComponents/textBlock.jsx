import React, { useState } from 'react';

const TextBlock = (props) => {
  const onEditorStateChange = (event) => {
    props.onMessageChange(event.getCurrentContent().getPlainText());
  };

  return (
    <div className="textBlock_main">
      <div className="textBlock_title">
        <p className={props.className}>{props.title}</p>
      </div>
      <div className="textBlock_editor">

      </div>
    </div>
  );
};

export default TextBlock;

// import { useEffect, useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';

// const WysiwygComponent = (props) => {
//   const [input, setInput] = useState('component__wysiwyg__input green');
//   const isRequired = props.isRequired !== undefined ? props.isRequired : true;

//   const onEditorStateChange = (event) => {
//     props.setValue(event.getCurrentContent().getPlainText());
//   };

//   useEffect(() => {
//     !isRequired
//       ? setInput('component__wysiwyg__input green')
//       : props.value && props.value.length > 0
//       ? setInput('component__wysiwyg__input green')
//       : setInput('component__wysiwyg__input red');
//   }, [props.value]);

//   return (
//     <div className="component">
//       <div className="component__wysiwyg__text">{props.children}</div>
//       <div className={input}>
//         <Editor onEditorStateChange={onEditorStateChange} value={props.value} />
//       </div>
//     </div>
//   );
// };

// export default WysiwygComponent;

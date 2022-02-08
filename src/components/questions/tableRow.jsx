import './questions.css';
import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <div className='question-table-row'>
          <div className='id'>22</div>
          <div className='text'>What is the DOM?</div>
          <div className='update'>10/12/2018</div>
          <div className='type'>Single</div>
          <div className='num'>1</div>
          <div className='buttons'>
              <button>Show</button>
              <button>Edit</button>
              <button>Duplicate</button>
              <button>Delete</button>
          </div>
      </div>
    );
  }
}

export default TableRow;

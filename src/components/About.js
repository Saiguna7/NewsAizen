import React from "react";

export default function About(props) {
  let mystyle={color: props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'
}
  return (
    <div className="container"  >
        <h1 className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
             Word Counter gives a way to analyze your text quickly and efficiently.To count the word and character .
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
             Word Counter is a free character counter tool that provides instant character  & word count statistics for a given text. Word Counter reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This Word Counter software works in any web browsers such as Chrome,Brave,Firefox,Internet Explorer, Safari, Opera.It suits to count characters and words in facebook, blog, books, excel document, pdf document, essays,etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

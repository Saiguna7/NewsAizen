import React, { Component } from "react";

export class Newsitem extends Component {
    
  render() {
    let { title, description,imgurl,newsurl, mode,author,date,source} = this.props;
    const buttonTextColor = mode === "dark" ? "btn-dark"  : "btn-secondary" ;
    const cardStyles = {
      backgroundColor: mode === 'dark' ? 'black' : 'white',
      color: mode === 'dark' ? 'white' : 'black',border: mode === 'dark'?'1px solid':null
    };
   
    const titleStyles = {
      color: mode === 'dark' ? 'white' : 'black'
    };

    const descriptionStyles = {
      backgroundColor: mode === 'dark' ? 'black' : 'white',
      color: mode === 'dark' ? 'white' : 'black'
    };
    return (
      <div className="my-3">
        <div className="card" style={{...cardStyles}}>
          <img src={imgurl?imgurl:"https://i.ndtvimg.com/i/2017-01/akhilesh-yadav-650-pti_650x400_71485268343.jpg"} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title" style={titleStyles}>{title}...   <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}> {source}
  </span></h5>
            <p className="card-text" style={descriptionStyles}>{description}...</p>
            <p className="card-text"><small className={`text-body-${{color:mode==='dark'?'light':'secondary'}}`}>By {!author?"Unknown":author}  on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className={`btn btn-sm ${buttonTextColor}`}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

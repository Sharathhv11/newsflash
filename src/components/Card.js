import React, { Component } from "react";
import defalut_url from '../../src/components/assets/default-thumnill.jpg' 

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(true);
    return (
      <div className="card" onClick={this.redirect} style={this.props.sty}>
        <div className="image-container">
          {/* <img src={this.props.imgSrc} alt="image" /> */}
          <img src={this.props.imgSrc?this.props.imgSrc:defalut_url} alt="image" />
        </div>

        <div className="title">
          {this.props.title.slice(0,200)}...
          </div>
        <div className="source-redirect">
          <div className="source">
            <span>
          {this.props.source.slice(0,20)}
          </span>
          <span>
          {this.props.published.split("T")[0]}
          </span>
          </div>
          <button id="read">
            <a href={this.props.url} target="_blank">read</a>
          </button>
        </div>
      </div>
    );
  }
}

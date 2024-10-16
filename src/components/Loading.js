import React, { Component } from "react";
import loading from "../../src/components/assets/loading.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={loading} alt="loading" style={this.props.style} />
      </div>
    );
  }
}

export class SkelitonLoader extends Component {
  render() {
    return (
      <div className="card-skeliton">
        <div className="img-skeliton"></div>
        <div className="card-info-skeliton">
          <div className="date-source-skeliton">
            <div></div>
            <div></div>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

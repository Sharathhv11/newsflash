import React, { Component } from "react";
import Mode from "./assets/dark-theme.svg";
import NavLogo from '../../src/components/assets/nav-logo.png';
export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleOnchnage = (event) => {
    this.props.country(event.target.value);
  };
  render() {
    return (
      <>
        <div className="nav-container" style={this.props.sty}>
          <div className="nav-items">
            <ul>
              <li>
               
                <img src={NavLogo} alt="News Flash" />
              </li>

              <li>
                <a style={this.props.sty} href="#about" id="about">about us</a>
              </li>

            
            </ul>
          </div>
          <div className="theme">
            <button style={this.props.sty} onClick={this.props.modeHandler}>
              <img id="mode" src={Mode} alt="logo" style={this.props.inv} />
              <span id="current-mode">{this.props.inv.text}</span>
            </button>
            <div className="dropdown-country">
              <select
                name="country"
                id="country"
                style={this.props.sty}
                onChange={this.handleOnchnage}
              >
                <option value="in">India</option>
                <option value="us">america</option>
                <option value="au">australia</option>
                <option value="cn">china</option>
                <option value="eg">england</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
}

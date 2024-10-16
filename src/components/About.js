import React, { Component } from "react";
import Plus from "../../src/components/assets/plus.svg";

export default class About extends Component {
  
  handelAbout = (event) => {
    event.currentTarget.lastElementChild.classList.toggle("hidden");

    const elements = document.querySelectorAll(".information");
    Array.from(elements).forEach((v)=>{
      if(!(v.lastElementChild===event.currentTarget.lastElementChild) && !(v.lastElementChild.classList.contains("hidden"))){
        v.lastElementChild.classList.toggle("hidden");
      }
        
    })
  };

  render() {
    const imgMode = {
      filter: this.props.imgMode,
    };
    return (
      <div id="about" className="About" style={this.props.body}>
        <h1>About App</h1>
        <div className="information" style={this.props.sty} onClick={this.handelAbout}>
          <div className="infoH" >
            <span>
              <h2>App Info</h2>
            </span>
            <span>
              <img src={Plus} alt="view" style={imgMode} />
            </span>
          </div>
          <div className="infoC hidden">
            <p>
              This news application was created as a personal project for
              learning and practicing React. It aims to provide the latest
              updates and breaking news from around the world, while offering a
              seamless and intuitive user experience.
            </p>
            {/* <p>
              While this app is functional, please note that it is primarily developed for personal use and learning purposes. As such, it might not meet the standards of a production app and has limited requests for API calls.
            </p> */}
          </div>
        </div>

        <div className="information" style={this.props.sty} onClick={this.handelAbout}>
          <div className="infoH" >
            <span>
              <h2>Technology Utilized</h2>
            </span>
            <span>
              <img src={Plus} alt="view" style={imgMode} />
            </span>
          </div>
          <div className="infoC hidden">
            <ol>
              <li>
                React.js - A JavaScript library for building user interfaces
              </li>
              <li>React Router - For handling routing in the application</li>
              <li>Axios - For making HTTP requests to fetch news data</li>
              <li>
                CSS Modules - For styling components in a modular and reusable
                manner
              </li>
              <li>
                Redux - For managing the application's state (if applicable)
              </li>
              <li>
                React Hooks - For managing component state and side effects
              </li>
            </ol>
          </div>
        </div>

        <div className="information" style={this.props.sty} onClick={this.handelAbout}>
          <div className="infoH" >
            <span>
              <h2>Features</h2>
            </span>
            <span>
              <img src={Plus} alt="view" style={imgMode} />
            </span>
          </div>
          <div className="infoC hidden">
            <ol>
              <li>Real-time news updates from multiple sources</li>
              <li>Category-based news filtering</li>
              <li>Country-based news filtering</li>
              <li>Customizable themes (light and dark mode)</li>
              <li>Responsive design for mobile and desktop views</li>
              <li>User-friendly interface with intuitive navigation</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

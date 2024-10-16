import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import Catagory from "./components/Catagory.js";
import About from "./components/About.js";


// import { BrowserRouter,Router,Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: {
        color: "black",
        backgroundColor: "#d9e2e4",
      },
      modeInvert: {
        filter: "invert(0)",
        text: "Light",
      },
      body:{
        color:'black',
        backgroundColor:'white'
      },
      card:{
        color:'black',
        backgroundColor:"#e4faff"
      },
      country:"in",
      category:'general',
    };

    this.handelMode = this.handelMode.bind(this);
  }

  handelMode() {
    if (this.state.theme.color === "black") {
      this.setState({
        theme: {
          color: "#d9e2e4",
          backgroundColor: "black",
        },
        modeInvert: {
          filter: "invert(1)",
          text: "Dark",
        },
        body:{
          color:'white',
          backgroundColor:'#382a2a'
        },
        card:{
          color:'white',
          backgroundColor:"black"
        }
      });
    } else {
      this.setState({
        theme: {
          color: "black",
          backgroundColor: "#d9e2e4",
        },
        modeInvert: {
          filter: "invert(0)",
          text: "Light",
        },
        body:{
          color:'black',
          backgroundColor:'white'
        },
        card:{
          color:'black',
          backgroundColor:"#e4faff"
        }
      });
    }
  }

  handelCountry =  (value)=>{
    this.setState({
      country:value
    })
    // console.log(this.state.country);

  }

  handelCategory = (value)=>{
    this.setState({
      category:value,
    })
    
  }

  render() {
    return (
      <>
        <Navbar
          sty={this.state.theme}
          modeHandler={this.handelMode}
          inv={this.state.modeInvert}
          
          country={this.handelCountry}
        />
        <Catagory upCategory={this.handelCategory}/>
        <Dashboard sty={this.state.body} card={this.state.card} perpage={16} spin={this.state.modeInvert}  cCountry = {this.state.country} placeCategory={this.state.category}/>
        <hr />
        <About sty={this.state.theme} imgMode={this.state.modeInvert.filter} body={this.state.body} />
      
      </>
    );
  }
}

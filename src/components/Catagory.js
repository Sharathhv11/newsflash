import React, { Component } from 'react'
import Menu from '../../src/components/assets/menu.svg'
export default class Catagory extends Component {
  constructor(props){
    super(props);
  }

  handelOnClick = (event)=>{
    
    this.props.upCategory(event.target.innerText)
  }
  render() {
    
    return (
      <div className="Catagory">
        <ul  >
       
            <li onClick={this.handelOnClick}>general</li>
            <li onClick={this.handelOnClick}>business</li>
            <li onClick={this.handelOnClick}>entertainment</li>
            <li onClick={this.handelOnClick}>sports</li>
            <li onClick={this.handelOnClick}>health</li>
            <li onClick={this.handelOnClick}>science</li>
            <li onClick={this.handelOnClick}>technology</li>
        </ul>
      </div>
    )
  }
}







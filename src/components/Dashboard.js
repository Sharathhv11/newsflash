import React, { Component } from "react";
import Card from "./Card";

import PropTypes from "prop-types";
import Loading,{SkelitonLoader} from "./Loading";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchKey: "us",
      page: 1,
      total: 1,
      loading: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.cCountry !== prevState.searchKey) {
      return { searchKey: nextProps.cCountry };
    }
    return null; // Return null if no state needs to be updated
  }


  static defaultProps = {
    news: [],
    searchKey: "in",
  };

  fetchNews = async ()=> {
    
    try {
      this.setState({
        loading: true,
      });

    

      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${this.state.searchKey}&category=${this.props.placeCategory}&apiKey=23a0f15a814c48efb0e98a1dc21b712a&pageSize=${this.props.perpage}`
      );

      const dataInJson = await data.json();
      this.setState({
        news: dataInJson.articles,
        total: dataInJson.totalResults,
        loading: false,
      });
      
    } catch (error) {
      console.log(error);
    }
  }

  handelNexPre = async (value) => {
    this.setState({
      loading: true,
    });
    try {
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.state.searchKey
        }&category=${this.props.placeCategory}&apiKey=23a0f15a814c48efb0e98a1dc21b712a&pageSize=${
          this.props.perpage
        }&page=${value ? this.state.page + 1 : this.state.page - 1}`
      );
      const dataInJson = await data.json();
      this.setState({
        news: dataInJson.articles,
        page: value ? this.state.page + 1 : this.state.page - 1,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handelNext = (event) => {
   
    
    if (
      !(Math.ceil(this.state.total / this.props.perpage) < this.state.page + 1)
    ) {
        if(Math.ceil(this.state.total / this.props.perpage) === this.state.page +1){
           event.target.classList.add('end');
           
        }
        event.target.previousSibling.classList.remove("end");
        this.handelNexPre(true);
        
    }
  };

  handelPrevious = (event) => {
    if(!(this.state.page <= 1)){
        
        event.target.nextSibling.classList.remove("end");
        this.handelNexPre(false);
    }if(this.state.page <= 2){
        event.target.classList.add('end');
    }
  };

  render() {
    const skeletonArr = Array.from({length:this.props.perpage*1});
    return (
      <div className="dashboard" style={this.props.sty}>
        <div className="search">
          <h1>
            Top Headlines-{this.state.searchKey.toUpperCase()}
          </h1>
        </div>
        {this.state.loading && <div className="loader-container">
          {
            skeletonArr.map((_,index) =>{
                return <SkelitonLoader key={index}/>
            })
          }
        </div> }
        {/* {this.state.loading && <Loading  style={this.props.spin}/> } */}
     
          {!this.state.loading && this.state.news.length>0 &&(
            <div className="news-session">
              {this.state.news.map(
                (item, index) =>
                  item.title !== "[Removed]" && (
                    <Card
                      sty={this.props.card}
                      key={index}
                      title={item.title}
                      imgSrc={item.urlToImage}
                      source={item.author}
                      url={item.url}
                      published={item.publishedAt}
                    />
                  )
              )}
            </div>
          )}
        
        <div className="navigator">
          <button className="end"  onClick={this.handelPrevious}>
            previous
          </button>
          <button onClick={this.handelNext}>next</button>
        </div>
      </div>
    );
  }

  

  async componentDidMount(){
    this.fetchNews();
  }

  async componentDidUpdate(props,state){
    if((this.state.searchKey !== state.searchKey) || (this.props.placeCategory !== props.placeCategory)){
           this.setState(
                {
                    page:1,
                }
            );
            this.fetchNews();
  }
}
}

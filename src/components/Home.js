import React, { Component } from "react";
import '../App.css'
import {  Segment, Search , Grid  } from "semantic-ui-react";
const _ = require('lodash')
const resultRenderer = ({name , id , images}) => {
  return (
    <div className="result" key={id}>
         <div className="image">
            <img src={images[1] && images[1].url} />
         </div>
       <div className="content">
         <div className="title">{name}</div>
       </div>
    </div>
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: "",
      isLoading: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
      console.log(nextProps.artists)
      if(nextProps.artists && nextProps.artists.length > 0)
        return {...prevState, results : nextProps.artists}
      return prevState;
  }
  handleSearchChange = (e, { value }) => {
      if(value.length > 0)
        this.props.searchArtist(value);  
      
      this.setState({
            value
      })

  };
  handleResultSelect = (e, { result }) =>{
    this.setState({ value: result.name });
  }

  render() {
    const { isLoading, value, results } = this.state;
    return (
        <Grid inverted style={{marginTop:20}}> 
          <Grid.Column width={6}>
            <Search
              loading={isLoading}
              size="huge"
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              resultRenderer={resultRenderer}
              value={value}
              {...this.props}
            />
          </Grid.Column>
          <Grid.Column width={10}>
              
          </Grid.Column>
        </Grid>
    );
  }
}

import React, { Component } from 'react';
import NavBar from './NavBar';
import { Grid } from '@material-ui/core/Grid';
import './App.css';
import FamilyGrid from './Family/FamilyGrid';

class App extends Component {
  state = {
    familyList: [],
  }
  constructor(props){
    super(props)
   
    this.fetchFamilies();
  }

  fetchFamilies = function() {
    fetch("https://localhost:5001/api/Families")
    .then( response=> response.json())
    .then(data=>this.setState({familyList: data}))
  }

  componentDidMount(){
    //console.log('component did mount')
  }

  render() {
      return (
        <div className="App">
        Hello world
        <NavBar />
        <br />
        <FamilyGrid
          familyList={this.state.familyList}
         />
  {/*
            <Grid 

            // spacing={40}
            // direction="column"
            // justify="center"
            // alignItems="center"
            ></Grid> (
            <Grid item>
            grid item 1
              {/* <NavBar /> */}
            {/* </Grid>
            <Grid item>
            grid item 2
              {/* <FamilyGrid  */}
              {/* familyList={this.state.familyList}
              /> */}
            {/* </Grid>
          </Grid> */} 
        </div>
      );
  }
}

export default App;

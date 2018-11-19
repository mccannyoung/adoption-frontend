import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import FamilyCard from './FamilyCard';

export default class FamilyGrid extends Component {
  constructor(props){
    super(props)
    this.displayFamilyDetailsModal = this.displayFamilyDetailsModal.bind(this)
  }

  displayFamilyDetailsModal(){
    alert("hello world!");
  }
  render() {
    return (
      <div>
            {this.props.familyList ? (
                <Grid 
                container
                justify="center"
                alignItems="center"
                spacing={16}
                >
                  {this.props.familyList.map((family) => (
                    <Grid item>
                      <FamilyCard key={family.id} family={family} openModal={this.displayFamilyDetailsModal}/>
                    </Grid>
                  ))}

                </Grid>
                ): "No families looking to adopt"
            }
      </div>
    )
  }
}

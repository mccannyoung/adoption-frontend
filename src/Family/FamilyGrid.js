import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import FamilyCard from './FamilyCard';
import FamilyDetails from './FamilyDetails';

export default class FamilyGrid extends Component {
  constructor(props){
    super(props)
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
                    <Grid item key={family.id} >
                      <FamilyCard family={family} />
                    </Grid>
                  ))}

                </Grid>
                ): "No families looking to adopt"
            }
      </div>
    )
  }
}

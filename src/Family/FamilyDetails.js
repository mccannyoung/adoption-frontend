import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  const styles = {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
  };
export const FamilyDetails = (props) => {
    
    const { classes } = props;
    return (
        <Dialog
            fullscreen
            open={props.open}
            onClose={props.handleClose}
            TransitionComponent={Transition}
      >
      <AppBar className={classes.appBar} >
            <Toolbar>
              <IconButton color="inherit" onClick={props.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        <div style={{minWidth: "100%", minHeight: "100%;"}}>
            Hello from {props.family.familyName}< br />
            {   props.family.parents.length === 2 ?  
                "We are " : "I am "
            }
            looking to adopt! <br /> 
            <h3> Here's some more information about
            {   props.family.parents.length === 2 ?  
                " us!" : " me!"
            } </h3>
            <div id="geographicData">We live</div>
            {props.family.personalStatement}
            <h3>Demographics</h3>
            <h3>{   props.family.parents[0].gender === "M" ?  
                "Dad: " : "Mom: "
            }</h3> {props.family.parents[0].firstName}! Age: {props.family.parents[0].age} Occupations: {props.family.parents[0].occupation} 
            <h3>{   props.family.parents[1].gender === "M" ?  
                "Dad: " : "Mom: "
            }</h3> {props.family.parents[1].firstName}! Age: {props.family.parents[1].age} Occupations: {props.family.parents[1].occupation} 
            <h3>Religion: </h3> {
                props.family.parents[0].religion === props.family.parents[1].religion ?
                            props.family.parents[0].religion :
                             props.family.parents[0].religion+" and " +props.family.parents[1].religion
            }
            The {props.family.familyName} family is {props.family.financial}.
         </div>
      </Dialog>
    );
};

FamilyDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(FamilyDetails);


import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import CardActions from '@material-ui/core/CardActions'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
import {styles} from '../styles'
import { renderComponent } from 'recompose';
import FamilyDetails from './FamilyDetails';
export class FamilyCard  extends React.Component {
  
  state = {
    detailModalOpen : false
  }
  constructor (props)  {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
    
   handleClick  = (e,data) =>{
        console.log(data);
        this.setState({detailModalOpen: true});
    };
    handleClose=(e,data) =>{
      this.setState({detailModalOpen: false});
    };

    render() {
      return (
        <div>
        <Card style={cardStyle} id={this.props.family.id} onClick={this.handleClick}>
          <CardContent>
            <img src="images/WhiteFamily.png" alt="icon of family" />
            <div style={styles.FamilyName}>The {this.props.family.familyName} Family</div> 
            <div style={styles.FamilyStatement}>{this.props.family.personalStatement}</div>
            <div style={styles.shareIcon}>
              <ShareOutlinedIcon /> <FavoriteBorderIcon />
            </div>
          </CardContent>
        </Card>

            <FamilyDetails 
              family= {this.props.family} 
              open={this.state.detailModalOpen}
              handleClose={this.handleClose}
             />
          </div>
      );
  };
};

const cardStyle = {
    display: 'block',
    maxWidth: 200,
    minHeight: 200,
    };

export default FamilyCard


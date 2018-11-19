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
const FamilyCard = (props) => {

  const cardStyle = {
    display: 'block',
    maxWidth: 200,
    minHeight: 200,
    };


    console.log(props);
//    handleClick  = (e,data) =>{
 //       console.log(data);
 //       props.openModal(props.family.id);
 //   };

    return (
      <Card style={cardStyle} id={props.family.id} onClick={props.openModal}>
        <CardContent>
          <img src="images/WhiteFamily.png" alt="icon of family" />
          <div style={styles.FamilyName}>The {props.family.familyName} Family</div> 
          <div style={styles.FamilyStatement}>{props.family.personalStatement}</div>
          <div style={styles.shareIcon}>
            <ShareOutlinedIcon /> <FavoriteBorderIcon />
          </div>
        </CardContent>
      </Card>
    );
};


export default FamilyCard;

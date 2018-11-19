import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import BirthParentSearchBar from './BirthParent/BirthParentSearchBar'
const NavBar = () => {
    return(
        <div>
        <AppBar position="static" className='{styles.NavBar}'>
            <Toolbar  style={{width:"100%"}} >
                <Typography variant="title" color="inherit">
                Adoption Options!   
                </Typography> 
                {/* <Typography variant="subtitle1" color="inherit" style={{float: "right"}}>
                Find an adoptive family!
                </Typography> */}
                {/* <div ><BirthParentSearchBar /></div> */}
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;

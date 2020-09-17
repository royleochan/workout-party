import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DuoIcon from '@material-ui/icons/Duo';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GroupIcon from '@material-ui/icons/Group';

export const mainListItems = (
  <div>
    <a href = "/home" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Home" />
    </ListItem>
    </a>
    <a href = "/exercise" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
        <DuoIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Exercise" />
    </ListItem>
    </a>
    <a href = "/workouts" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
    <FitnessCenterIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Workouts" />
    </ListItem>
    </a>
    <a href = "/achievements" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
      <WhatshotIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Achievements"/>
    </ListItem>
    </a>
    <a href = "/profile" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon style = {{color:"white"}}>
        <PersonIcon/>
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Profile" />
    </ListItem>
    </a>
  </div>
);
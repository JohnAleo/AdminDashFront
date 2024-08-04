import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Popup from 'reactjs-popup';
import def from "../../assets/def.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import motoricon from "../../assets/motoricon.png"
import caravanicon from "../../assets/caravanicon.jpg"
import tuningicon from "../../assets/tuningicon.png"
import usedcar from "../../assets/usedcar.png"
import campingicon from "../../assets/campingicon.jpg"
import membericon from "../../assets/membericon.png"
import LoginIcon from '@mui/icons-material/Login';
import { ButtonModal, Cancelwrapper, Container, Country, Emailwrapper, Inputwrapper, Line, Middle, MiddleLeft, MiddleRight, Namewrapper, Personal, Role, Rolewrapper, Timezone, Wrapper } from '../styles/style';
export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor:'lightblue', width:'100%', padding:'10px' }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        <MenuIcon/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box 
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <Link to="/motor" style={{textDecoration:'none'}}>
                <List>
                    <ListItem>
                        <ListItemButton >
                            <img src={motoricon} alt="motor" style={{width:'27px',height:'27px'}} />
                            <h4>Motor</h4>
                        </ListItemButton>
                    </ListItem> 
                </List>
          </Link>

          <Link to="/caravan" style={{textDecoration:'none'}}>
          <List>
              <ListItem>
                <ListItemButton>
                  <img src={caravanicon} alt="caravan" style={{width:'27px',height:'27px'}} />
                  <h4>Caravan</h4> 
                </ListItemButton>
              </ListItem> 
          </List>
          </Link>

          <Link to="/tuning" style={{textDecoration:'none'}}> 
          <List>
              <ListItem>
                <ListItemButton>
                  <img src={tuningicon} alt="tuning" style={{width:'27px',height:'27px'}} />
                  <h4>Tuning</h4> 
                  </ListItemButton>
              </ListItem> 
          </List>
          </Link>

          <Link to="/used-car" style={{textDecoration:'none'}}> 
          <List>
              <ListItem>
                <ListItemButton>
                  <img src={usedcar} alt="used" style={{width:'27px',height:'27px'}} />
                  <h4>Used-Car</h4> 
                </ListItemButton>
              </ListItem> 
          </List>
          </Link>
        
          <Link to="/camping-place" style={{textDecoration:'none'}}> 
          <List>
              <ListItem>
                <ListItemButton>
                  <img src={campingicon} alt="camping" style={{width:'27px',height:'27px'}} />
                  <h4>Camping Place</h4> 
                </ListItemButton>
              </ListItem> 
          </List>
          </Link>
          
          <Link to="/user-list" style={{textDecoration:'none'}}> 
          <List>
              <ListItem>
                <ListItemButton>
                  <img src={membericon} alt="member" style={{width:'27px',height:'27px'}} />
                  <h4>Member List</h4> 
                </ListItemButton>
              </ListItem> 
          </List>
          </Link>

          <Link to="/login"> 
          <List>
              <ListItem>
                <ListItemButton>
                  <LoginIcon />
                  <Button>Login</Button>
                </ListItemButton>
              </ListItem> 
          </List>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}

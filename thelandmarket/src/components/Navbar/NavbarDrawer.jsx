import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";


function NavbarDrawer() {

  return (
    <>
      <Drawer>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
     
    </>
  );
}

export default NavbarDrawer;

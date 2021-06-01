import React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6">My movies</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Typography variant="h6">My movies</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
import React, {useState} from 'react';
import { AppBar, Box, FormControl, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage.component';

function Navbar() {
  const [position, setPosition] = useState<string>("Full-stack Developer")

  const onPositionChange = (
    event: React.ChangeEvent<{
    value: unknown
}>) => setPosition(event.target.value)

  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Typography variant="h6">My movies</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select value={position} onChange={onPositionChange}>
                  <MenuItem value="Full-stack Developer">Full-stack Developer</MenuItem>
                  <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
                  <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
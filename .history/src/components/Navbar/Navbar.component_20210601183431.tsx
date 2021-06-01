import React, {ChangeEvent, useState} from 'react';
import { AppBar, Box, FormControl, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage.component';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  positionSelect: {
    color: "white",
    borderBottom: "1px solid white"
  }
}))

function Navbar() {
  const classes = useStyles();
  const [position, setPosition] = useState<string>("Full-stack Developer")

  const onPositionChange = (
    event: ChangeEvent<{
      value: unknown
    }>
) => setPosition(event.target.value as string)

  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Typography variant="h6">My movies</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select value={position} onChange={onPositionChange} className={classes.positionSelect}>
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
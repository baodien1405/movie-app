import React from 'react';
import { Box } from "@material-ui/core";

interface WelcomeMessageProps {
  position: string,
  country?: string
}

function WelcomeMessage({position, country="Vietnam"}: WelcomeMessageProps) {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
}

export default WelcomeMessage;
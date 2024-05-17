import { Grid, IconButton, Typography } from "@mui/material";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import React from "react";

export const NavBar = ({ setModeDark }) => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h4">Gif Expert</Typography>
      <IconButton onClick={() => setModeDark((e) => !e)}>
        <DarkModeRoundedIcon />
      </IconButton>
    </Grid>
  );
};

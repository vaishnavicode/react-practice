import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid2>
            <Link to="/" style={{ color: "white" }}>
              <Button color="inherit">Home</Button>
            </Link>
          </Grid2>
          <Grid2>
            <Link to="/history" style={{ color: "white" }}>
              <Button color="inherit">History</Button>
            </Link>
          </Grid2>
          <Grid2>
            <Link to="/users" style={{ color: "white" }}>
              <Button color="inherit">Users</Button>
            </Link>
          </Grid2>

          <Grid2 sx={{ ml: "auto" }}>
            <Link to="/adduser" style={{ color: "white" }}>
              <Button variant="outlined" color="inherit">
                Add User
              </Button>
            </Link>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

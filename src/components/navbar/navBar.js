// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h3" className="navbar__center">
          <Link to="/" className="navbar__link">Modern Walk</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

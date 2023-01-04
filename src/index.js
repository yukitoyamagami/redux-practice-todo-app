import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import roorReducers from './reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(roorReducers)

root.render(
  <Provider store={store}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TODO APP
        </Typography>
      </Toolbar>
    </AppBar>
  <App />
  </Provider>,
);

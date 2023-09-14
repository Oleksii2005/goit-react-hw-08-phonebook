import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as React from 'react';
import { Avatar, Button, TextField, Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import css from './Sign.module.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


// TODO remove, this demo shouldn't need to reset the theme.


export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const  email = data.get('email').trim()
    const  password = data.get('password').trim()
    if (!email||!password) return Notiflix.Notify.failure(`Fill in all fields`);
    dispatch(
      logIn({
         email: data.get('email'),
         password: data.get('password'),
      })
    );
   };

  return (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link className={css.link} to="/register">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
  );
}
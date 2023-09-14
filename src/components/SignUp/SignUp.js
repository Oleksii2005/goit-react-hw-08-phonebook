
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as React from 'react';
import { Avatar, Button, TextField, Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import css from '../SignIn/Sign.module.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SignUp() {
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const  name = data.get('userName').trim()
    const  email = data.get('email').trim()
    const  password = data.get('password').trim()
    if (!name||!email||!password) return Notiflix.Notify.failure(`Fill in all fields`);
    dispatch(
      register({
       name,
       email,
       password
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
            Register
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link className={css.link} to="/login">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
  );
}
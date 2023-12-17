/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const handleSubmit = () => {
    if (!passwordRef.current.value || !emailRef.current.value) {
      return;
    }
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Sign in
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            inputRef={emailRef}
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
            inputRef={passwordRef}
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
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2">
                    Don't have an account?
                </Typography>
                <Link to="/register">Sign Up</Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;

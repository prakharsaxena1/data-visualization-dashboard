/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const usernameRef: any = useRef();
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
        <Typography component="h1" variant="h5">
          Create an account
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            inputRef={usernameRef}
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            inputRef={emailRef}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            inputRef={passwordRef}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2">
                  Already have an account?
                </Typography>
                <Link to="/login">Sign in</Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;

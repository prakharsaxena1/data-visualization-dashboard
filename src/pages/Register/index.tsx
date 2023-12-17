import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Add registration logic here
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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
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
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
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

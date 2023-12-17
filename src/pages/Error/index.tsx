import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed or doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/"
        sx={{ marginTop: 2 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;

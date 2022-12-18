import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material';

const Splash = (props) => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login')
    }

    return(
        <Box
            component="main"
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%',
              my: 10
            }}
        >
          <Container maxWidth="xs">
          <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ my: 3 }}>
                <Typography
                color="textPrimary"
                variant="h3"
              >
                Welcome to Erasmust
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
                <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => goLogin()}
                >
                    Login
                </Button>
            </Box>
            </Container>
        </Box>
    );
}

export default Splash;
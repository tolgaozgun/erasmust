import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

const Splash = () => {
    const navigate = useNavigate();

    const goLoginStuff = () => {
        navigate('/loginStuff')
    }

    const goLoginStudent = () => {
        navigate('/loginStudent')
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
            <Box sx={{ py: 2 }}>
                <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => goLoginStudent()}
                >
                    For Students
                </Button>
            </Box>
            <Box sx={{ py: 2 }}>
                <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => goLoginStuff()}
                >
                    For Academic Stuff
                </Button>
            </Box>
            </Container>
        </Box>
    );
}

export default Splash;
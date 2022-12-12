import {Box, Card, CardContent, Container, Grid, Typography} from '@mui/material';
import { DashboardNavbar } from '../../components/componentsStudent/dashboard-navbar';
import { DashboardSidebar } from '../../components/componentsStudent/dashboard-sidebar';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const Erasmus = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return(
  <>
      <title>
        Erasmus Program
      </title>
    <DashboardLayoutRoot>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Erasmus Program
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            md={8}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box>
                  <Typography
                      color="textPrimary"
                      variant="h4"
                  >
                    Erasmus Application
                  </Typography>

                  View Your Erasmus Applications<br/>
                  Erasmus Application Information<br/>
                  Erasmus Appliaction FAQ
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            lg={6}
            md={8}
            xs={12}
          >
            <Card>
              <CardContent>
                <Box>
                  <Typography
                      color="textPrimary"
                      variant="h4"
                  >
                    Preapproval
                  </Typography>

                  View Your Preapprovals<br/>
                  Preapproval Information<br/>
                  Preapproval FAQ
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </DashboardLayoutRoot>
    <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <DashboardSidebar 
          onClose={() => setSidebarOpen(false)}
          open={isSidebarOpen}/>
  </>
  );
};

export default Erasmus;

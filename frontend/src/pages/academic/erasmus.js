import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../../components/componentsStudent/account/account-profile';
import { AccountProfileDetails } from '../../components/componentsStaff/account/account-profile-details';
import { DashboardNavbar } from '../../components/componentsStaff/dashboard-navbar';
import { DashboardSidebar } from '../../components/componentsStaff/dashboard-sidebar';
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
        Account | Material Kit
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
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
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

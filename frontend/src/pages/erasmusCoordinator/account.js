import {Box, Container, Grid, Typography} from '@mui/material';
import {AccountProfile} from '../../components/componentsStudent/account/account-profile';
import {AccountAdminSettings} from '../../components/componentsStudent/account/account-admin-settings';
import {AccountProfileDetails} from '../../components/componentsStudent/account/account-profile-details';
import {AccountIncomingErasmus} from '../../components/componentsStudent/account/account-incoming-erasmus';
import {AccountIncomingExchange} from '../../components/componentsStudent/account/account-incoming-exchange';
import {AccountOutgoingErasmus} from '../../components/componentsStudent/account/account-outgoing-erasmus';
import {AccountOutgoingExchange} from '../../components/componentsStudent/account/account-outgoing-exchange';
import {DashboardNavbar} from '../../components/componentsErasmusCoordinator/dashboard-navbar';
import {DashboardSidebar} from '../../components/componentsErasmusCoordinator/dashboard-sidebar';
import { Signature } from '../../components/signature';
import {styled} from '@mui/material/styles';
import React, {useState} from 'react';

const DashboardLayoutRoot = styled('div')(({theme}) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const Account = () => {
  const enableSaveChanges = true;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return(
  <>
      <title>
        Account
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
            <AccountProfile/>
          </Grid>
          <Grid
              item
              lg={8}
              md={6}
              xs={12}
          >
            <AccountProfileDetails/>
            <Signature />
            {/* <AccountAdminSettings/>
            <AccountIncomingErasmus/>
            <AccountIncomingExchange/>
            <AccountOutgoingErasmus/>
            <AccountOutgoingExchange/> */}

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

export default Account;

import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from '../../components/componentsAdmin/dashboard/latest-orders';
import { Sales } from '../../components/componentsAdmin/dashboard/sales';
import { DashboardNavbar } from '../../components/componentsAdmin/dashboard-navbar';
import { DashboardSidebar } from '../../components/componentsAdmin/dashboard-sidebar';
import React, { useState } from 'react';
import {styled} from '@mui/material/styles';
import {Link, Outlet} from "react-router-dom";

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const DashboardAdmin = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  return(
  <>
    
      <title>
        Dashboard | Material Kit
      </title>
    <DashboardLayoutRoot>
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
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

export default DashboardAdmin;
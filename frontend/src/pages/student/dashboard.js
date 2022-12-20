import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from '../../components/componentsStudent/dashboard/latest-orders';
import { Sales } from '../../components/componentsStudent/dashboard/sales';
import { DashboardNavbar } from '../../components/componentsStudent/dashboard-navbar';
import { DashboardSidebar } from '../../components/componentsStudent/dashboard-sidebar';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import StudentErasmusApplicationList from "./ErasmusApplication/StudentErasmusApplications";
import StudentErasmusApplications from "./ErasmusApplication/StudentErasmusApplications";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const DashboardStudent = (props) => {
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
            <StudentErasmusApplications />
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

export default DashboardStudent;

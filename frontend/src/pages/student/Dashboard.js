import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../../componentsStudent/dashboard/budget';
import { LatestOrders } from '../../componentsStudent/dashboard/latest-orders';
import { LatestProducts } from '../../componentsStudent/dashboard/latest-products';
import { Sales } from '../../componentsStudent/dashboard/sales';
import { TasksProgress } from '../../componentsStudent/dashboard/tasks-progress';
import { TotalCustomers } from '../../componentsStudent/dashboard/total-customers';
import { TotalProfit } from '../../componentsStudent/dashboard/total-profit';
import { TrafficByDevice } from '../../componentsStudent/dashboard/traffic-by-device';
import { DashboardNavbar } from '../../componentsStudent/dashboard-navbar';
import { DashboardSidebar } from '../../componentsStudent/dashboard-sidebar';
import { useState } from 'react';
import { styled } from '@mui/material/styles';


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

export default DashboardStudent;
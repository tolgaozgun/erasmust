import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../../components/dashboard/budget';
import { LatestOrders } from '../../components/dashboard/latest-orders';
import { LatestProducts } from '../../components/dashboard/latest-products';
import { Sales } from '../../components/dashboard/sales';
import { TasksProgress } from '../../components/dashboard/tasks-progress';
import { TotalCustomers } from '../../components/dashboard/total-customers';
import { TotalProfit } from '../../components/dashboard/total-profit';
import { TrafficByDevice } from '../../components/dashboard/traffic-by-device';
import { DashboardNavbar } from '../../components/dashboard-navbar';
import { DashboardSidebar } from '../../components/dashboard-sidebar';
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
  const { children } = props;
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
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
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
      {children}
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
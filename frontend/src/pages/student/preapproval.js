import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../components/componentsStudent/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Preapprovals} from "../../components/componentsStudent/dashboard/preapprovals";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const Preapproval= () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
    <> <title>
        Preapproval
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
                            lg={12}
                            md={12}
                            xl={15}
                            xs={12}
                        >
                            <Preapprovals />
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
}

export default Preapproval
import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsStudent/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {PreapprovalsList} from "../../../components/componentsStudent/dashboard/preapprovals-list";


const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const Preapprovals = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
    <> <title>
        Preapprovals
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
                            <PreapprovalsList />
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

export default Preapprovals
import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Students} from "../../../components/componentsAdmin/lists/students";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentEdits = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>  
            <title>
                Student
            </title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        alignItems: "center",
                        display: 'flex',
                        width: '100%',
                        flexGrow: 1,
                        minHeight: "100%",
                        py: 8
                    }}
                >
                    <Container
                        maxWidth="lg"
                    >
                        <Grid
                            container
                            justifyContent="center"
                            spacing={3}
                            sx={{
                                ml: 5
                            }}
                        >
                            <Grid
                                item
                                lg={10}
                                md={12}
                                xl={15}
                                xs={12}
                                sx={{
                                    display: "flex"
                                }}
                            >
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

export default StudentEdits
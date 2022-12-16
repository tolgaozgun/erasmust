import {
    Box, Button,
    Container,
    Grid,
    Step, StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../../components/componentsStudent/dashboard-sidebar';
import {FormStudentInfo} from '../../components/componentsStudent/forms/form-student-info';
import {
    FormSemesterInfo
} from '../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/form-semester-info';
import {FormSchoolInfo} from '../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/form-school-info';

import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {Check} from "@mui/icons-material";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));


const ViewErasmusApplication = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);


    return (
        <>
            <title>
                Erasmus Application
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
                            sx={{mb: 5}}
                            align="center"
                            variant="h4"
                        >
                            Erasmus Application
                        </Typography>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <FormStudentInfo editable={false}/>
                                <FormSemesterInfo editable={false}/>
                                <FormSchoolInfo editable={false}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
        </>
    );
};

export default ViewErasmusApplication;

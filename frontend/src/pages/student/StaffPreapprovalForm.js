import {
    Box, Button,
    Container,
    Grid, Stack,
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
import {FormExchangeInfo} from '../../components/componentsStudent/forms/exchange/form-exchange-info';
import {FormCourseInfo} from '../../components/componentsStudent/forms/exchange/preapprovalForm/form-course-info';

import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {Check} from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const QontoConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(
    ({theme, ownerState}) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#784af4',
        }),
        '& .QontoStepIcon-completedIcon': {
            color: '#784af4',
            zIndex: 1,
            fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
    })
);


const Preapproval = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const courses = require('../../lessons.json');

    return (
        <>
            <title>
                Preapproval Form
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
                            Review Preapproval Form
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


                                <FormStudentInfo/>
                                <FormExchangeInfo/>
                                <FormCourseInfo courses={courses}/>

                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    style={{justifyContent: "center"}}>
                                    <Button variant="contained" size="large" startIcon={<DoneIcon/>}>
                                        Accept
                                    </Button>
                                    <Button variant="contained" size="large" startIcon={<CloseIcon/>}>
                                        Reject
                                    </Button>
                                </Stack>
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

export default Preapproval;

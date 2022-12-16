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
import {DashboardNavbar} from '../../../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../../../components/componentsStudent/dashboard-sidebar';
import {
    StudyProgrammeInfo
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/BeforeMobility/study-programme-info';
import {
    SendingInstitutionRecognition
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/BeforeMobility/sending-institution-recognition';
import {
    LanguageCompetence
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/language-competence';


import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {
    ViewLearningStudentInfo
} from "../../../components/componentsStudent/info/erasmus/learningAgreement/view-learning-student";
import {
    ViewSendingInstitutionInfo
} from "../../../components/componentsStudent/info/erasmus/learningAgreement/view-sending-institution-info";
import {
    ViewReceivingInstitutionInfo
} from "../../../components/componentsStudent/info/erasmus/learningAgreement/view-receiving-institution-info";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const ViewBeforeMobility = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <title>
                View Learning Agreement
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
                            View Learning Agreement Form - Before Mobility
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
                                <ViewLearningStudentInfo
                                />
                                <ViewSendingInstitutionInfo
                                />
                                <ViewReceivingInstitutionInfo/>

                                <StudyProgrammeInfo/>

                                <LanguageCompetence
                                />

                                <SendingInstitutionRecognition/>


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

export default ViewBeforeMobility;

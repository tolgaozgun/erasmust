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
    LearningStudentInfo
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/form-learning-student';
import {
    SendingInstitutionInfo
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/sending-institution-info';
import {
    ReceivingInstitutionInfo
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/receiving-institution-info';
import {
    ReceivingInstitutionOutcomes
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/AfterMobility/receiving-institution-outcomes';
import {
    SendingInstitutionOutcomes
} from '../../../components/componentsStudent/forms/erasmus/learningAgreement/AfterMobility/sending-institution-outcomes';


import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {Check} from "@mui/icons-material";
import {FormExchangeInfo} from "../../../components/componentsStudent/forms/exchange/form-exchange-info";
import courses from "../../../lessons.json";

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


const BeforeMobility = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(0)
    const [stepCompleted, setStepCompleted] = useState([
        false, false, false
    ])
    const [isValid, setIsValid] = useState([
        false, false, false
    ])

    const courses = require('../../../lessons.json');

    const handleStep = (step, state) => {
        switch (state) {
            case true:
                completeStep(step)
                setValid(step)
                break;
            case false:
                unCompleteStep(step)
                unsetValid(step)
                break;
        }
    }

    function QontoStepIcon(props) {
        const {active, className, icon} = props;
        return (
            <QontoStepIconRoot ownerState={{active}} className={className}>
                {stepCompleted[icon - 1] ? (
                    <Check className="QontoStepIcon-completedIcon"/>
                ) : (
                    <div className="QontoStepIcon-circle"/>
                )}
            </QontoStepIconRoot>
        );
    }

    const completeStep = (step) => {
        let newArray = stepCompleted;
        newArray[step] = true;
        setStepCompleted(newArray)
    }

    const setValid = (step) => {
        let newArray = isValid;
        newArray[step] = true;
        setIsValid(newArray)
    }

    const unsetValid = (step) => {
        let newArray = isValid
        newArray[step] = false
        setIsValid(newArray)
    }

    const unCompleteStep = () => {
        let newArray = stepCompleted;
        newArray[activeStep] = false;
        setStepCompleted(newArray)
    }

    const stepClickHandler = (step) => () => {
        setActiveStep(step);
    };

    const nextStepHandler = () => {
        setActiveStep(activeStep + 1)

    }

    const previousStepHandler = () => {
        setActiveStep(activeStep - 1)
    }


    const steps = [
        'Study Programme at Receiving Institution',
        'Recognition at Sending Institution'];

    return (
        <>
            <title>
                Learning Agreement
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
                            Learning Agreement Form - After Mobility
                        </Typography>

                        <Stepper nonLinear alternativeLabel activeStep={activeStep} connector={<QontoConnector/>}>
                            {steps.map((label, index) => (
                                <Step key={index} completed={stepCompleted[index]}>
                                    <StepLabel StepIconComponent={QontoStepIcon} completed={stepCompleted[index]}>
                                        <StepButton onClick={stepClickHandler(index)}>
                                            {label}
                                        </StepButton>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
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


                                <ReceivingInstitutionOutcomes
                                    courses={courses}
                                    hidden={activeStep !== 0}
                                    step={0}
                                    handleStep={(state) => {
                                        handleStep(0, state)
                                    }}/>

                                <SendingInstitutionOutcomes
                                    courses={courses}
                                    hidden={activeStep !== 1}
                                    step={1}
                                    handleStep={(state) => {
                                        handleStep(1, state)
                                    }}/>

                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    {activeStep > 0
                                        &&
                                        <Button onClick={previousStepHandler}>{"< Back"}</Button>
                                    }
                                    <Box sx={{flex: '1 1 auto'}}>

                                        {activeStep !== steps.length - 1 ? (
                                            <Button onClick={nextStepHandler}>
                                                {"Next >"}
                                            </Button>
                                        ) : (
                                            <Button>
                                                {"Finish"}
                                            </Button>
                                        )
                                        }
                                    </Box>
                                </Box>
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

export default BeforeMobility;

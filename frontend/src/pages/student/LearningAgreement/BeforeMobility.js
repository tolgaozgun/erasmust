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
import {Check} from "@mui/icons-material";
import {FormExchangeInfo} from "../../../components/componentsStudent/forms/exchange/form-exchange-info";
import courses from "../../../lessons.json";
import {getIn, useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

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

const data = {
    name: "Tolga",
    surname: "Özgün",
    dateOfBirth: new Date(),
    nationality: "Turkish",
    sex: "M",
    academicYear: "2022-2023",
    sending: {
        name: "Bilkent University",
        faculty: "Faculty of Engineering",
        erasmusCode: "ANKARA07",
        department: "Computer Engineering",
        address: "UNIVERSITELER MAH. BILKENT UNIVERSITESI - 06800 CANKAYA/ANKARA",
        countryWithCode: "Turkey, TR",
        contactPersonName: "Can Alkan",
        contactPersonDetails: "calkan@cs.bilkent.edu.tr"
    },
    bilkentCourses: [
        {
            courseName: "BILKENTNAME",
            courseCode: "BILKENTCODE",
            courseCredits: 1.1,
            bilkentCourse: "",
        }
    ],
    hostCourses: [
        {
            courseName: "HOSTNAME",
            courseCode: "HOSTCODE",
            courseCredits: 1.1,
            bilkentCourse: "XX",
        }
    ],

}


const BeforeMobility = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(0)
    const [stepCompleted, setStepCompleted] = useState([
        false, false, false
    ])
    const [isValid, setIsValid] = useState([
        false, false, false
    ])


    const formik = useFormik({
        initialValues: {
            studyCycle: "",
            subjectAreaCode: "",
            language: "",
            competence: "",
            receiving: {
                name: "",
                faculty: "",
                erasmusCode: "",
                department: "",
                address: "",
                countryWithCode: "",
                contactPersonName: "",
                contactPersonDetails: "",
            },
        },
        validationSchema: Yup.object({
            studyCycle: Yup
                .string()
                .max(20)
                .required("Study cycle is required"),
            subjectAreaCode: Yup
                .string()
                .max(50)
                .required("Subject Area, Code is required"),
            language: Yup
                .string()
                .max(255)
                .required("Language name is required"),
            competence: Yup
                .string()
                .max(10)
                .required('Competence level is required'),
            receiving: Yup.object().shape({
                name: Yup
                    .string()
                    .max(255)
                    .required("Name is required"),
                faculty: Yup
                    .string()
                    .max(255)
                    .required("Faculty is required"),
                erasmusCode: Yup
                    .string()
                    .max(12)
                    .required("StudentErasmusPage Code is required"),
                department: Yup
                    .string()
                    .max(255)
                    .required("Department is required"),
                address: Yup
                    .string()
                    .max(500)
                    .required("Address is required"),
                countryWithCode: Yup
                    .string()
                    .max(40)
                    .required("Country & Country Code is required"),
                contactPersonName: Yup
                    .string()
                    .max(20)
                    .required("Study cycle is required"),
                contactPersonDetails: Yup
                    .string()
                    .max(50)
                    .required("Contact Person Details is required"),
            }),

        }),
        onSubmit: async (values, formikHelpers) => {
            await axios.post("http://92.205.25.135:4/auth/login", values)
                .then((response) => {
                    if (response && response.data) {
                        const jwtToken = response.data["token"]
                        const role = response.data["role"]
                        sessionStorage.setItem("jwtToken", jwtToken)
                        sessionStorage.setItem("role", role)
                        // navigate('/dashboardStudent')
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        console.log("Error: ", err)
                    }
                })
        },
    });

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

    const competenceChange = (competence) => {
        formik.setFieldValue("competence", competence)
    }

    const steps = ['Student Information',
        'Sending Institution Information',
        'Receiving Institution Information',
        'Study Programme at Receiving Institution',
        'Language Competence',
        'Recognition at Sending Institution'];

    console.log("Values")
    console.log(formik.values)

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
                            Learning Agreement Form - Before Mobility
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


                                <LearningStudentInfo
                                    hidden={activeStep !== 0}
                                    setData={data}
                                    values={formik.values}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                <SendingInstitutionInfo
                                    hidden={activeStep !== 1}
                                    values={data.sending}
                                />
                                <ReceivingInstitutionInfo
                                    hidden={activeStep !== 2}
                                    values={getIn(formik.values, "receiving")}
                                    touched={getIn(formik.touched, "receiving")}
                                    errors={getIn(formik.errors, "receiving")}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />

                                <StudyProgrammeInfo
                                    hidden={activeStep !== 3}
                                    values={data.hostCourses}
                                />

                                <LanguageCompetence
                                    hidden={activeStep !== 4}
                                    values={formik.values}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    competenceChange={competenceChange}
                                />

                                <SendingInstitutionRecognition
                                    hidden={activeStep !== 5}
                                    values={data.bilkentCourses}
                                />

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

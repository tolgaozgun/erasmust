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
import React, {useEffect, useState} from 'react';
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

const prefetchData = {
    outGoingStudent: {
        id: 0,
        firstName: "",
        lastName: "",
        dateOfBirth: new Date(),
        nationality: "",
        academicYear: "",
        gender: "M",
    },
    bilkentInformation: {
        nameBilkent: "",
        facultyBilkent: {
            id: 0,
            name: ""
        },
        erasmusCodeBilkent: "",
        departmentBilkent: "",
        addressBilkent: "",
        countryCodeBilkent: "",
        contactPersonFirstNameBilkent: "",
        contactPersonLastNameBilkent: "",
        contactPersonEmailBilkent: "",
        contactPersonPhoneNumberBilkent: "",
        contactPersonFunctionBilkent: "",
    },
    bilkentCourses: [],
    hostCourses: [],

}

const BeforeMobility = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(0)
    const [stepCompleted, setStepCompleted] = useState([
        false, false, false
    ])
    const [isValid, setIsValid] = useState([
        false, false, false
    ])
    const [initialData, setInitialData] = useState(prefetchData)

    const [faculties, setFaculties] = useState([])

    const token = sessionStorage.getItem("jwtToken")

    const formik = useFormik({
        initialValues: {
            studyCycle: "",
            subjectArea: "",
            language: "",
            languageLevel: "",
            receivingInstitutionInformation: {
                nameHost: "",
                facultyHost: {
                    id: 0,
                },
                erasmusCodeHost: "",
                departmentHost: "",
                addressHost: "",
                countryCodeHost: "",
                contactPersonFirstNameHost: "",
                contactPersonLastNameHost: "",
                contactPersonEmailHost: "",
                contactPersonPhoneNumberHost: "",
                contactPersonFunctionHost: "",
            },
        },
        validationSchema: Yup.object({
            studyCycle: Yup
                .string()
                .max(20)
                .required("Study cycle is required"),
            subjectArea: Yup
                .string()
                .max(50)
                .required("Subject Area is required"),
            language: Yup
                .string()
                .max(255)
                .required("Language name is required"),
            languageLevel: Yup
                .string()
                .max(10)
                .required('Competence level is required'),
            receivingInstitutionInformation: Yup.object({
                nameHost: Yup
                    .string()
                    .max(255)
                    .required("Name is required"),
                facultyHost: Yup.object({
                    id: Yup
                        .number()
                        .required("Faculty is required")
                }),
                erasmusCodeHost: Yup
                    .string()
                    .max(12)
                    .required("Host Erasmus Code is required"),
                departmentHost: Yup
                    .string()
                    .max(255)
                    .required("Host Department is required"),
                addressHost: Yup
                    .string()
                    .max(500)
                    .required("Address is required"),
                countryCodeHost: Yup
                    .string()
                    .max(40)
                    .required("Country & Country Code is required"),
                contactPersonFirstNameHost: Yup
                    .string()
                    .max(20)
                    .required("Host Contact Person's First Name is required"),
                contactPersonLastNameHost: Yup
                    .string()
                    .max(20)
                    .required("Host Contact Person's Last Name is required"),
                contactPersonEmailHost: Yup
                    .string()
                    .max(50)
                    .required("Contact Person Details is required"),
                contactPersonPhoneNumberHost: Yup
                    .string()
                    .max(50)
                    .required("Contact Person Details is required"),
                contactPersonFunctionHost: Yup
                    .string()
                    .max(50)
                    .required("Contact Person Details is required"),
            }),
        }),
        onSubmit: async (values, formikHelpers) => {
            await axios.patch("http://92.205.25.135:8080/learning-agreement-erasmus/edit/" + props.appId, values, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((response) => {
                    console.log("onSubmit1")
                    if (response && response.data) {
                        console.log("onSubmit2")

                        console.log(response.data)
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

    useEffect(() => {
        axios.get("http://92.205.25.135:8080/learning-agreement-erasmus/get-initial", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {

                    let data = {};
                    data["bilkentInformation"] = res.data.bilkentInformation;
                    data.outGoingStudent = res.data.outGoingStudent;
                    data.bilkentCourses = []
                    data.hostCourses = []
                    res.data["mobilityCourseForms"].map((mobilityCourseForm, index) => {
                        data.bilkentCourses.push(mobilityCourseForm["courseBilkent"])
                        data.hostCourses.push(mobilityCourseForm["courseHost"])
                    })
                    setInitialData(data)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, []);


    useEffect(() => {
        axios.get("http://92.205.25.135:8080/faculty/all", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    var i;
                    for (i = 0; i < res.data.length; i++) {
                        var item = res.data[i]
                        if (item.name) {
                            item.label = item.name
                        }

                        setFaculties(oldArray => [...oldArray, item])

                        console.log(res.data);
                    }
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, []);

    useEffect(() => {
        formik.setFieldValue("studyCycle", props.edit.studyCycle)
        formik.setFieldValue("subjectArea", props.edit.subjectArea)
        formik.setFieldValue("language", props.edit.language)
        formik.setFieldValue("languageLevel", props.edit.languageLevel)
        formik.setFieldValue("receivingInstitutionInformation", props.edit.receivingInstitutionInformation)
    }, [])

    console.log("Formik errors")
    console.log(formik.errors)

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
        formik.setFieldValue("languageLevel", competence)
    }

    const facultyChange = (facultyId) => {
        formik.setFieldValue("receivingInstitutionInformation.facultyHost.id", facultyId)
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
        <form onSubmit={formik.handleSubmit}>
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
                            Edit Learning Agreement Form - Before Mobility
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
                                    initialData={initialData}
                                    setData={initialData["outGoingStudent"]}
                                    values={formik.values}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                <SendingInstitutionInfo
                                    hidden={activeStep !== 1}
                                    values={initialData.bilkentInformation}
                                />
                                <ReceivingInstitutionInfo
                                    hidden={activeStep !== 2}
                                    values={getIn(formik.values, "receivingInstitutionInformation")}
                                    touched={getIn(formik.touched, "receivingInstitutionInformation")}
                                    errors={getIn(formik.errors, "receivingInstitutionInformation")}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    faculties={faculties}
                                    facultyChange={facultyChange}
                                />

                                <StudyProgrammeInfo
                                    hidden={activeStep !== 3}
                                    values={initialData["hostCourses"]}
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
                                    values={initialData["bilkentCourses"]}
                                />

                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    {activeStep > 0
                                        &&
                                        <Button onClick={previousStepHandler}>{"< Back"}</Button>
                                    }
                                    <Box sx={{flex: '1 1 auto'}}>

                                        {activeStep !== steps.length - 1 && (
                                            <Button onClick={nextStepHandler}>
                                                {"Next >"}
                                            </Button>
                                        )}
                                        {activeStep === steps.length - 1 && (
                                            <Button type="submit">
                                                {"Submit"}
                                            </Button>
                                        )}
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
        </form>
    );
};

export default BeforeMobility;

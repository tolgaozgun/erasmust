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
import {FormStudentInfo} from '../../../components/componentsStudent/forms/form-student-info';
import {FormExchangeInfo} from '../../../components/componentsStudent/forms/exchange/form-exchange-info';
import {FormCourseInfo} from '../../../components/componentsStudent/forms/exchange/preapprovalForm/form-course-info';

import {styled} from '@mui/material/styles';
import React, {useEffect, useState} from 'react';
import {Check} from "@mui/icons-material";
import {useFormik} from "formik";
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

const readyData = {
    name: "Tolga",
    surname: "Özgün",
    starsId: 22003850,
    department: "Computer Engineering",
    hostName: "EPFL",
    academicYear: "2022-2023",
    semester: "FALL",
}


const StudentCreateErasmusPreapproval = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(0)
    const [stepCompleted, setStepCompleted] = useState([
        false, false, false
    ])
    const [isValid, setIsValid] = useState([
        false, false, false
    ])
    const [courses, setCourses] = useState([])
    const token = localStorage.getItem("jwtToken")

    useEffect(() => {
        axios.get("http://92.205.25.135:8080/course/all-bilkent-courses", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    var i;
                    for (i = 0; i < res.data.length; i++) {
                        console.log("Item fetched!")
                        var item = res.data[i]

                        let name = item.name;
                        item.label = name;


                        setCourses(oldArray => [...oldArray, item])

                        console.log(res.data);
                        console.log("Item placed on array!");
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
        axios.get("http://92.205.25.135:8080/pre-approval/erasmus/get/initial-values", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, []);


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

    const handleFirstStep = (state) => {
        handleStep(0, state)
    }

    const handleSecondStep = (state) => {
        handleStep(1, state)
    }

    const handleThirdStep = (state) => {
        handleStep(2, state)
    }


    const formik = useFormik({
        initialValues: {
            forms: [
                {
                    courseHostName: "",
                    courseHostCode: "",
                    courseHostCredit: 0.0,
                    courseBilkentId: 0,
                }
            ]
        },
        validationSchema: Yup.object({
            forms: Yup.array().of(
                Yup.object().shape(
                    {
                        courseHostCode: Yup
                            .string()
                            .required("Course Code is required"),
                        courseHostCredit: Yup
                            .number()
                            .min(0)
                            .required("Course Credits is required"),
                        courseHostName: Yup
                            .string()
                            .required("Course Name is required"),
                        courseBilkentId: Yup
                            .number()
                            .min(0)
                            .required("Bilkent Course is required"),
                    },
                    'Course is invalid',
                ),
            ),
        }),
        onSubmit: async (values, formikHelpers) => {
            let token = localStorage.getItem("jwtToken")
            await axios.post("http://92.205.25.135:8080/pre-approval/erasmus/save", values, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((response) => {
                    if (response && response.data) {
                        console.log(response.data)
                        // const jwtToken = response.data["token"]
                        // const role = response.data["role"]
                        // localStorage.setItem("jwtToken", jwtToken)
                        // localStorage.setItem("role", role)
                        // navigate('/dashboardStudent')
                    }
                })
                .catch((err) => {
                    console.log("Formik error1")
                    if (err && err.response) {
                        console.log("Formik error")
                        console.log(err)
                        console.log(err.response)

                    }
                })
        },
    });

    console.log("Errors")
    console.log(formik.errors)

    const addCourse = () => {
        let length = formik.values.courses.length
        const component = {courseHostCode: '', courseHostCredit: 0.0, courseHostName: '', courseBilkentId: 0}
        formik.setFieldValue(`forms.${length}`, component)
        formik.values.courses.push(component)
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

    const setCourse = (index, field, value) => {
        formik.setFieldValue(`forms[${index}].${field}`, value)
    }

    const steps = ['Student Information', 'Program Information', 'Courses'];

    return (
        <form onSubmit={formik.handleSubmit}>
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
                            Preapproval Form
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


                                <FormStudentInfo
                                    hidden={activeStep !== 0}
                                    values={readyData}
                                />
                                <FormExchangeInfo
                                    hidden={activeStep !== 1}
                                    values={readyData}
                                />
                                <FormCourseInfo
                                    courses={courses}
                                    values={formik.values}
                                    touched={formik.touched}
                                    errors={formik.errors}
                                    hidden={activeStep !== 2}
                                    addCourse={addCourse}
                                    setCourse={setCourse}/>

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
                                        {activeStep === steps.length - 1 &&
                                            <Button type="submit">
                                                {"Finish"}
                                            </Button>
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
        </form>
    );
};

export default StudentCreateErasmusPreapproval;

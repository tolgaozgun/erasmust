import {
    Box, Button, CircularProgress,
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
import {
    ErasmusStudentInfo
} from '../../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/erasmus-student-info';
import {
    FormSemesterInfo
} from '../../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/form-semester-info';
import {
    FormSchoolInfo
} from '../../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/form-school-info';

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


const ErasmusApplication = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(0)
    const [stepCompleted, setStepCompleted] = useState([
        false, false, false
    ])
    const [isValid, setIsValid] = useState([
        false, false, false
    ])
    const [schools, setSchools] = useState([])

    const emptySchoolComponent = (
        {
            id: 0,
        }
    )

    const readyData = {
        name: "Tolga",
        surname: "Özgün",
        starsId: 22003850,
        department: "Computer Engineering",
    }

    const formik = useFormik({
        initialValues: {
            academicYear: "",
            semester: "",
            schools: [
                emptySchoolComponent
            ]
        },
        validationSchema: Yup.object({
            academicYear: Yup
                .string()
                .max(255)
                .required("Academic year is required"),
            semester: Yup
                .string()
                .max(10)
                .required('Semester is required'),
            schools: Yup.array().of(
                Yup.object().shape(
                    {
                        id: Yup
                            .number()
                            .min(0)
                            .required("School is required"),
                    },
                    'Course is invalid',
                ),
            ),
        }),
        onSubmit: async (values, formikHelpers) => {
            let token = sessionStorage.getItem("jwtToken")
            await axios.post("http://92.205.25.135:4/erasmus-application/create", values, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((response) => {
                    if (response && response.data) {
                        console.log(response.data)
                        // const jwtToken = response.data["token"]
                        // const role = response.data["role"]
                        // sessionStorage.setItem("jwtToken", jwtToken)
                        // sessionStorage.setItem("role", role)
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

    useEffect(async () => {
        let token = sessionStorage.getItem("jwtToken")
        await axios.get("http://92.205.25.135:4/student/retrieveAllSchools", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response && response.data) {
                    let schoolArray = response.data.map((obj, index) => ({
                        ...obj,
                        label: obj.name
                    }))
                    setSchools(schoolArray)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, [])

    console.log("Errors: ")
    console.log(formik.errors)

    // const firstStepValues = [formik.values.name, formik.values.surname, formik.values.starsId, formik.values.department]
    //
    // useEffect(() => {
    //     let validArray = isValid;
    //
    //     validArray[0] =
    //
    // }, firstStepValues)


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

    const setSemester = (semester) => {
        formik.setFieldValue("semester", semester)
    }

    const setSchool = (index, id) => {
        formik.setFieldValue(`schools[${index}].id`, id)
    }

    const addSchool = () => {
        let length = formik.values.schools.length
        // TODO: Stop adding for more than 5 universities
        if (length === 5) {

        }
        formik.setFieldValue(`schools.${length}`, emptySchoolComponent)
        formik.values.schools.push(emptySchoolComponent)
    }


    const steps = ['Student Information', 'Time Information', 'Schools'];

    return (
        <form onSubmit={formik.handleSubmit}>
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

                            {formik.isSubmitting ?
                                <Container
                                    align="center"
                                    sx={{mt: 10}}>
                                    <CircularProgress/>
                                </Container> :
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={24}
                                >

                                    <ErasmusStudentInfo
                                        hidden={activeStep !== 0}
                                        values={readyData}
                                    />
                                    <FormSemesterInfo
                                        hidden={activeStep !== 1}
                                        touched={formik.touched}
                                        values={formik.values}
                                        errors={formik.errors}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        setSemester={setSemester}
                                        editable={true}
                                    />
                                    <FormSchoolInfo
                                        addSchool={addSchool}
                                        schools={schools}
                                        hidden={activeStep !== 2}
                                        touched={formik.touched}
                                        values={formik.values}
                                        errors={formik.errors}
                                        setSchool={setSchool}
                                        handleChange={formik.handleChange}
                                        handleBlur={formik.handleBlur}
                                        editable={true}
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
                                                <Button
                                                    type="submit">
                                                    {"Finish"}
                                                </Button>
                                            )
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                            }
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

export default ErasmusApplication;

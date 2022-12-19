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
import {DashboardNavbar} from '../../../components/componentsErasmusCoordinator/dashboard-navbar';
import {DashboardSidebar} from '../../../components/componentsErasmusCoordinator/dashboard-sidebar';
import {
    ViewStudentInfo
} from '../../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-student-info';
import {useParams} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import React, {useState, useEffect} from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {Check} from "@mui/icons-material";
import {
    ViewExchangeInfo
} from "../../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-exchange-info";
import {
    ViewCourseInfo
} from "../../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-course-info";
import axios from 'axios';

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const ErasmusCoordinatorViewErasmusPreapproval = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [form, setCourses] = useState([])
    const [student, setStudent] = useState({})
    const [data, setData] = useState({})
    const [name, setName] = useState()
    const [academicYear, setAcademicYear] = useState()
    const [semester, setSemester] = useState()
    const [status, setStatus] = useState("")

    var courses = [];
    var studentObj = {}
    var dataObj = {}
    var names;
    var academicYears;
    var semesters;

    const token = localStorage.getItem("jwtToken");

    const handleApproval = (approvedBool, id) => {
        console.log(approvedBool, id)

        const url = "http://92.205.25.135:4/pre-approval/erasmus/evaluate/" + id;
        console.log(url)

        axios.post(url, {
            flag: approvedBool
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                //setApproved(res.data)
            })
            .catch((err) => {
                console.log("Err: ", err)
            })
    }

    const params = useParams();
    const appId = params.id
    const url = "http://92.205.25.135:4/pre-approval/erasmus/get/exchange-coordinator/pre-approval-form/" + appId;

    useEffect(() => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    console.log(res)
                    studentObj = res.data.student
                    dataObj = res.data
                    names = res.data.partnerUniversityErasmus.name
                    academicYears = res.data.academicYear
                    semesters = res.data.semester
                    for (var i = 0; i < res.data.forms.length; i++) {
                        courses.push({
                            host: {
                                courseName: res.data.forms[i].courseHost.name,
                                courseCode: res.data.forms[i].courseHost.courseCode,
                                courseCredits: res.data.forms[i].courseHost.creditBilkent
                            },
                            bilkent: {
                                courseName: res.data.forms[i].courseBilkent.name,
                                courseCode: res.data.forms[i].courseBilkent.courseCode,
                                courseCredits: res.data.forms[i].courseBilkent.creditBilkent
                            }
                        })
                    }
                }
                console.log(courses)
                setAcademicYear(academicYears)
                setSemester(semesters)
                setName(names)
                setData(dataObj)
                setCourses(courses)
                setStudent(studentObj)
                setStatus(res.data["status"])
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, [])

    return (
        <>
            <title>
                View Preapproval
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

                        <Grid
                            container
                            spacing={3}
                        >

                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}>


                                <Typography
                                    style={{textAlign: "center"}}
                                >
                                    Preapproval status: {status}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    style={{justifyContent: "center"}}>
                                    <Button
                                        onClick={() => {
                                            handleApproval(true, appId)
                                        }}
                                        variant="contained" size="large" startIcon={<DoneIcon/>}>
                                        Accept
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            handleApproval(false, appId)
                                        }}
                                        variant="contained" size="large" startIcon={<CloseIcon/>}>
                                        Reject
                                    </Button>
                                </Stack>
                            </Grid>

                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >
                                <ViewStudentInfo
                                    student={student}
                                />
                            </Grid>
                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >
                                <ViewExchangeInfo
                                    name={name}
                                    year={academicYear}
                                    semester={semester}
                                />
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <ViewCourseInfo
                                    coursesAll={form}
                                />
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

export default ErasmusCoordinatorViewErasmusPreapproval;

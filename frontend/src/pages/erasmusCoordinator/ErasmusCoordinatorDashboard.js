import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import {DashboardNavbar} from "../../components/componentsErasmusCoordinator/dashboard-navbar";
import {DashboardSidebar} from '../../components/componentsErasmusCoordinator/dashboard-sidebar';
import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Link, Outlet} from "react-router-dom";
import PreapprovalsList from "../../components/componentsAdmin/lists/preapprovals-list";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
    ViewStudentInfo
} from "../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-student-info";
import {
    ViewExchangeInfo
} from "../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-exchange-info";
import {
    ViewCourseInfo
} from "../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-course-info";
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

const ErasmusCoordinatorDashboard = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [resultMessage, setResultMessage] = useState("")

    const token = localStorage.getItem("jwtToken")

    const placeStudents = async () => {
        await axios.post("http://92.205.25.135:8080/erasmus-application/place", {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


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
                            Dashboard
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
                                <Card>
                                    <CardHeader
                                        subheader="Erasmus period details"
                                        title="Erasmus Period"
                                    />
                                    <Divider/>
                                    <CardContent>
                                        <Stack
                                            direction="column"
                                            spacing={5}
                                            style={{justifyContent: "center"}}>
                                            <Stack
                                                direction="row"
                                                spacing={5}
                                                style={{justifyContent: "center"}}>
                                                <TextField
                                                    InputLabelProps={{shrink: true}}
                                                    label="Erasmus Period Start Date"
                                                    type="date"
                                                />
                                                <TextField
                                                    InputLabelProps={{shrink: true}}
                                                    label="Erasmus Period End Date"
                                                    type="date"
                                                />
                                            </Stack>
                                            <Button>
                                                Save Changes
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}>
                                {resultMessage &&
                                    <Alert
                                        severity="info"
                                        onClose={() => {
                                            setResultMessage("")
                                        }}>
                                        <AlertTitle>Info</AlertTitle>
                                        {resultMessage}
                                    </Alert>
                                }
                                <Card>
                                    <CardHeader
                                        subheader="Student placement details"
                                        title="Erasmus Program Details"
                                    />
                                    <Divider/>
                                    <CardContent>
                                        <Stack
                                            direction="row"
                                            spacing={5}
                                            style={{justifyContent: "center"}}>
                                            <Button onClick={() => {
                                                setResultMessage("Placement success!")
                                            }}>
                                                Place Students
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
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

export default ErasmusCoordinatorDashboard;
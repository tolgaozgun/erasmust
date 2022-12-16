import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Students} from "../../components/componentsAdmin/lists/students";
import axios from 'axios';
import {parseJSON} from 'date-fns';
import Button from "@mui/material/Button";

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const studentList = [
    {
        id: 1,
        name: "Tolga Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: 1555016400000,
    },
    {
        id: 2,
        name: "Tolga Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: 1555016400000,
    },
    {
        id: 3,
        name: "Tolga Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: 1555016400000,
    },
];

const StudentList = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const token = sessionStorage.getItem("jwtToken");

    const sendRequest = async () => {
        await axios.get("http://92.205.25.135:4/admin/all-students", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                if (res) {
                    console.log(res)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }

    // useEffect(() => {
    //     axios.get("http://92.205.25.135:4/admin/all-students", {
    //         headers: {
    //             "Authorization": token
    //         }
    //     })
    //         .then((res) => {
    //             if (res) {
    //                 console.log(res)
    //             }
    //         })
    //         .catch((err) => {
    //             if (err && err.response) {
    //                 console.log("Error: ", err)
    //             }
    //         })
    // }, []);


    return (
        <>  <title>
            Students
        </title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        alignItems: "center",
                        display: 'flex',
                        width: '100%',
                        flexGrow: 1,
                        minHeight: "100%",
                        py: 8
                    }}
                >
                    <Container
                        maxWidth="lg"
                    >
                        <Grid
                            container
                            justifyContent="center"
                            spacing={3}
                            sx={{
                                ml: 5
                            }}
                        >
                            <Grid
                                item
                                lg={10}
                                md={12}
                                xl={15}
                                xs={12}
                                sx={{
                                    display: "flex"
                                }}
                            >
                                <Students
                                    students={studentList}
                                />
                                <Button onClick={() => sendRequest()}>
                                    Refresh
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
        </>
    );
}

export default StudentList
import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Students} from "../../components/componentsAdmin/lists/students";
import axios from 'axios';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentList = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [studentList, setStudentList] = useState([]);

    const token = sessionStorage.getItem("jwtToken");
    
    useEffect(() => {
        axios.get("http://92.205.25.135:4/admin/all-students", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    for (let i = 0; i < res.data.length; i++) {
                        console.log("Item fetched!")
                        setStudentList([
                            ...studentList,
                            {
                                id: res.data[i].id,
                                firstName: res.data[i].firstName,
                                lastName: res.data[i].lastName,
                                password: res.data[i].password,
                                starsId: res.data[i].starsId,
                                createdAt: 1555016400000,
                                permission: res.data[i].permission,
                                contactInformation: 
                                {
                                    emailUniversity: res.data[i].contactInformation.emailUniversity,
                                    emailPersonal: res.data[i].contactInformation.emailPersonal,
                                    phoneNumberWork: res.data[i].contactInformation.phoneNumberWork,
                                    phoneNumberPersonal: res.data[i].contactInformation.phoneNumberPersonal,
                                    address: res.data[i].contactInformation.address
                                }
                            }
                        ])
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
                                { (studentList !== []) && <Students students = {studentList}/> }
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
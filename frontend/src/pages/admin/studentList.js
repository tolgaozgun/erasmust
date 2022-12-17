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
    const [flag, setFlag] = useState(false);

    const token = sessionStorage.getItem("jwtToken");
    
    useEffect(() => {
        axios.get("http://92.205.25.135:4/admin/all-students", {
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
                        
                        setStudentList(oldArray => [...oldArray, item])                       
                        
                        console.log(res.data);
                        console.log("Item placed on array!");
                    }
                    setFlag(true)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, []);

    if (flag) {
        return (
            <>
                <title>
                    Students
                </title>
                <DashboardLayoutRoot>
                    <Box
                        component="main"
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                            width: '100%',
                            flexGrow: 1,
                            py: 8
                        }}
                    >
                        <Container maxWidth={false}>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xl={15}
                                    xs={12}
                                >
                                    <Students students={studentList}/> </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </DashboardLayoutRoot>
                <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
                <DashboardSidebar
                    onClose={() => setSidebarOpen(false)}
                    open={isSidebarOpen}/>
            </>
        )
    }


    return (
        <>  <title>
                Students
            </title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%',
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth={false}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xl={15}
                                xs={12}
                            >
                                <Students students={studentList}/> </Grid>
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

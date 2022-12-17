import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Students} from "../../../components/componentsAdmin/lists/students";
import axios from 'axios';
import Preapprovals from "../../student/Preapproval/Preapprovals";
import {PreapprovalsList} from "../../../components/componentsAdmin/dashboard/preapprovals-list";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const AdminErasmusPreapprovalList = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [preapprovalList, setPreapprovalList] = useState([]);
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

                        setPreapprovalList(oldArray => [...oldArray, item])

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
                                    {<PreapprovalsList preapprovals={preapprovalList}/>}
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
    }
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
                                {<Students students={preapprovalList}/>}
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
}

export default StudentList

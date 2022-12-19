import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsStudent/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import axios from 'axios';
import StudentPreapprovalList from "../Preapproval/StudentErasmusPreapprovalList";
import StudentCreateErasmusApplication from "./StudentCreateErasmusApplication";
import {ErasmusApplicationList} from "../../../components/componentsStudent/lists/ErasmusApplicationList";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentErasmusApplicationList = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [applicationList, setApplicationList] = useState([]);
    const [flag, setFlag] = useState(false);

    const token = localStorage.getItem("jwtToken");
    var array = []

    useEffect(() => {
        axios.get("http://92.205.25.135:4/erasmus-application/view-application", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    var i;
                    for (i = 0; i < res.data.length; i++) {
                        console.log("Item fetched!")
                        array.push(res.data[i])

                        console.log(res.data);
                        console.log("Item placed on array!");
                    }
                    setApplicationList(array)
                    setFlag(true)
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
            Erasmus Application List
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
                                <ErasmusApplicationList applications={applicationList}/>
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

export default StudentErasmusApplicationList

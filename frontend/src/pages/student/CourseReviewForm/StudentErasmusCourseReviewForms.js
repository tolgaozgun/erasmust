import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsStudent/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import CourseReviewList from "../../../components/componentsStudent/dashboard/course-review-forms";
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

const StudentErasmusCourseReviewForms = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [courseReviewFormList, setCourseReviewFormList] = useState([]);

    const token = localStorage.getItem("jwtToken");
    var array = []

    useEffect(() => {
        axios.get("http://92.205.25.135:8080/pre-approval/erasmus/get-all/student/course-forms", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    for (let i = 0; i < res.data.length; i++) {
                        console.log("Item fetched!")
                        array.push(res.data[i])
                        
                        console.log(res.data)
                        console.log("Item placed on array!");
                    }
                    
                }
                setCourseReviewFormList(array)
            })
            .catch((err) => {
                console.log("Error: ", err)
            })
    }, [])

    return (
        <> <title>
            Course Review Forms
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
                                <CourseReviewList
                                    students={courseReviewFormList}
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
}

export default StudentErasmusCourseReviewForms
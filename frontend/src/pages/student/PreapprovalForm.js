import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {DashboardNavbar} from "../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../components/componentsStudent/dashboard-sidebar";
import {
    Box,
    Container,
    FormHelperText,
    Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {styled} from "@mui/material/styles";
import {DataGrid} from "@mui/x-data-grid";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    // display: 'flex',
    // flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const PreApprovalForm = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const navigate = useNavigate()

    const goDash = () => {
        navigate('/dash');
    }

    const rows = {

    }
    return(
        <>
            <title>
                Preapproval Form
            </title>
            <DashboardLayoutRoot>
            <Box
                // component="main"
                // sx={{
                //     alignItems: 'center',
                //     display: 'flex',
                //     flexGrow: 1,
                //     minHeight: '100%',
                //     paddingTop: 6
                // }}
            >
                <Container>
                <Typography
                    color="textPrimary"
                    variant="h4"
                >
                    Preapproval Form
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                    marginTop={1}
                >
                    Student: STUDENT_NAME
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >
                    Exchange Coordinator: EXCHANGE_COORDINATOR
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >
                    Host University: HOST_UNIVERSITY
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >
                    Department: Computer Engineering (CS)
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >


                    Semester: 2022-2023 Fall
                </Typography>
                </Container>
                <div style={{
                    height: 250,
                    display: "flex",
                }}>
                    <DataGrid
                        autoHeight
                        pageSize={100}

                        columns={[
                            { field: 'course_bilkent', headerName: 'Course Bilkent', flex: 1},
                            {field: 'course_host', headerName: "Course Host", flex: 1},
                            {field: 'status', headerName: "Status", flex: 1}
                        ]}
                        rows={[
                            {id:1, course_bilkent: "MATH102", course_host: "MATH104", status: "Review"}
                        ]} />
                </div>
            </Box>
        </DashboardLayoutRoot>
    <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
    <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}/>
        </>
    );
}

export default PreApprovalForm

import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Students} from "../../../components/componentsAdmin/lists/students";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentEdits = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const formik = useFormik({
        initialValues: {
            id: student.id,
            firstName: student.firstName ? student.firstName : "",
            lastName: student.lastName ? student.lastName : "",
            password: student.password ? student.password : "",
            starsId: student.starsId ? student.starsId : "",
            createdAt: student.createdAt ? student.createdAt : "",
            permission: student.permission ? student.permission : "",
            contactInformation:
            {
                emailUniversity: student.contactInformation.emailUniversity ? student.contactInformation.emailUniversity : "",
                emailPersonal: student.contactInformation.emailPersonal ? student.contactInformation.emailPersonal : "",
                phoneNumberWork: student.contactInformation.phoneNumberWork ? student.contactInformation.phoneNumberWork : "",
                phoneNumberPersonal: student.contactInformation.phoneNumberPersonal ? student.contactInformation.phoneNumberPersonal : "",
                address: student.contactInformation.address ? student.contactInformation.address : ""
            }
        },
        validationSchema: Yup.object({
            id: Yup
                .string()
                .max(255)
                .required("Id required"),
            firstName: Yup
                .string()
                .max(255)
                .required(""),
            lastName: Yup
                .string()
                .max(255)
                .required(""),
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
            starsId: Yup
                .string()
                .max(255)
                .required('Stars ID is required'),
            createdAt: Yup
                .string()
                .max(255)
                .required('Password is required'),
            permission: Yup
                .string()
                .max(255)
                .required('Stars ID is required'),
            contactInformation: Yup.object().shape({
                emailUniversity: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
                emailPersonal: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
                phoneNumberWork: Yup
                    .string()
                    .max(11)
                    .required('Stars ID is required'),
                phoneNumberPersonal: Yup
                    .string()
                    .max(11)
                    .required('Stars ID is required'),
                address: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
            })
                
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
        }
    });

    return (
        <>  
            <title>
                Student
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

export default StudentEdits
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {DashboardNavbar} from "../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../components/componentsStudent/dashboard-sidebar";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Container,
    FormHelperText,
    TextField,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {styled} from "@mui/material/styles";
import {DataGrid} from "@mui/x-data-grid";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const tableData = [
    {
        id: 1,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 2,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 3,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 4,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 5,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 6,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 7,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 8,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 9,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    },
    {
        id: 10,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: ""
    }
]

const CTForm = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const navigate = useNavigate()

    const goDash = () => {
        navigate('/dash');
    }

    const rows = {

    }

    const formik = useFormik({
        initialValues: {
            courseCode: ["MAT102", "MAT132", "MAT241", "MAT225", "MAT230", "MAT420", "MAT105", "MAT106", "MAT103", "MAT115"],
            courseName: ["", "", "", "", "", "", "", "", "", ""],
            credits: ["", "", "", "", "", "", "", "", "", ""],
            grade: ["", "", "", "", "", "", "", "", "", ""],
            courseCode2: ["", "", "", "", "", "", "", "", "", ""],
            credits2: ["", "", "", "", "", "", "", "", "", ""],
            courseCode3: ["", "", "", "", "", "", "", "", "", ""],
            studentSelect1: "",
            studentSelect2: ""
        }/*,
        validationSchema: Yup.object({
            courseCode: Yup
                .string()
                .max(255)
                .required('Email is required'),
            courseName: Yup
                .string()
                .max(255)
                .required('First name is required'),
            credits: Yup
                .string()
                .max(255)
                .required('Last name is required'),
            grade: Yup
                .string()
                .max(255)
                .required('Password is required'),
            courseCode2: Yup
                .string()
                .max(255)
                .required('Password is required'),
            credits2: Yup
                .string()
                .max(255)
                .required('Password is required'),
            courseCode3: Yup
                .string()
                .max(255)
                .required('Password is required'),
            studentSelect1: Yup
                .string()
                .max(255)
                .required('Password is required'),
            studentSelect2: Yup
                .string()
                .max(255)
                .required('Password is required')
        })*/,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });

    return(
        <>
            <title>
                Course Transfer Form
            </title>
            <DashboardLayoutRoot>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%',
                    paddingTop: 6
                }}
            >
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 2 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Course Transfer Form
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
                        </Box>
                        <Box sx={{ 
                            minWidth: 120,
                            my: 2 }}>
                            <FormControl sx={{ 
                                    minWidth: 120 
                                }}>
                                <InputLabel id="demo-simple-select-label">Select...</InputLabel>
                                <Select
                                error={Boolean(formik.touched.studentSelect1 && formik.errors.studentSelect1)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='studentSelect1'
                                value={formik.values.studentSelect1}
                                label="name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                >
                                
                                <MenuItem value={"External Transfer Student"}>
                                    External Transfer Student
                                </MenuItem>
                                <MenuItem value={"Outgoing Exchange Student"}>
                                    Outgoing Exchange Student
                                </MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ 
                            minWidth: 120,
                            my: 2 }}>
                            <FormControl sx={{ 
                                    minWidth: 120 
                                }}>
                                <InputLabel id="demo-simple-select-label">Select...</InputLabel>
                                <Select
                                error={Boolean(formik.touched.studentSelect2 && formik.errors.studentSelect2)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='studentSelect2'
                                value={formik.values.studentSelect2}
                                label="name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                >
                                
                                <MenuItem value={"Internal Transfer Student"}>
                                    Internal Transfer Student
                                </MenuItem>
                                <MenuItem value={"Transfer via DGS"}>
                                    Transfer via DGS
                                </MenuItem>
                                <MenuItem value={"Re-registered Student"}>
                                    Re-registered Student
                                </MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    
                                </TableHead>
                                <TableBody>
                                    {
                                        tableData.map((row, index) => (
                                            <TableRow 
                                                key={row.id}
                                            > 
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>
                                                    <TextField
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.courseCode[row.id-1]}
                                                        error={Boolean(formik.touched.courseCode && formik.errors.courseCode)}
                                                        name="courseCode[${index}]"
                                                />
                                                </TableCell>
                                                <TableCell>{row.courseName}</TableCell>
                                                <TableCell>{row.credits}</TableCell>
                                                <TableCell>{row.grade}</TableCell>
                                                <TableCell>{row.courseCode2}</TableCell>
                                                <TableCell>{row.credits2}</TableCell>
                                                <TableCell>{row.courseCode3}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign Up Now
                            </Button>
                        </Box>
                    </form>
                    <DataGrid columns={[{ field: 'name', editable: true }]} rows={[{id:1, field: "aa", editable: true}]} />
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

export default CTForm

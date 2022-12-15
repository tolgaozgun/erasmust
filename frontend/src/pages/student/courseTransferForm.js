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
import { minWidth } from '@mui/system';


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
        courseCode3: "",
        names: ["courseCode[0]", "courseName[0]", "credits[0]", "grade[0]", "courseCode2[0]", "credits2[0]", "courseCode3[0]"]
    },
    {
        id: 2,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[1]", "courseName[1]", "credits[1]", "grade[1]", "courseCode2[1]", "credits2[1]", "courseCode3[1]"]
    },
    {
        id: 3,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[2]", "courseName[2]", "credits[2]", "grade[2]", "courseCode2[2]", "credits2[2]", "courseCode3[2]"]
    },
    {
        id: 4,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[3]", "courseName[3]", "credits[3]", "grade[3]", "courseCode2[3]", "credits2[3]", "courseCode3[3]"]
    },
    {
        id: 5,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[4]", "courseName[4]", "credits[4]", "grade[4]", "courseCode2[4]", "credits2[4]", "courseCode3[4]"]
    },
    {
        id: 6,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[5]", "courseName[5]", "credits[5]", "grade[5]", "courseCode2[5]", "credits2[5]", "courseCode3[5]"]
    },
    {
        id: 7,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[6]", "courseName[6]", "credits[6]", "grade[6]", "courseCode2[6]", "credits2[6]", "courseCode3[6]"]
    },
    {
        id: 8,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[7]", "courseName[7]", "credits[7]", "grade[7]", "courseCode2[7]", "credits2[7]", "courseCode3[7]"]
    },
    {
        id: 9,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[8]", "courseName[8]", "credits[8]", "grade[8]", "courseCode2[8]", "credits2[8]", "courseCode3[8]"]
    },
    {
        id: 10,
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
        courseCode2: "",
        credits2: "",
        courseCode3: "",
        names: ["courseCode[9]", "courseName[9]", "credits[9]", "grade[9]", "courseCode2[9]", "credits2[9]", "courseCode3[9]"]
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
            name: "",
            surname: "",
            starsId: "",
            department: "",
            academicYear: "",
            semester: "",
            courseCode: ["MAT102", "MAT132", "MAT241", "MAT225", "MAT230", "MAT420", "MAT105", "MAT106", "MAT103", "MAT115"],
            courseName: ["", "", "", "", "", "", "", "", "", ""],
            credits: ["", "", "", "", "", "", "", "", "", ""],
            grade: ["", "", "", "", "", "", "", "", "", ""],
            courseCode2: ["", "", "", "", "", "", "", "", "", ""],
            credits2: ["", "", "", "", "", "", "", "", "", ""],
            courseCode3: ["", "", "", "", "", "", "", "", "", ""],
            studentSelect1: "",
            studentSelect2: "",
            instituteName: "",
            previousDepartment: ""
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(255)
                .required("Name is required"),
            surname: Yup
                .string()
                .max(255)
                .required("Surname is required"),
            studentID: Yup
                .number()
                .max(8)
                .required("Student ID is required"),
            department: Yup
                .string()
                .max(255)
                .required("Department is required"),
            academicYear: Yup
                .string()
                .max(255)
                .required("Academic year is required"),
            semester: Yup
                .string()
                .max(255)
                .required("Student ID is required"),
            courseCode: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('Email is required')),
            courseName: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('First name is required')),
            credits: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('Last name is required')),
            grade: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('Password is required')),
            courseCode2: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('Password is required')),
            credits2: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('Password is required')),
            courseCode3: Yup.array().of(
                Yup
                .string()
                .max(255)
                .required('Password is required')),
            studentSelect1: Yup
                .string()
                .max(255)
                .required('Password is required'),
            studentSelect2: Yup
                .string()
                .max(255)
                .required('Password is required'),
            instituteName: Yup
                .string()
                .max(255)
                .required("Institute name is required"),
            previousDepartment: Yup
                .string()
                .max(255)
                .required("Department name is required")
        }),
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
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <TextField
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='name'
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Student's Name"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.surname && formik.errors.surname)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='surname'
                                value={formik.values.surname}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Student's Surname"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.studentID && formik.errors.studentID)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='studentID'
                                value={formik.values.studentID}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Student's ID"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.department && formik.errors.department)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='department'
                                value={formik.values.department}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Student's Department"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.academicYear && formik.errors.academicYear)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='academicYear'
                                value={formik.values.academicYear}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Student's Academic Year"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.semester && formik.errors.semester)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='semester'
                                value={formik.values.semester}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Student's Semester"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.instituteName && formik.errors.instituteName)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='instituteName'
                                value={formik.values.instituteName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Institute Name"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
                            <TextField
                                error={Boolean(formik.touched.previousDepartment && formik.errors.previousDepartment)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='previousDepartment'
                                value={formik.values.previousDepartment}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                variant="outlined"
                                label="Previous Department"
                                fullWidth
                                sx={{
                                    my: 1
                                }}
                            >
                            </TextField>
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
                                    <TableCell>ID</TableCell>
                                    <TableCell>Course Code</TableCell>
                                    <TableCell>Course Name</TableCell>
                                    <TableCell>Credits*</TableCell>
                                    <TableCell>Grade**</TableCell>
                                    <TableCell>Course Code and Name for a Required Course, 
                                        Elective Group Name for an Elective Requirement
                                    </TableCell>
                                    <TableCell>Credits</TableCell>
                                    <TableCell>Elective Requirement Exemptions only: 
                                        Course code(s) of directly equivalent course(s), if any ***
                                    </TableCell>
                                </TableHead>
                                <TableBody>
                                    {
                                        tableData.map((row, index,) => (
                                            <TableRow 
                                                key={row.id}
                                            > 
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.courseCode[index]}
                                                        error={Boolean(formik.touched.courseCode && formik.errors.courseCode)}
                                                        name={row.names[0]}
                                                />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.courseName[index]}
                                                        error={Boolean(formik.touched.courseName && formik.errors.courseName)}
                                                        name={row.names[1]}
                                                />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.credits[index]}
                                                        error={Boolean(formik.touched.credits && formik.errors.credits)}
                                                        name={row.names[2]}
                                                />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.grade[index]}
                                                        error={Boolean(formik.touched.grade && formik.errors.grade)}
                                                        name={row.names[3]}
                                                />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.courseCode2[index]}
                                                        error={Boolean(formik.touched.courseCode2 && formik.errors.courseCode2)}
                                                        name={row.names[4]}
                                                />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.credits2[index]}
                                                        error={Boolean(formik.touched.credits2 && formik.errors.credits2)}
                                                        name={row.names[5]}
                                                />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        sx={{ 
                                                         minWidth: 120 
                                                        }}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.courseCode3[index]}
                                                        error={Boolean(formik.touched.courseCode3 && formik.errors.courseCode3)}
                                                        name={row.names[6]}
                                                />
                                                </TableCell>
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
                                Create Course Transfer Form
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

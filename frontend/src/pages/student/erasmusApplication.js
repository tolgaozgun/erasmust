import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {DashboardNavbar} from "../../components/componentsStudent/dashboard-navbar";
import {DashboardSidebar} from "../../components/componentsStudent/dashboard-sidebar";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {styled} from "@mui/material/styles";
import {DataGrid} from "@mui/x-data-grid";

const options = [
    {value : 'Atria', disabled : false},
    {value : 'Callisto', disabled : false},
    {value : 'Dione', disabled : false},
    {value : 'Ganymede', disabled : false},
    {value : 'Hangouts Call', disabled : false},
    {value : 'Luna', disabled : false},
    {value : 'Oberon', disabled : false},
    {value : 'Phobos', disabled : false},
    {value : 'Pyxis', disabled : false},
    {value : 'Sedna', disabled : false},
    {value : 'Titania', disabled : false},
    {value : 'Triton', disabled : false},
    {value : 'Umbriel', disabled : false},
];

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const prevValues = [
    "",
    "",
    "",
    "",
    ""
];

const ErasmusApplication = () => {
    
  
    const handleChange = (event) => {
        console.log(prevValues);
        console.log(event.target.name);
        console.log(event.target.value);
        if (event.target.name === "firstUni") {
            if (prevValues[0] === "") {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[0] = options[i].value;
                    }
                }
            } else {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === prevValues[0]) {
                        options[i].disabled = false;
                    }
                }
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[0] = options[i].value;
                    }
                }
            }
        } else if (event.target.name === "secondUni") {
            if (prevValues[1] === "") {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[1] = options[i].value;
                    }
                }
            } else {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === prevValues[1]) {
                        options[i].disabled = false;
                    }
                }
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[1] = options[i].value;
                    }
                }
            }
        } else if (event.target.name === "thirdUni") {
            if (prevValues[2] === "") {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[2] = options[i].value;
                    }
                }
            } else {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === prevValues[2]) {
                        options[i].disabled = false;
                    }
                }
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[2] = options[i].value;
                    }
                }
            }
        } else if (event.target.name === "fourthUni") {
            if (prevValues[3] === "") {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[3] = options[i].value;
                    }
                }
            } else {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === prevValues[3]) {
                        options[i].disabled = false;
                    }
                }
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[3] = options[i].value;
                    }
                }
            }
        } else if (event.target.name === "fifthUni") {
            if (prevValues[4] === "") {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[4] = options[i].value;
                    }
                }
            } else {
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === prevValues[4]) {
                        options[i].disabled = false;
                    }
                }
                for(var i = 0; i < 13; i++) {
                    if(options[i].value === event.target.value) {
                        options[i].disabled = true;
                        prevValues[4] = options[i].value;
                    }
                }
            }
        }
    };

    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const navigate = useNavigate()

    const goDash = () => {
        navigate('/dashboardStudent');
    }

    const rows = {

    }

    const formik = useFormik({
        initialValues: {
            firstUni: '',
            secondUni: '',
            thirdUni: '',
            fourthUni: '',
            fifthUni: ''
        },
        validationSchema: Yup.object({
            firstUni: Yup
                .string()
                .max(255)
                .required('University selection is required'),
            secondUni: Yup
                .string()
                .max(255)
                .required('University selection is required'),
            thirdUni: Yup
                .string()
                .max(255)
                .required('University selection is required'),
            fourthUni: Yup
                .string()
                .max(255)
                .required('University selection is required'),
            fifthUni: Yup
                .string()
                .max(255)
                .required('University selection is required')
        }),
        onSubmit: values => {
            //navigate('/erasmusStudent')
            //alert("Success");
            console.log(JSON.stringify(values));
            //goDash()
        }
    });

    return(
        <>
            <title>
                Erasmus Application Form
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
                                Erasmus Application Form
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select First University..</InputLabel>
                                <Select
                                error={Boolean(formik.touched.firstUni && formik.errors.firstUni)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='firstUni'
                                value={formik.values.firstUni}
                                label="name"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {handleChange(e); formik.handleChange(e)}}
                                variant="outlined"
                                >
                                {options.map((option) => (
                                <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                                    {option.value}
                                </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ 
                            minWidth: 120,
                            my: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Second University..</InputLabel>
                                <Select
                                error={Boolean(formik.touched.secondUni && formik.errors.secondUni)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='secondUni'
                                value={formik.values.secondUni}
                                label="Age"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {handleChange(e); formik.handleChange(e)}}
                                variant="outlined"
                                >
                                {options.map((option) => (
                                <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                                    {option.value}
                                </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ 
                            minWidth: 120,
                            my: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Third University..</InputLabel>
                                <Select
                                error={Boolean(formik.touched.thirdUni && formik.errors.thirdUni)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='thirdUni'
                                value={formik.values.thirdUni}
                                label="Age"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {handleChange(e); formik.handleChange(e)}}
                                variant="outlined"
                                >
                                {options.map((option) => (
                                <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                                    {option.value}
                                </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ 
                            minWidth: 120,
                            my: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Fourth University..</InputLabel>
                                <Select
                                error={Boolean(formik.touched.fourthUni && formik.errors.fourthUni)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='fourthUni'
                                value={formik.values.fourthUni}
                                label="Age"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {handleChange(e); formik.handleChange(e)}}
                                variant="outlined"
                                >
                                {options.map((option) => (
                                <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                                    {option.value}
                                </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ 
                            minWidth: 120,
                            my: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Fifth University..</InputLabel>
                                <Select
                                error={Boolean(formik.touched.fifthUni && formik.errors.fifthUni)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='fifthUni'
                                value={formik.values.fifthUni}
                                label="Age"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {handleChange(e); formik.handleChange(e)}}
                                variant="outlined"
                                >
                                {options.map((option) => (
                                <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                                    {option.value}
                                </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Submit Your Erasmus Application
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

export default ErasmusApplication

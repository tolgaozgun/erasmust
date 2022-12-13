import {useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

export const FormSemesterInfo = (props) => {

    const formik = useFormik({
        initialValues: {
            academicYear: "2023-2024",
            semester: "FALL",
        },
        validationSchema: Yup.object({
            hostName: Yup
                .string()
                .max(255)
                .required("Host school name is required"),
            academicYear: Yup
                .string()
                .max(255)
                .required("Academic year is required"),
            semester: Yup
                .string()
                .max(10)
                .required('Semester is required')
        }),
        onSubmit: () => {

        },
    });
    if (!props.hidden) {
        props.handleStep(formik.isValid)
    }


    // TODO: Change this to match current login details
    const isAdmin = false;


    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >
            <Card>
                <CardHeader
                    subheader="Program time information"
                    title="Time Information"
                />
                <Divider/>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >

                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(formik.touched.academicYear && formik.errors.academicYear)}
                                fullWidth
                                helperText={formik.touched.academicYear && formik.errors.academicYear}
                                label="Academic Year"
                                name="academicYear"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.academicYear}
                                variant="outlined"
                                disabled={!isAdmin}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id={"semester-selector"}
                                options={[{label: "FALL"}, {label: "SPRING"}]}
                                renderInput={(params) => <TextField {...params} label="Enter semester"/>}
                            />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

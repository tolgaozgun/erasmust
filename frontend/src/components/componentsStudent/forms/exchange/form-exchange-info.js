import {useState} from 'react';
import {
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

export const FormExchangeInfo = (props) => {

    const formik = useFormik({
        initialValues: {
            hostName: "EPFL",
            academicYear: "2022-2023",
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
    if (!props.hidden && props.handleStep) {
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
                    subheader="Program and host institution information"
                    title="Exchange Information"
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
                                error={Boolean(formik.touched.hostName && formik.errors.hostName)}
                                fullWidth
                                helperText={formik.touched.hostName && formik.errors.hostName}
                                label="Host Institution Name"
                                name="hostName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.hostName}
                                variant="outlined"
                                disabled={!isAdmin}
                            />
                        </Grid>
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
                            <TextField
                                error={Boolean(formik.touched.semester && formik.errors.semester)}
                                fullWidth
                                helperText={formik.touched.semester && formik.errors.semester}
                                label="Semester"
                                name="semester"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.semester}
                                variant="outlined"
                                disabled={!isAdmin}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

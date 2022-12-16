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

export const FormStudentInfo = (props) => {

    const formik = useFormik({
        initialValues: {
            name: "Tolga",
            surname: "Özgün",
            starsId: 22003850,
            department: "Computer Engineering",
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
            starsId: Yup
                .number()
                .required('Stars ID is required'),
            department: Yup
                .string()
                .max(255)
                .required('Department is required')
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
                    subheader="This part contains general information"
                    title="Student Information"
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
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                fullWidth
                                helperText={formik.touched.name && formik.errors.name}
                                label="Name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.name}
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
                                error={Boolean(formik.touched.surname && formik.errors.surname)}
                                fullWidth
                                helperText={formik.touched.surname && formik.errors.surname}
                                label="Surname"
                                name="surname"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.surname}
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
                                error={Boolean(formik.touched.starsId && formik.errors.starsId)}
                                fullWidth
                                helperText={formik.touched.starsId && formik.errors.starsId}
                                label="Stars ID"
                                name="starsId"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.starsId}
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
                                error={Boolean(formik.touched.department && formik.errors.department)}
                                fullWidth
                                helperText={formik.touched.department && formik.errors.department}
                                label="Department"
                                name="department"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.department}
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

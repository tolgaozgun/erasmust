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

export const LearningStudentInfo = (props) => {

    const formik = useFormik({
        initialValues: {
            name: "Tolga",
            surname: "Özgün",
            dateOfBirth: new Date(),
            nationality: "Turkish",
            sex: "M",
            academicYear: "2022-2023",
            studyCycle: "EQF Level 6",
            subjectAreaCode: "Computer Science"
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
            dateOfBirth: Yup
                .date()
                .required("Date of Birth is required"),
            nationality: Yup
                .string()
                .max(255)
                .required("Nationality is required"),
            sex: Yup
                .string()
                .max(1)
                .required("Sex is required"),
            academicYear: Yup
                .string()
                .max(10)
                .required("Academic Year is required (20xx-20xx)"),
            studyCycle: Yup
                .string()
                .max(20)
                .required("Study cycle is required"),
            subjectAreaCode: Yup
                .string()
                .max(50)
                .required("Subject Area, Code is required"),
        }),
        onSubmit: () => {

        },
    });
    if (!props.hidden) {
        props.handleStep(formik.isValid)
    }

    // TODO: Change this to match current login details
    const isAdmin = true;

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
                                error={Boolean(formik.touched.dateOfBirth && formik.errors.dateOfBirth)}
                                fullWidth
                                helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                                label="Date of Birth"
                                name="dateOfBirth"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.dateOfBirth}
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
                                error={Boolean(formik.touched.nationality && formik.errors.nationality)}
                                fullWidth
                                helperText={formik.touched.nationality && formik.errors.nationality}
                                label="Nationality"
                                name="nationality"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.nationality}
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
                                error={Boolean(formik.touched.sex && formik.errors.sex)}
                                fullWidth
                                helperText={formik.touched.sex && formik.errors.sex}
                                label="Sex"
                                name="sex"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.sex}
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
                                error={Boolean(formik.touched.studyCycle && formik.errors.studyCycle)}
                                fullWidth
                                helperText={formik.touched.studyCycle && formik.errors.studyCycle}
                                label="Study Cycle"
                                name="studyCycle"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.studyCycle}
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
                                error={Boolean(formik.touched.subjectAreaCode && formik.errors.subjectAreaCode)}
                                fullWidth
                                helperText={formik.touched.subjectAreaCode && formik.errors.subjectAreaCode}
                                label="Subject Area, Code"
                                name="subjectAreaCode"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.subjectAreaCode}
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

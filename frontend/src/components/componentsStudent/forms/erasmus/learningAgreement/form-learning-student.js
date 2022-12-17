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
                                fullWidth
                                label="Name"
                                name="name"
                                required
                                value={props.setData.name}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Surname"
                                name="surname"
                                required
                                value={props.setData.surname}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Date of Birth"
                                name="dateOfBirth"
                                type="date"
                                required
                                value={props.setData.dateOfBirth}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Nationality"
                                name="nationality"
                                required
                                value={props.setData.nationality}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Sex"
                                name="sex"
                                required
                                value={props.setData.sex}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Academic Year"
                                name="academicYear"
                                required
                                value={props.setData.academicYear}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.touched.studyCycle && props.errors.studyCycle)}
                                fullWidth
                                helperText={props.touched.studyCycle && props.errors.studyCycle}
                                label="Study Cycle"
                                name="studyCycle"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.studyCycle}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.touched.subjectAreaCode && props.errors.subjectAreaCode)}
                                fullWidth
                                helperText={props.touched.subjectAreaCode && props.errors.subjectAreaCode}
                                label="Subject Area, Code"
                                name="subjectAreaCode"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.subjectAreaCode}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

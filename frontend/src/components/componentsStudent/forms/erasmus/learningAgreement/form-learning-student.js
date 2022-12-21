import {useEffect, useState} from 'react';
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

    const [dateStr, setDateStr] = useState("")
    useEffect(() => {
        const epoch = props.setData["dateOfBirth"]
        const date = new Date(epoch)
        setDateStr(date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear())

    }, props.setData["dateOfBirth"])
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
                                value={props.setData["firstName"]}
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
                                value={props.setData["lastName"]}
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
                                required
                                value={dateStr}
                                defaultValue="2017-05-24"
                                onChange={(e, v) => {
                                    console.log(e)
                                }}
                                disabled={true}
                                variant="outlined"
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
                                value={props.setData["nationality"]}
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
                                value={props.setData["gender"]}
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
                                value={props.setData["academicYear"]}
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
                                error={Boolean(props.errors && props.errors.subjectArea)}
                                fullWidth
                                helperText={props.touched && props.touched.subjectArea}
                                label="Subject Area"
                                name="subjectArea"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.subjectArea}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

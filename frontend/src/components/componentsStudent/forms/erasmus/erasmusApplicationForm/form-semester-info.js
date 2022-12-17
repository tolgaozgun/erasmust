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
                                error={Boolean(props.touched.academicYear && props.errors.academicYear)}
                                fullWidth
                                helperText={props.touched.academicYear && props.errors.academicYear}
                                label="Academic Year"
                                name="academicYear"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.academicYear}
                                variant="outlined"
                                disabled={!props.editable}
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
                                disabled={!props.editable}
                                onChange={(e, value) => props.setSemester(value["label"])}
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

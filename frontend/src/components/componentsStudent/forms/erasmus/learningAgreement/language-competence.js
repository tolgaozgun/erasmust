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

export const LanguageCompetence = (props) => {

    const formik = useFormik({
        initialValues: {
            language: "English",
            competence: "A1",
        },
        validationSchema: Yup.object({
            language: Yup
                .string()
                .max(255)
                .required("Language name is required"),
            competence: Yup
                .string()
                .max(10)
                .required('Competence level is required')
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
                                error={Boolean(formik.touched.language && formik.errors.language)}
                                fullWidth
                                helperText={formik.touched.language && formik.errors.language}
                                label="Language"
                                name="language"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.language}
                                variant="outlined"
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
                                options={[{label: "A1"}, {label: "A2"}, {label: "B1"}, {label: "B2"},
                                    {label: "C1"}, {label: "C2"}, {label: "Native"}]}

                                renderInput={(params) => <TextField {...params} label="Competence Level"/>}
                            />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

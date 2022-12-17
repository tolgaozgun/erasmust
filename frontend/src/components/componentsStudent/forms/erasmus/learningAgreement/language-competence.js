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
                                error={Boolean(props.touched.language && props.errors.language)}
                                fullWidth
                                helperText={props.touched.language && props.errors.language}
                                label="Language"
                                name="language"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.language}
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
                                onChange={(e, value) => props.competenceChange(value["label"])}

                                renderInput={(params) => <TextField {...params} label="Competence Level"/>}
                            />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

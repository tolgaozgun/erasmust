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

export const ReceivingInstitutionInfo = (props) => {

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >
            <Card>
                <CardHeader
                    subheader="This part contains the host school information"
                    title="Receiving Institution Information"
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
                                error={Boolean(props.errors && props.errors["name"])}
                                fullWidth
                                helperText={props.touched && props.touched["name"]}
                                label="Name"
                                name="receiving.name"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["name"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["faculty"])}
                                fullWidth
                                helperText={props.touched && props.touched["faculty"]}
                                label="Faculty"
                                name="receiving.faculty"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["faculty"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["erasmusCode"])}
                                fullWidth
                                helperText={props.touched && props.touched["erasmusCode"]}
                                label="Erasmus Code"
                                name="receiving.erasmusCode"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["erasmusCode"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["department"])}
                                fullWidth
                                helperText={props.touched && props.touched["department"]}
                                label="Department"
                                name="receiving.department"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["department"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["address"])}
                                fullWidth
                                helperText={props.touched && props.touched["address"]}
                                label="Address"
                                name="receiving.address"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["address"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["countryWithCode"])}
                                fullWidth
                                helperText={props.touched && props.touched["countryWithCode"]}
                                label="Country with Code"
                                name="receiving.countryWithCode"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["countryWithCode"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonName"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonName"]}
                                label="Contact Person Name"
                                name="receiving.contactPersonName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonName"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonDetails"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonDetails"]}
                                label="Contact Person Details"
                                name="receiving.contactPersonDetails"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonDetails"]}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

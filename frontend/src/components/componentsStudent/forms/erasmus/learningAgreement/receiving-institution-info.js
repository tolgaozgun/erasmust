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
                                error={Boolean(props.errors && props.errors.hostName)}
                                fullWidth
                                helperText={props.touched && props.touched.hostName}
                                label="Host Name"
                                name="hostName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostName}
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
                                id={"faculty-selector"}
                                options={props.faculties}
                                onChange={(e, value) => props.facultyChange(value["id"])}

                                renderInput={(params) => <TextField {...params} label="Host Faculty"/>}
                            />

                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostErasmusCode)}
                                fullWidth
                                helperText={props.touched && props.touched.hostErasmusCode}
                                label="Host Erasmus Code"
                                name="hostErasmusCode"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostErasmusCode}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.departmentHost)}
                                fullWidth
                                helperText={props.touched && props.touched.departmentHost}
                                label="Department"
                                name="departmentHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.departmentHost}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostFullAddress)}
                                fullWidth
                                helperText={props.touched && props.touched.hostFullAddress}
                                label="Host Address"
                                name="hostFullAddress"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostFullAddress}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostCountryCode)}
                                fullWidth
                                helperText={props.touched && props.touched.hostCountryCode}
                                label="Country with Code"
                                name="hostCountryCode"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostCountryCode}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostContactFirstName)}
                                fullWidth
                                helperText={props.touched && props.touched.hostContactFirstName}
                                label="Host Contact First Name"
                                name="hostContactFirstName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostContactFirstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostContactLastName)}
                                fullWidth
                                helperText={props.touched && props.touched.hostContactLastName}
                                label="Host Contact Last Name"
                                name="hostContactLastName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostContactLastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostContactMail)}
                                fullWidth
                                helperText={props.touched && props.touched.hostContactMail}
                                label="Host Contact Person Mail"
                                name="hostContactMail"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostContactMail}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostContactNumber)}
                                fullWidth
                                helperText={props.touched && props.touched.hostContactNumber}
                                label="Host Contact Person Number"
                                name="hostContactNumber"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostContactNumber}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors.hostContactFunction)}
                                fullWidth
                                helperText={props.touched && props.touched.hostContactFunction}
                                label="Host Contact Person Function"
                                name="hostContactFunction"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values.hostContactFunction}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

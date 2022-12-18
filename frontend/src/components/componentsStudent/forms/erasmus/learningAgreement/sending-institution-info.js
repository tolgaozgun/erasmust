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


export const SendingInstitutionInfo = (props) => {

    let setData = props.values

    let contactPersonName = setData["contactPersonFirstNameBilkent"] + " " + setData["contactPersonLastNameBilkent"]

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >
            <Card>
                <CardHeader
                    subheader="This part contains the information about Bilkent"
                    title="Sending Institution Information"
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
                                value={setData["nameBilkent"]}
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
                                label="Faculty"
                                name="faculty"
                                required
                                value={setData["facultyBilkent"]["name"]}
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
                                label="Erasmus Code"
                                name="erasmusCode"
                                required
                                value={setData["erasmusCodeBilkent"]}
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
                                label="Department"
                                name="department"
                                required
                                value={setData["departmentBilkent"]}
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
                                label="Address"
                                name="address"
                                required
                                value={setData["addressBilkent"]}
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
                                label="Host Country Code"
                                name="hostCountryCode"
                                required
                                value={setData["countryCodeBilkent"]}
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
                                label="Contact Person Name"
                                name="contactPersonName"
                                required
                                value={contactPersonName}
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
                                label="Contact Person Email"
                                name="contactPersonEmail"
                                required
                                value={setData["contactPersonEmailBilkent"]}
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
                                label="Contact Person Phone Number"
                                name="contactPersonPhone"
                                required
                                value={setData["contactPersonPhoneNumberBilkent"]}
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
                                label="Contact Person Function"
                                name="contactPersonFunction"
                                required
                                value={setData["contactPersonFunctionBilkent"]}
                                variant="outlined"
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

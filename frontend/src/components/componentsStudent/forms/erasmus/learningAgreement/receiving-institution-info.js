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
                                error={Boolean(props.errors && props.errors["nameHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["nameHost"]}
                                label="Host Name"
                                name="receivingInstitutionInformation.nameHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["nameHost"]}
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
                                error={Boolean(props.errors && props.errors["erasmusCodeHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["erasmusCodeHost"]}
                                label="Host Erasmus Code"
                                name="receivingInstitutionInformation.erasmusCodeHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["erasmusCodeHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["departmentHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["departmentHost"]}
                                label="Department"
                                name="receivingInstitutionInformation.departmentHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["departmentHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["addressHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["addressHost"]}
                                label="Host Address"
                                name="receivingInstitutionInformation.addressHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["addressHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["countryCodeHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["countryCodeHost"]}
                                label="Country with Code"
                                name="receivingInstitutionInformation.countryCodeHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["countryCodeHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonFirstNameHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonFirstNameHost"]}
                                label="Host Contact First Name"
                                name="receivingInstitutionInformation.contactPersonFirstNameHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonFirstNameHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonLastNameHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonLastNameHost"]}
                                label="Host Contact Last Name"
                                name="receivingInstitutionInformation.contactPersonLastNameHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonLastNameHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonEmailHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonEmailHost"]}
                                label="Host Contact Person Mail"
                                name="receivingInstitutionInformation.contactPersonEmailHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonEmailHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonPhoneNumberHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonPhoneNumberHost"]}
                                label="Host Contact Person Number"
                                name="receivingInstitutionInformation.contactPersonPhoneNumberHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonPhoneNumberHost"]}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(props.errors && props.errors["contactPersonFunctionHost"])}
                                fullWidth
                                helperText={props.touched && props.touched["contactPersonFunctionHost"]}
                                label="Host Contact Person Function"
                                name="receivingInstitutionInformation.contactPersonFunctionHost"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                required
                                value={props.values["contactPersonFunctionHost"]}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

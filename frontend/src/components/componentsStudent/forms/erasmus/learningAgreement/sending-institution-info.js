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

    const formik = useFormik({
        initialValues: {
            name: "Bilkent University",
            faculty: "Faculty of Engineering",
            erasmusCode: "ANKARA07",
            department: "Computer Engineering",
            address: "UNIVERSITELER MAH. BILKENT UNIVERSITESI - 06800 CANKAYA/ANKARA",
            countryWithCode: "Turkey, TR",
            contactPersonName: "Can Alkan",
            contactPersonDetails: "calkan@cs.bilkent.edu.tr"
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(255)
                .required("Name is required"),
            faculty: Yup
                .string()
                .max(255)
                .required("Faculty is required"),
            erasmusCode: Yup
                .string()
                .max(12)
                .required("Erasmus Code is required"),
            department: Yup
                .string()
                .max(255)
                .required("Department is required"),
            address: Yup
                .string()
                .max(500)
                .required("Address is required"),
            countryWithCode: Yup
                .string()
                .max(40)
                .required("Country & Country Code is required"),
            contactPersonName: Yup
                .string()
                .max(20)
                .required("Study cycle is required"),
            contactPersonDetails: Yup
                .string()
                .max(50)
                .required("Contact Person Details is required"),
        }),
        onSubmit: () => {

        },
    });
    if (!props.hidden && props.handleStep) {
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
                                error={Boolean(formik.touched.faculty && formik.errors.faculty)}
                                fullWidth
                                helperText={formik.touched.faculty && formik.errors.faculty}
                                label="Faculty"
                                name="faculty"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.faculty}
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
                                error={Boolean(formik.touched.erasmusCode && formik.errors.erasmusCode)}
                                fullWidth
                                helperText={formik.touched.erasmusCode && formik.errors.erasmusCode}
                                label="Erasmus Code"
                                name="erasmusCode"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.erasmusCode}
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
                                error={Boolean(formik.touched.department && formik.errors.department)}
                                fullWidth
                                helperText={formik.touched.department && formik.errors.department}
                                label="Department"
                                name="department"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.department}
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
                                error={Boolean(formik.touched.address && formik.errors.address)}
                                fullWidth
                                helperText={formik.touched.address && formik.errors.address}
                                label="Address"
                                name="address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.address}
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
                                error={Boolean(formik.touched.countryWithCode && formik.errors.countryWithCode)}
                                fullWidth
                                helperText={formik.touched.countryWithCode && formik.errors.countryWithCode}
                                label="Country with Code"
                                name="countryWithCode"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.countryWithCode}
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
                                error={Boolean(formik.touched.contactPersonName && formik.errors.contactPersonName)}
                                fullWidth
                                helperText={formik.touched.contactPersonName && formik.errors.contactPersonName}
                                label="Contact Person Name"
                                name="contactPersonName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.contactPersonName}
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
                                error={Boolean(formik.touched.contactPersonDetails && formik.errors.contactPersonDetails)}
                                fullWidth
                                helperText={formik.touched.contactPersonDetails && formik.errors.contactPersonDetails}
                                label="Contact Person Details"
                                name="contactPersonDetails"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                value={formik.values.contactPersonDetails}
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

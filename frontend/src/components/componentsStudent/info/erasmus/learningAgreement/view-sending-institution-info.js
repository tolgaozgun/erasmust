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
import {InfoTable} from "../../info-table";

const info = {
    name: "Bilkent University",
    faculty: "Faculty of Engineering",
    erasmusCode: "ANKARA07",
    department: "Computer Engineering",
    address: "UNIVERSITELER MAH. BILKENT UNIVERSITESI - 06800 CANKAYA/ANKARA",
    countryWithCode: "Turkey, TR",
    contactPersonName: "Can Alkan",
    contactPersonDetails: "calkan@cs.bilkent.edu.tr"
}

export const ViewSendingInstitutionInfo = (props) => {


    return (
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
                    <InfoTable items={info}/>
                </Grid>
            </CardContent>
        </Card>
    );
};

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
import {InfoTable} from "../info-table"


const info = {
    hostName: "EPFL",
    academicYear: "2022-2023",
    semester: "FALL",
}
export const ViewExchangeInfo = (props) => {

    return (
        <Card>
            <CardHeader
                subheader="Program and host institution information"
                title="Exchange Information"
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

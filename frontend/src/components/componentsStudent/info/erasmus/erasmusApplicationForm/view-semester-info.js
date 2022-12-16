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
import {InfoTable} from "../../info-table";

const info = {
    academicYear: "2023-2024",
    semester: "FALL",
}

export const ViewSemesterInfo = (props) => {


    return (
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
                    <InfoTable items={info}/>

                </Grid>
            </CardContent>
        </Card>
    );
};

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



export const ViewSemesterInfo = (props) => {
    const { student } = props

    const info = {
        academicYear: student.academicYear ? student.academicYear : "",
        semester: student.semester ? student.semester : "",
    }

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

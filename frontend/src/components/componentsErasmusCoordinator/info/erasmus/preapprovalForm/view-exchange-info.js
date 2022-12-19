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
import {InfoTable} from "../../info-table"


export const ViewExchangeInfo = (props) => {

    const {year, name, semester} = props

    const info = {
        hostName: name ? name : "",
        academicYear: year ? year : "",
        semester: semester ? semester : "",
    }

    return (
        <Card>
            <CardHeader
                subheader="Program and host institution information"
                title="Erasmus Information"
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

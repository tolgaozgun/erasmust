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
    name: "Tolga",
    surname: "Özgün",
    dateOfBirth: new Date().toDateString(),
    nationality: "Turkish",
    sex: "M",
    academicYear: "2022-2023",
    studyCycle: "EQF Level 6",
    subjectAreaCode: "Computer Science"
}

export const ViewLearningStudentInfo = (props) => {


    return (
        <Card>
            <CardHeader
                subheader="This part contains general information"
                title="Student Information"
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

import {useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid, Table, TableBody, TableCell, TableContainer, TableRow,
    TextField
} from '@mui/material';
import React from 'react';
import {InfoTable} from "./info-table";


export const ViewStudentInfo = (props) => {

    const {student} = props

    const items = {
        name: student.firstName ? student.firstName : "",
        surname: student.lastName ? student.lastName : "",
        starsId: student.starsId ? student.starsId : "",
        department: student.departmentName ? student.departmentName : "",
    }

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >
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
                        <InfoTable items={items}/>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
};

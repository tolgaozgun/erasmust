import {useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid, Typography,
} from '@mui/material';
import React from 'react';
import {InfoTable} from "../info-table";

;


export const ViewBilkentCourseInfo = (props) => {


    return (
        <Card>
            <CardHeader
                titleTypographyProps={{variant: 'h5'}}
                subheaderTypographyProps={{fontSize: 18}}
                subheader="Course information about Bilkent Course"
                title="Bilkent Course Information"
            />
            <Divider/>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <InfoTable items={props.course}/>

                </Grid>
            </CardContent>
        </Card>
    );
};

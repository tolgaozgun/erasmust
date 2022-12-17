import {useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid, Typography,
} from '@mui/material';
import React from 'react';
import {InfoTable} from "../../info-table";

const schools = [
    {
        name: "University of California",
    },
    {
        name: "University of München",
    },
]


export const ViewSchoolInfo = (props) => {

    return (
        <Card>
            <CardHeader
                subheader="Course information"
                title="Course Information"
            />
            <Divider/>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    {schools.map((item, index) => (
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Typography
                                color="textPrimary"
                                variant="h6"
                            >
                                School #{index}
                            </Typography>
                            <InfoTable items={item}/>
                        </Grid>
                    ))}

                </Grid>
            </CardContent>
        </Card>
    );
};

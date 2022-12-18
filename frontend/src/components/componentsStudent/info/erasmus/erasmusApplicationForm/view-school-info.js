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


export const ViewSchoolInfo = (props) => {
    const {schools} = props;

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
                                School #{index + 1}
                            </Typography>
                            <InfoTable key={index} items={item}/>
                        </Grid>
                    ))}

                </Grid>
            </CardContent>
        </Card>
    );
};

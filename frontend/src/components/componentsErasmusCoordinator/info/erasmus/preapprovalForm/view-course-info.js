import {useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid, Typography,
} from '@mui/material';
import React from 'react';
import {InfoTable} from "./info-table";

export const ViewCourseInfo = (props) => {

    const coursesAll = props

    console.log(coursesAll)

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
                    {coursesAll.coursesAll.map((item, index) => (
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Typography
                                color="textPrimary"
                                style={{textAlign: "center"}}
                                variant="h6"
                            >
                                Course #{index + 1}
                            </Typography>
                            <Typography
                                color="textPrimary"
                                style={{textAlign: "left", paddingTop: 20}}
                                variant="h6"
                            >
                                Host
                            </Typography>
                            <InfoTable items={item.host}/>
                            <Typography
                                color="textPrimary"
                                style={{textAlign: "left", paddingTop: 20}}
                                variant="h6"
                            >
                                Bilkent
                            </Typography>
                            <InfoTable items={item.bilkent}/>
                        </Grid>
                    ))}

                </Grid>
            </CardContent>
        </Card>
    );
};

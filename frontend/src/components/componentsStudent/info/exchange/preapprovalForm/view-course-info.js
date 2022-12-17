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

const courses = [
    {
        courseName: "Statistics",
        courseCode: "MATH 231",
        courseCredits: 5.5,
        bilkentCourse: "MATH 230 - Statistics",
    },
    {
        courseName: "Database Systems",
        courseCode: "CS 391",
        courseCredits: 6.0,
        bilkentCourse: "CS 401 - Database Systems",
    },
    {
        courseName: "Database Systems",
        courseCode: "CS 391",
        courseCredits: 6.0,
        bilkentCourse: "CS 401 - Database Systems",
    },
]


export const ViewCourseInfo = (props) => {

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
                    {courses.map((item, index) => (
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
                            <InfoTable items={item}/>
                        </Grid>
                    ))}

                </Grid>
            </CardContent>
        </Card>
    );
};

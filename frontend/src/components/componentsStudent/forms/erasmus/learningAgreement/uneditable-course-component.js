import {useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card, CardActions,
    CardContent,
    CardHeader, Checkbox, Collapse,
    Divider,
    Grid, IconButton, ListItemText, MenuItem, OutlinedInput, Select,
    TextField, Typography
} from '@mui/material';
import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import {ArrowDropDown} from "@mui/icons-material";
import {ArrowDropUp} from "@mui/icons-material";

export const UneditableCourseComponent = (props) => {
    const [expand, setExpand] = useState(true)
    const [curCourseName, setCourseName] = useState("")
    const [curCourseCode, setCourseCode] = useState("")

    // TODO: Change this to match current login details
    const isAdmin = true;

    let arrow;
    if (expand) {
        arrow = <ArrowDropDown/>
    } else {
        arrow = <ArrowDropUp/>
    }

    let title = `Course #${props.index + 1}`

    let isCourseCode = curCourseCode.trim().length !== 0
    let isCourseName = curCourseName.trim().length !== 0
    if (isCourseCode || isCourseName) {
        title += ": "
        if (isCourseCode && isCourseName) {
            title += curCourseCode + " - " + curCourseName
        } else if (isCourseCode) {
            title += curCourseCode
        } else {
            title += curCourseName
        }
    }

    return (
        <>
            <Card>
            </Card>
            <CardActions>
                <Grid container>
                    <CardHeader
                        title={title}
                    />
                    <IconButton onClick={() => setExpand(!expand)}>
                        {arrow}
                    </IconButton>
                </Grid>
            </CardActions>
            <Collapse in={expand}>
                <Box sx={{m: 2, mt: -4}}>
                    <CardHeader
                        subheader="Enter details about host institution course"
                        title="Host Institution Course"
                    />
                    <Divider/>
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Course Code"
                                    name={"courses[" + props.index + "].courseCode"}
                                    onBlur={props.handleBlur}
                                    required
                                    value={props.course.courseCode}
                                    disabled={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Course Credits"
                                    name={"courses[" + props.index + "].courseCredits"}
                                    required
                                    value={props.course.courseCredits}
                                    disabled={true}
                                    type="number"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={24}
                            >
                                <TextField
                                    fullWidth
                                    label="Course Name"
                                    name={"courses[" + props.index + "].courseName"}
                                    required
                                    value={props.course.courseName}
                                    disabled={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Box>
            </Collapse>
        </>
    );
};

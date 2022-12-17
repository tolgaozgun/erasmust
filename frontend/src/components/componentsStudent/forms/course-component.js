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

export const CourseComponent = (props) => {
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


    const courseNameChange = (event) => {
        props.setCourse(props.index, "courseName", event.target.value)
        setCourseName(event.target.value)
    }

    const courseCodeChange = (event) => {
        props.setCourse(props.index, "courseCode", event.target.value)
        setCourseCode(event.target.value)
    }

    const onCreditChange = (event) => {
        props.setCourse(props.index, "courseCredits", event.target.value)
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
                                    error={Boolean(props.errors && props.errors.courseCode)}
                                    fullWidth
                                    helperText={props.touched && props.touched.courseCode}
                                    label="Course Code"
                                    name={"courses[" + props.index + "].courseCode"}
                                    onChange={courseCodeChange}
                                    onBlur={props.handleBlur}
                                    required
                                    variant="outlined"
                                    onInvalid={() => {
                                        console.log("Course Code invalid for " + props.index)
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(props.errors && props.errors.courseCredits)}
                                    fullWidth
                                    helperText={props.touched && props.touched.courseCredits}
                                    label="Course Credits"
                                    name={"courses[" + props.index + "].courseCredits"}
                                    onChange={onCreditChange}
                                    onBlur={props.handleBlur}
                                    required
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
                                    error={Boolean(props.errors && props.errors.courseName)}
                                    fullWidth
                                    helperText={props.touched && props.touched.courseName}
                                    label="Course Name"
                                    name={"courses[" + props.index + "].courseName"}
                                    onChange={courseNameChange}
                                    onBlur={props.handleBlur}
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Divider/>
                            <CardHeader
                                subheader="Enter the details for the relevant Bilkent course"
                                title="Bilkent Course"
                            />
                            <Grid
                                item
                                md={12}
                                xs={24}
                            >

                                <Autocomplete
                                    disablePortal
                                    fullWidth
                                    id="bilkent-course-selector"
                                    options={props.courses}
                                    onChange={(event, value) => {
                                        props.setCourse(props.index, "bilkentCourse", value["label"])
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Enter class code or name"/>}
                                />

                            </Grid>
                            {props.editable &&
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <Button>
                                        Delete Course
                                    </Button>

                                </Grid>
                            }
                        </Grid>
                    </CardContent>
                </Box>
            </Collapse>
        </>
    );
};

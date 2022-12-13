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

    // TODO: Change this to match current login details
    const isAdmin = true;

    let arrow;
    if (expand) {
        arrow = <ArrowDropDown/>
    } else {
        arrow = <ArrowDropUp/>
    }

    return (
        <>
            <Card>
            </Card>
            <CardActions>
                <Grid container>
                    <CardHeader
                        title={"Course #" + (props.index + 1)}
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
                                    // error={Boolean(props.touched.hostName && props.errors.hostName)}
                                    fullWidth
                                    // helperText={props.touched.hostName && props.errors.hostName}
                                    label="Course Code"
                                    name="courseCode"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    required
                                    type="number"
                                    // value={props.values.hostName}
                                    variant="outlined"
                                    disabled={!isAdmin}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    // error={Boolean(props.touched.academicYear && props.errors.academicYear)}
                                    fullWidth
                                    // helperText={props.touched.academicYear && props.errors.academicYear}
                                    label="Course Credits"
                                    name="courseCredits"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    required
                                    type="number"
                                    // value={props.values.academicYear}
                                    variant="outlined"
                                    disabled={!isAdmin}
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={24}
                            >
                                <TextField
                                    // error={Boolean(props.touched.semester && props.errors.semester)}
                                    fullWidth
                                    // helperText={props.touched.semester && props.errors.semester}
                                    label="Course Name"
                                    name="courseName"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    required
                                    // value={props.values.semester}
                                    variant="outlined"
                                    disabled={!isAdmin}
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
                                    renderInput={(params) => <TextField {...params} label="Movie"/>}
                                />

                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <Button>
                                    Delete Course
                                </Button>

                            </Grid>
                        </Grid>
                    </CardContent>
                </Box>
            </Collapse>
        </>
    );
};

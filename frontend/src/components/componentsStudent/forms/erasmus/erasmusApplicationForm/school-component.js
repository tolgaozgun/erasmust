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

export const SchoolComponent = (props) => {
    const [expand, setExpand] = useState(true)

    // TODO: Change this to match current login details
    const isAdmin = true;

    let arrow;
    if (expand) {
        arrow = <ArrowDropDown/>
    } else {
        arrow = <ArrowDropUp/>
    }

    let title = `School #${props.index + 1}`
    console.log("Schools " + props.schools)

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
                    <CardContent>
                        <Grid
                            item
                            md={12}
                            xs={24}
                        >
                            <Autocomplete
                                disablePortal
                                fullWidth
                                disabled={!props.editable}
                                id={"bilkent-course-selector" + props.index}
                                options={props.schools}
                                renderInput={(params) => <TextField {...params} label="Enter school name"/>}
                            />

                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            {props.editable &&
                                <Button>
                                    Delete School
                                </Button>
                            }

                        </Grid>
                    </CardContent>
                </Box>
            </Collapse>
        </>
    );
};

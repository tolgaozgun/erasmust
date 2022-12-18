import {useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import React from 'react';

export const AccountOutgoingErasmus = (props) => {
    const [values, setValues] = useState({
        engLetterGrade101: "A",
        engLetterGrade102: "A",
        erasmusPoint: 9133.23
    });

    // TODO: Change this to match current login details
    const isAdmin = false;


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate
            {...props}
        >
            <Card>
                <CardHeader
                    subheader="Information about Erasmus program"
                    title="Outgoing Erasmus Student Information"
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
                                label="English 101 Letter Grade"
                                name="engLetterGrade101"
                                onChange={handleChange}
                                required
                                value={values.engLetterGrade101}
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
                                fullWidth
                                label="English 102 Letter Grade"
                                name="engLetterGrade102"
                                onChange={handleChange}
                                required
                                value={values.engLetterGrade102}
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
                                fullWidth
                                label="Erasmus Point"
                                name="erasmusPoint"
                                onChange={handleChange}
                                required
                                value={values.erasmusPoint}
                                variant="outlined"
                                disabled={!isAdmin}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider/>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >

                </Box>
            </Card>
        </form>
    );
};

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

export const AccountIncomingErasmus = (props) => {
    const [values, setValues] = useState({
        partnerUniversity: "École Polytechnique Fédérale de Lausanne"
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
                    title="Incoming Erasmus Student Information"
                />
                <Divider/>
                <CardContent>
                    <Grid
                        container
                    >
                        <Grid
                            item
                            md={12}
                            xs={24}
                        >
                            <TextField
                                fullWidth
                                label="Partner University"
                                name="partnerUniversity"
                                onChange={handleChange}
                                required
                                value={values.partnerUniversity}
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

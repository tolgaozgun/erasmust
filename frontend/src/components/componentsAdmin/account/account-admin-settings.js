import {useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader, Checkbox,
    Divider,
    Grid, ListItemText, MenuItem, OutlinedInput, Select,
    TextField
} from '@mui/material';
import React from 'react';
import InputLabel from "@mui/material/InputLabel";

export const AccountAdminSettings = (props) => {
    const roles = [
        "Student",
        "Outgoing Erasmus Student",
        "Outgoing Exchange Student",
        "Incoming Erasmus Student",
        "Incoming Exchange Student",
        "Instructor",
        "Dean",
        "Exchange Coordinator",
        "Erasmus Coordinator",
        "Board Member",
        "University Administrator",
        "Administrator",
    ]

    const [selectedRole, setSelectedRoles] = useState([
        "Student",
    ])
    const [values, setValues] = useState({
        partnerUniversity: "École Polytechnique Fédérale de Lausanne"
    });

    // TODO: Change this to match current login details
    const isAdmin = false;

    const rolesChange = (event) => {
        const {
            target: {value},
        } = event;
        setSelectedRoles(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

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
                    subheader="Edit user details"
                    title="Admin Settings"
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
                            <InputLabel id="role-selector">Roles</InputLabel>
                            <Select
                                fullWidth
                                labelId="role-selector"
                                id="userRole"
                                value={selectedRole}
                                multiple
                                input={<OutlinedInput label="Tag"/>}
                                renderValue={(selected) => selected.join(', ')}
                                label="Role"
                                onChange={rolesChange}
                            >
                                {roles.map((role) =>
                                    <MenuItem key={role} value={role}>
                                        <Checkbox checked={selectedRole.includes(role)}/>
                                        <ListItemText primary={role}/>
                                    </MenuItem>
                                )}
                            </Select>

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

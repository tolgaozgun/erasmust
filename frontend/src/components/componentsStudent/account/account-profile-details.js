import { useState } from 'react';
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



export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("firstName") + '.' + localStorage.getItem("lastName") + '@ug.bilkent.edu.tr',
    department: localStorage.getItem("department"),
    starsId: localStorage.getItem("starsId"),
    id: 1,
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
            subheader="General user information"
            title="Profile"
        />
        <Divider />
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
                  label="Stars ID"
                  name="starsId"
                  onChange={handleChange}
                  required
                  type="number"
                  value={values.starsId}
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
                  label="Account ID"
                  name="accountId"
                  onChange={handleChange}
                  type="number"
                  required
                  value={values.id}
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
                  // helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
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
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
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
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
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
                  label="Department"
                  name="department"
                  onChange={handleChange}
                  value={values.department}
                  variant="outlined"
                  required
                  disabled={!isAdmin}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

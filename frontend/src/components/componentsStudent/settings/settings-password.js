import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField, Alert, AlertTitle } from '@mui/material';
import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

export const SettingsPassword = (props) => {

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmationPassword: ""
    },
    validationSchema: Yup.object({
        oldPassword: Yup
            .string()
            .max(255)
            .required("Old password is required"),
        newPassword: Yup
            .string()
            .max(255)
            .required("New password is required"),
        confirmationPassword: Yup
            .string()
            .max(255)
            .required("Confirmation password is required")
    }),
    onSubmit: async (values) => {
        await axios.post("http://92.205.25.135:4/auth/change-password", values)
            .then((response) => {
                if (response && response.data) {
                    console.log(response)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err)
                }
            })
    }
  })
  

  return (
    <form {...props} onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            error={Boolean(formik.touched.oldPassword && formik.touched.oldPassword)}
            fullWidth
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            label="Old Password"
            margin="normal"
            name="oldPassword"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.newPassword && formik.touched.newPassword)}
            fullWidth
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            label="New Password"
            margin="normal"
            name="newPassword"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.confirmPassword && formik.touched.confirmPassword)}
            fullWidth
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            label="Confirm password"
            margin="normal"
            name="confirmationPassword"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmationPassword}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type='submit'
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

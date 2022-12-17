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
import {FieldArray, Form, useFormik} from "formik";
import * as Yup from "yup";
import {CourseComponent, SchoolComponent} from "./school-component";

export const FormSchoolInfo = (props) => {


    // TODO: Change this to match current login details
    const isAdmin = false;

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >
            {props.editable &&
                <Button
                    onClick={props.addSchool}>
                    Add School
                </Button>
            }
            {props.values.schools.map((school, index) => (

                <>
                    <SchoolComponent
                        key={index}
                        index={index}
                        errors={props.errors.schools ? props.errors.schools[`${index}`] : {}}
                        touched={props.touched.schools ? props.errors.schools[`${index}`] : {}}
                        setSchool={props.setSchool}
                        handleChange={props.handleChange}
                        handleBlur={props.handleBlur}
                        schools={props.schools}
                        editable={props.editable}
                    />

                </>
            ))}
        </form>
    );
};

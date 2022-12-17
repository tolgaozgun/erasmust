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
import {CourseComponent} from "../../course-component";

export const FormCourseInfo = (props) => {



    // TODO: Change this to match current login details
    const isAdmin = false;

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >
                <Button
                    onClick={props.addCourse}>
                    Add Course
                </Button>
            {props.values.courses.map((course, index) => (

                <>
                    <CourseComponent
                        key={index}
                        index={index}
                        errors={props.errors.courses ? props.errors.courses[`${index}`] : {}}
                        touched={props.touched.courses ? props.errors.courses[`${index}`] : {}}
                        handleChange={props.handleChange}
                        handleBlur={props.handleBlur}
                        courses={props.courses}
                        editable={props.editable}
                        setCourse={props.setCourse}
                    />

                </>
            ))}
        </form>
    );
};

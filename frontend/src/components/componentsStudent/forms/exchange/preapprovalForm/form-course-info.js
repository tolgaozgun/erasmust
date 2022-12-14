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
import {CourseComponent} from "./course-component";

export const FormCourseInfo = (props) => {

    const schema = Yup.object().shape({
        courses: Yup.array().of(
            Yup.object().shape(
                {
                    courseCode: Yup
                        .string()
                        .required("Course Code is required"),
                    courseCredits: Yup
                        .number()
                        .required("Course Credits is required"),
                    courseName: Yup
                        .string()
                        .required("Course Name is required"),
                    bilkentCourse: Yup
                        .string()
                        .required("Bilkent Course is required"),
                },
                'Course is invalid',
            ),
        ),
    });

    const formik = useFormik({
        initialValues: {
            courses: [
                {
                    courseName: "",
                    courseCode: "",
                    courseCredits: 0.0,
                    bilkentCourse: "",
                }
            ]
        },
        validationSchema: Yup.object({
            courses: Yup.array().of(
                Yup.object().shape(
                    {
                        courseCode: Yup
                            .string()
                            .required("Course Code is required"),
                        courseCredits: Yup
                            .number()
                            .min(0)
                            .required("Course Credits is required"),
                        courseName: Yup
                            .string()
                            .required("Course Name is required"),
                        bilkentCourse: Yup
                            .string()
                            .required("Bilkent Course is required"),
                    },
                    'Course is invalid',
                ),
            ),
        }),
        onSubmit: () => {

        },
    });
    if (!props.hidden) {
        props.handleStep(formik.isValid)
    }

    const addCourse = () => {
        let length = formik.values.courses.length
        const component = {courseCode: '', courseCredits: 0.0, courseName: '', bilkentCourse: ''}
        formik.setFieldValue(`courses.${length}`, component)
        formik.values.courses.push(component)
    }

    // TODO: Change this to match current login details
    const isAdmin = false;

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >

            <Button
                onClick={addCourse}>
                Add Course
            </Button>
            {formik.values.courses.map((course, index) => (

                <>
                    <CourseComponent
                        key={index}
                        index={index}
                        errors={formik.errors.courses ? formik.errors.courses[`${index}`] : {}}
                        touched={formik.touched.courses ? formik.errors.courses[`${index}`] : {}}
                        setFieldValue={formik.setFieldValue}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        courses={props.courses}
                        name="courseName"
                    />

                </>
            ))}
        </form>
    );
};

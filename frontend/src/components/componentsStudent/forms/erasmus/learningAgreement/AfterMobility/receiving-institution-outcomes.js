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
import {AfterMobilityCourse} from "./after-mobility-course";

export const ReceivingInstitutionOutcomes = (props) => {

    const formik = useFormik({
        initialValues: {
            courses: [
                {
                    courseName: "",
                    courseCode: "",
                    courseCredits: 0.0,
                    courseCompleted: false,
                    courseGrade: "F",
                    startOfStudy: new Date(),
                    endOfStudy: new Date(),
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
                        courseCompleted: Yup
                            .boolean()
                            .required("Course Completed is required"),
                        courseGrade: Yup
                            .string()
                            .max(15)
                            .required("Course Grade is required"),
                        startOfStudy: Yup
                            .date()
                            .required("Start of study date is required"),
                        endOfStudy: Yup
                            .date()
                            .required("End of study date is required")
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
        const component =
            {
                courseName: "",
                courseCode: "",
                courseCredits: 0.0,
                courseCompleted: false,
                courseGrade: "F"
            }
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
                    <AfterMobilityCourse
                        key={index}
                        index={index}
                        errors={formik.errors.courses ? formik.errors.courses[`${index}`] : {}}
                        touched={formik.touched.courses ? formik.touched.courses[`${index}`] : {}}
                        setFieldValue={formik.setFieldValue}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        courses={props.courses}
                        editable={true}
                    />

                </>
            ))}
        </form>
    );
};

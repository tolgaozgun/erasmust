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
import {CourseComponent} from "../../../course-component";
import {UneditableCourseComponent} from "../uneditable-course-component";

export const SendingInstitutionRecognition = (props) => {

    return (
        <form
            autoComplete="off"
            noValidate
            hidden={props.hidden}
        >

            {props.values.map((course, index) => (

                <>
                    <UneditableCourseComponent
                        key={index}
                        index={index}
                        course={course}
                        disabled={true}
                    />

                </>
            ))}
        </form>
    );
};

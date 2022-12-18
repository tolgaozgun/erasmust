import {
    Input,
    Button,
    Typography,
    Grid,
    CardMedia
} from "@mui/material"
import {useState} from 'react';
import React from 'react';
import axios from "axios";


export const FileUpload = (props) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadedFileError, setUploadedFileError] = useState("");
    const [viewFile, setViewFile] = useState(null);
    const hiddenFileInput = React.useRef(null);

    const data = props.data
    const fileType = props.fileType
    const handleFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setUploadedFile(e.target.result);
                    setUploadedFileError("");
                    props.handleSubmission(selectedFile);
                }

            } else {
                setUploadedFile(null);
                setUploadedFileError("Please select a valid file");
            }
        } else {
            console.log("Select the file");
        }
    }

    const handleFileSubmit = () => {

    }

    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    const handleFileView = (e) => {
        e.preventDefault();
        if (uploadedFile != null) {
            setViewFile(uploadedFile);
        } else {
            alert("Select the file");
            setViewFile(null);
        }
    }

    return (
        <Grid
            container
            spacing={3}
        >
            <Grid
                item
                md={6}
                xs={12}
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClick}
                >
                    Upload A File
                </Button>
                <input type="file" onChange={handleFileChange} ref={hiddenFileInput} style={{display: "none"}} required></input>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {uploadedFileError}
                </Typography>
            </Grid>

            <Grid
                item
                md={6}
                xs={12}
            >
                <CardMedia
                    component={"img" || ""}
                    src
                ></CardMedia> 
            </Grid>
        </Grid>
    );
};



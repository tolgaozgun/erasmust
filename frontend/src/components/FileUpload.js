import {
    Input,
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    Card,
    CardContent,
    Divider,
    Grid,
    CardHeader,
    CardMedia
} from "@mui/material"
import {useState} from 'react';
import React from 'react';


export const FileUpload = (props) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadedFileError, setUploadedFileError] = useState("");
    const [viewFile, setViewFile] = useState(null);

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
                    type="submit"
                >
                    Upload A Png
                </Button>
                <Input type="file" onChange={handleFileChange} style={{display: "none"}} required></Input>
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
                    component="img"
                    src={viewFile}
                ></CardMedia>
            </Grid>
            <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleFileView}
                sx={{
                    mx: 3
                }}
            >
                View Signature
            </Button>

            <Button
                color="primary"
                variant="contained"
                type="submit"
            >
                Submit Signature
            </Button>
        </Grid>
    );
};



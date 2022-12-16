import {
    Input,
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    Divider,
    Grid,
    CardHeader,
    CardMedia
} from "@mui/material"
import { useState } from 'react';
import React from 'react';


export const Signature = (props) => {
    const [pngFile, setPngFile] = useState(null);
    const [pngFileError, setPngFileError] = useState("");
    const [viewPng, setViewPng] = useState(null);
    const hiddenFileInput = React.useRef(null);

    const fileType = ["image/png"];
    const handlePngFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPngFile(e.target.result);
                    setPngFileError("");
                }
            } else {
                setPngFile(null);
                setPngFileError("Please select a valid file with .png extension");
            }
        } else {
            console.log("Select the png file");
        }
    }

    const handlePngFileSubmit = () => {

    }

    const handleClick = event => {
      hiddenFileInput.current.click();
    }

    const handlePngFileView = (e) => {
        e.preventDefault();
        if (pngFile != null) {
            setViewPng(pngFile);
        } else {
            alert("Select the png file");
            setViewPng(null);
        }
    }
    
    return (
        <form
          autoComplete="off"
          noValidate
          {...props}
        >
          <Card>
            <CardHeader
              subheader="The information can be edited"
              title="Signature"
            />
            <Divider/>
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
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClick}
                  >
                    Upload A Png
                  </Button>
                  <input  type="file" onChange={handlePngFileChange} ref={hiddenFileInput} style={{display: "none"}} required></input>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    {pngFileError}
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 <CardMedia
                    component="img"
                    src={viewPng}
                  ></CardMedia> 
                </Grid>                   
              </Grid>
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
                onClick={handlePngFileView}
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
            </Box>
          </Card>
        </form>
    );
};



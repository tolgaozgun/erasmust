import React, { Component } from "react";
// import { Save, Delete } from "@material-ui/icons";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import DoneIcon from "@mui/icons-material/Done";

const styles = {
    Icon: {
        marginLeft: "auto",
        width: "10%",
    },
    Paper: {
        margin: "auto",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        width: 500,
    },
};

class EditToDo extends Component {
    inputRef = React.createRef();
    render() {
        return (
            <Grid xs={12} item key={this.props.index}>
                <Paper elevation={2} style={styles.Paper}>
                    <form
                        onSubmit={() => {
                            this.props.saveTodo(
                                this.props.index,
                                this.inputRef.current.value
                            );
                        }}
                        style={{ display: "flex" }}
                    >
                        <Input
                            style={{ width: "90%" }}
                            defaultValue={this.props.todo}
                            inputRef={this.inputRef}
                        />
                        <IconButton
                            type="submit"
                            color="primary"
                            aria-label="Add"
                            style={styles.Icon}
                        >
                            <DoneIcon />
                        </IconButton>
                    </form>
                </Paper>
            </Grid>
        );
    }
}

export default EditToDo;

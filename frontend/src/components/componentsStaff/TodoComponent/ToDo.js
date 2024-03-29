import React, { Component, Fragment } from "react";
// import { Delete, Build } from "@material-ui/icons";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { CSSTransition } from "react-transition-group";

const styles = {
    Icon: {
        marginLeft: "auto",
    },
    Paper: {
        margin: "auto",
        padding: 10,
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        width: 500,
    },
};

class ToDo extends Component {
    state = {
        fade: false,
    };

    gridRef = React.createRef();

    deleteTodo = () => {
        const fade = true;
        this.setState({ fade });

        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 500);
        });

        promise.then(() => this.props.deleteTodo(this.props.index));
        console.log(this.state);
    };

    render() {
        const gridClass = this.state.fade ? "fade-out" : "";

        return (
            <Grid
                xs={12}
                className={`${gridClass}`}
                item
                key={this.props.index}
                ref={this.gridRef}
            >
                <Paper elevation={2} style={styles.Paper}>
                    <span style={styles.Todo}>{this.props.todo}</span>
                    <IconButton
                        color="primary"
                        aria-label="Edit"
                        style={styles.Icon}
                        onClick={() => this.props.updateTodo(this.props.index)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        color="secondary"
                        aria-label="Delete"
                        onClick={this.deleteTodo}
                    >
                        <DeleteIcon
                            color="primary"
                            aria-label="Edit"
                            style={styles.Icon}
                        />
                    </IconButton>
                </Paper>
            </Grid>
        );
    }
}

export default ToDo;

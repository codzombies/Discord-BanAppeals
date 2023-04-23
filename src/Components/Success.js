import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>Success! Your ban appeal has been submitted to the Staff!</h1>
                <h3>Please allow some time for the team to review your appeal. Submitting multiple appeals will result in automatic denial.</h3>
            </Grid>
        );
    }
}

export default Success;

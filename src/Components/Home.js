import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {oauth} from "../App";
import { mdiDiscord } from '@mdi/js';
import Icon from "@mdi/react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const crypto = require('crypto');

class Home extends Component {
    render() {
        const url = oauth.generateAuthUrl({
            scope: ["identify", "email"],
            state: crypto.randomBytes(16).toString("hex"), // Be aware that randomBytes is sync if no callback is provided
        });

        return (
            <Grid container alignItems={"center"} justify="center" direction="column">
                <Grid item xs={12}>
                    <Button startIcon={<Icon size={1} path={mdiDiscord}/>} href={url} size={"large"} className={"button"}>Login with Discord</Button>
                </Grid>
                <Grid item xs={12}>
                    <Box mt={2} p={2} border={1} borderRadius={8} borderColor="grey.300">
                        <Typography variant="h5" component="h2" gutterBottom>
                            Appealing your Call of Duty Zombies Discord Ban
                        </Typography>
                        <Typography variant="body1" component="p">
                            This website provides you the ability to appeal your Call of Duty Zombies Discord ban. Sign in through Discord using the button above 
                            and fill out the questions to the best of your ability. If your appeal is accepted, you will receive a response through your Discord account's email inbox in the near future. 
                            You will not receive any response if your appeal is denied. If you are unsure about the reason for your ban, please refer to the Call of Duty Zombies#5103 Discord Bot under the
                            reason field for your ban reason.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default Home;

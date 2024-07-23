import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {oauth} from "../App";
import { mdiDiscord } from '@mdi/js';
import Icon from "@mdi/react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const crypto = require('crypto');

class Home extends Component {
    render() {
        const url = oauth.generateAuthUrl({
            scope: ["identify", "email"],
            state: crypto.randomBytes(16).toString("hex"), // Be aware that randomBytes is sync if no callback is provided
        });

        return (
            <Container maxWidth="md">
                <Grid container alignItems="center" justify="center" direction="column" spacing={3}>
                    <Grid item xs={12}>
                        <Button startIcon={<Icon size={1} path={mdiDiscord}/>} href={url} size="large" className="button">
                            Login with Discord
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={2} p={2} border={1} borderRadius={8} borderColor="grey.300">
                            <Typography variant="h5" component="h2" align="center" gutterBottom>
                                Appeal a Call of Duty Zombies Discord Ban
                            </Typography>
                            <Typography variant="body1" component="p" align="center">
                                This website lets you appeal your Call of Duty Zombies Discord ban.
                                Sign in through Discord using the button above and complete the questions to the best of your ability.
                                If your appeal is accepted, you will get a response via your Discord account's email.
                                You will not receive a response if your appeal is denied.
                                If you're unsure about the reason for your ban, check your direct messages with the Call of Duty Zombies#5103 Discord Bot where it is located in the reason field.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Home;
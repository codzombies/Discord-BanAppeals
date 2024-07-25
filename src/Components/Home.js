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
                                How To Appeal My Discord Ban?
                            </Typography>
                            <Typography variant="body1" component="p" align="center">
                                Sign in through Discord using the button above and complete the questions to the best of your ability. 
                                If you're unsure about the reason for your ban, check your direct messages with the Call of Duty Zombies#5103 Discord Bot where it is located in the reason field. 
                                Providing an incorrect or false reason for your ban will result in the appeal being denied.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={2} p={2} border={1} borderRadius={8} borderColor="grey.300">
                            <Typography variant="h5" component="h2" align="center" gutterBottom>
                                How Do I Know My Appeal Was Accepted?
                            </Typography>
                            <Typography variant="body1" component="p" align="center">
                                When logging in through Discord, the email of that account is temporarily stored through our integration. 
                                If your appeal is accepted, you will receive an email from our domain (@zombiesdiscord.com) notifying you of a successful appeal. 
                                For appeals that are denied, you will not receive any response and will be unable to make another appeal.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={2} p={2} border={1} borderRadius={8} borderColor="grey.300">
                            <Typography variant="h5" component="h2" align="center" gutterBottom>
                                What Is The Reason For A Denied Appeal?
                            </Typography>
                            <Typography variant="body1" component="p" align="center">
                                There are several reasons an appeal will be denied. Most notably, your ban reason containing "Your ban is permanent and an appeal will not be considered.". 
                                Furthermore, appeals containing lies, insults, or the submission of more than one appeal will also result in your appeal being denied. 
                                Finally, if your ban was for piracy, malicious cheating, or a Discord Terms of Service violation, your appeal cannot be accepted to protect our community.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Home;
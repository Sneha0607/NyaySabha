import useStyles from './Components/styles';
import {Typography, Container, Button, TextField, Paper } from '@material-ui/core';
import LoggedNavbar from './Components/loggedNavbar';
import React from 'react';
import fire from './firebase';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

const Participant = () => {

    const classes = useStyles();
    const [courtRoomCode, setCourtRoomCode] = React.useState();
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState(false);
        
    return(
       <main>
           <LoggedNavbar/>
           <Container className = {classes.cardGrid} maxWidth = "md">
        <Typography variant="h2" align="center" color="textPrimary" family="Roboto" gutterBottom>
        JOIN AS A PARTICIPANT
        </Typography>
        <Paper className = {classes.paperStyleCreate} width={500} elevation = {10} xs={12} md={12} sm={12}>
        <Typography variant = "h5" align = "center" color = "textPrimary" family = "Roboto" gutterBottom>
        Enter Details
        </Typography>
    <form  >
    {error &&<Alert severity="error" >{error}</Alert>}
        <TextField required className = {classes.textField} variant = "outlined" color = "primary"  label = "Court Room Code" onChange = {(e)=>{setCourtRoomCode(e.target.value)}} error = {error}/>
        {success?(
            <>
             <Typography variant = "h5" align = "center" color = "textPrimary" family = "Roboto" gutterBottom>
             Registration Successful!
             </Typography> 
             <Button className = {classes.buttons} color = "primary"  variant = "contained" fullWidth href = "/">Back</Button>
            </> 
        ):(
            <>
            
            <Button className = {classes.buttons} color = "primary" type = "submit" variant = "contained" fullWidth >Join the Court Room</Button>
            </>
        )}
        
    </form>
    </Paper>
       
         </Container>
       </main> 
    );
}
export default Participant;
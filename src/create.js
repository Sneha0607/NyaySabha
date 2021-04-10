import useStyles from './Components/styles';
import {Typography, Container, Button, TextField, Paper, Grid } from '@material-ui/core';
import LoggedNavbar from './Components/loggedNavbar';
import React from 'react';
import {useEffect} from 'react'
import axios from 'axios';
import fire from 'firebase';

const Create = () => {

    const classes = useStyles();
    const [courtName, setCourtName] = React.useState('');
    const [cnr, setCnr] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [description , setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [code , setCode] = React.useState();
    const [courtRoomCodeGenerated, setCourtRoomCodeGenerated] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    const handleGenerateCode = (e) =>{
      e.preventDefault();
      const newCode = Date.now();
      setCode(newCode);
      setCourtRoomCodeGenerated(true);
      const creator = fire.auth().currentUser;
      const courtRoom = {
        courtName: courtName,
        cnr: cnr,
        title: title,
        description: description,
        date: date,
        time: time,
        code: newCode,
        creatorid: creator.uid
      }
      axios.post('http://localhost:5000/createcourtroom', courtRoom)
      .catch((err)=>{
        console.log(err);
      });

    }


    return(
       <main>
           <LoggedNavbar/>
           <Container className = {classes.cardGrid} maxWidth = "md">
        <Typography variant="h2" align="center" color="textPrimary" family="Roboto" gutterBottom>
        CREATE A COURT-ROOM
        </Typography>
        <Grid container>
        <Grid item xs={12} sm={12} md={12}>
        <Paper className = {classes.paperStyleCreate} width={500} elevation = {10} xs={12} md={12} sm={12}>
        <Typography variant = "h5" align = "center" color = "textPrimary" family = "Roboto" gutterBottom>
        Enter Details
        </Typography>
    <form onSubmit = {handleGenerateCode}>
        <TextField required className = {classes.textFieldCreate} variant = "outlined" color = "primary"  label = "Court Name" onChange = {(e)=>{setCnr(e.target.value)}}/>
        <TextField required className = {classes.textFieldCreate} variant = "outlined" color = "primary"  label = "Case Number Record (CNR)" onChange = {(e)=>{setCnr(e.target.value)}}/>
        <TextField required className = {classes.textFieldCreate} variant = "outlined" color = "primary"  label = "Title" onChange = {(e)=>{setTitle(e.target.value)}}/>
        <TextField required className = {classes.textFieldCreate} variant = "outlined" color = "primary"  label = "Description" onChange = {(e)=>{setDescription(e.target.value)}}/>
        <TextField required className = {classes.textFieldCreate} variant = "outlined" color = "primary"  label = "Date" type = "date" defaultValue = "" onChange = {(e)=>{setDate(e.target.value)}}/>
        <TextField required className = {classes.textFieldCreate} variant = "outlined" color = "primary"  label = "Time" type = "time" defaultValue = "" onChange = {(e)=>{setDate(e.target.value)}}/>
        {courtRoomCodeGenerated ? (
          <>
          <Typography variant="h4" align="center" color="textPrimary" family="Roboto" gutterBottom>Court Room succesfully generated!! Your code is {code}</Typography>
          <Button className = {classes.buttons} color = "primary"  variant = "contained" fullWidth href = "/">Back</Button>
          </>
        ):(
          <Button className = {classes.buttons} color = "primary" type = "submit" variant = "contained" fullWidth >Create</Button>
        )}
        
    </form>
    
    </Paper>
    </Grid>
    </Grid>
         </Container>
       </main> 
    );
}
export default Create;

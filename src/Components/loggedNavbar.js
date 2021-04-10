import useStyles from './styles';
import {Typography, Toolbar, Button, AppBar} from '@material-ui/core';
import {AccountBalance} from '@material-ui/icons';
import fire from '../firebase';
import {useHistory} from 'react-router-dom';

const LoggedNavbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleLogout = () =>{
        fire.auth().signOut();
        history.push('/login');
    };

    return(
            <AppBar className = {classes.appBar} color = "primary">
            <Toolbar>
               <Button color="inherit" href = "/" startIcon = {<AccountBalance/>} >
               <Typography variant="h6" style={{flex:1}}>
                NYAYSABHA
               </Typography>
               </Button>
               <Typography variant="h6" style={{flex:1}}>
               </Typography>
               <Button color="inherit" onClick = {()=>{handleLogout();}}>Logout</Button>
            </Toolbar>
            </AppBar>
    );
}
export default LoggedNavbar;
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import db from './firebasedatabase.js';
import cors from 'cors';

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.port || 5000;
app.get('/', (req, res)=>{
    res.send('Home!');
});
app.post('/createuser', function(req, res){
    const newUser = {
        Name: req.body.displayname,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password,
        PhoneNo: req.body.phoneNo,
        userid: req.body.userid
    };
    db.ref('users/' + newUser.userid).set({
        username: newUser.Username,
        name: newUser.Name,
        email: newUser.Email,
        phoneNumber: newUser.PhoneNo,
        password: newUser.Password,
        userid:newUser.userid
    });
    console.log(newUser);

});

app.get('/userprofile/:userid', function(req, res){
    const userid = req.params.userid;
    db.ref('/users/'+ userid).on('value', snap=>{
        const user = snap.val();
        res.send(JSON.stringify(user));
   }); 
});

app.post('/createcourtroom', function(req, res){
    const election = {
        courtName: req.body.courtName,
        cnr: req.body.cnr,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        code: req.body.code,
        creatorid: creator.uid
    }
});

app.listen(port, console.log('Listening to port 5000'));
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
    db.ref('courtrooms/'+ req.body.code).set({
        courtName: req.body.courtName,
        cnr: req.body.cnr,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        code: req.body.code,
        creatorid: req.body.creatorid
    })
});
app.post('/judgeregistration', function(req, res){
    db.ref('courtrooms/'+ req.body.code+'/judges/'+req.body.judgeid).set({
        code: req.body.code,
        judgeid: req.body.judgeid
    })
    db.ref('users/'+ req.body.judgeid+'/asjudge/'+req.body.code).set({
        code: req.body.code
    })
    
});
app.post('/participantregistration', function(req, res){
    db.ref('courtrooms/'+ req.body.code+'/participants/'+req.body.participantid).set({
        code: req.body.code,
        participantid: req.body.participantid
    })
    db.ref('users/'+ req.body.participantid+'/asparticipant/'+req.body.code).set({
        code: req.body.code
    })
});
app.post('/lawyerregistration', function(req, res){
    db.ref('courtrooms/'+ req.body.code+'/lawyers/'+req.body.lawyerid).set({
        code: req.body.code,
        lawyerid: req.body.lawyerid
    })
    db.ref('users/'+ req.body.lawyerid+'/aslawyer/'+req.body.code).set({
        code: req.body.code
    })
});
app.post('/viewerregistration', function(req, res){
    db.ref('courtrooms/'+ req.body.code+'/viewers/'+req.body.viewerid).set({
        code: req.body.code,
        viewerid: req.body.viewerid
    })
    db.ref('users/'+ req.body.viewerid+'/asviewer/'+req.body.code).set({
        code: req.body.code
    })
});
app.listen(port, console.log('Listening to port 5000'));
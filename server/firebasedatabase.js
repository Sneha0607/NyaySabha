import admin from 'firebase-admin';
import serviceKey from'./nyaysabha-firebase-adminsdk-g2hge-95488df8dd.json';
admin.initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: 'https://nyaysabha-default-rtdb.firebaseio.com'
});
var db = admin.database();
export default db;
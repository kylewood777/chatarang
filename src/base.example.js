import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

const config = {
    apiKey: "your api key",
    authDomain: "your auth domain",
    databaseURL: "your database url",
    projectId: "your project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your message sender id"
  };

  const app=firebase.initializeApp(config);
  const db=app.database();

  export default Rebase.createClass(db)
import app from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAX_gZ6crVt0L-IWe1ijWhTdt2IrLk0-OQ",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://stocker-71d5a.firebaseio.com",
    projectId: "stocker-71d5a",
    storageBucket: '',
  };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
  }

    // *** User API ***

    strain = uid => this.db.ref(`strains/${uid}`);

    strains = () => this.db.ref('strains');
};

export default Firebase;
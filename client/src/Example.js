import React from 'react';
import './index.css';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAX_gZ6crVt0L-IWe1ijWhTdt2IrLk0-OQ",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://stocker-71d5a.firebaseio.com",
    projectId: "stocker-71d5a",
    storageBucket: '',
};
firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref('strains');

class Index extends React.Component {
    state = {
        strains: []
    };

    loadStrains = () => {
        ref.once('value')
            .then(res => this.setState({strains: res.val()}))
            //.then(res => console.log(res.val()))
            .catch(err => console.log(err));
        }
    
    componentDidMount() {
        this.loadStrains();       
        };

    render() {



        // Write and then read back a string from the Database.
            //ref.once('value').then(res => console.log(res.val()))

        // ref.on('value', snapshot => {
        //     // const strains = snapshot.strains;
        //     console.log(snapshot.key);
            
        // })

        //console.log(this.state);
        

        // ref.on('value', gotData, errData)

        // function gotData(data) {
        //     // console.log (data.val())
        //     // let strains = data.val()
        //     // console.log(strains)
        //     // let keys = Object.keys(strains)
        //     // console.log(keys)
        //     // for (let i = 0; i < keys.length; i++) {
        //     //     let key = keys[i]
        //     //     let strain = strains[key]
        //     //     console.log(strain)
        //     //     this.setState({strains: strains})
        //     // }
        // }

        // function errData(err) {
        //     console.log('Error !')
        //     console.log(err)
        // }

        return (
            <div className='container'>
            {this.state.strains.map(strain => (
                <div>
                    {strain.name}
                </div>
            ))}

            </div>
        )
    }
}
export default Index;
import React, { Component } from 'react';
import { withFirebase } from './components/Firebase';
import Firebase from "./components/Firebase/firebase"

const Page = () => (
    <SignUpForm />
);

class SignUpFormBase extends Component {


  render() {

    Firebase.strain('value', gotData, errData)

    function gotData(data) {
        let todos = data.val()
        // console.log(todos)
        let keys = Object.keys(todos)
        // console.log(keys)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            let todo = todos[key]
            console.log(todo)
        }
    }

    function errData(err) {
        console.log('Error !')
        console.log(err)
    }

    return (
        <div className='container'>
            <h1>To Do List</h1>
            <input value={this.state.term} onKeyDown={this.addTask} onChange={this.handleInput} placeholder="  Add your tasks here"></input>
            <ul>
                {this.state.todos.map(x => {
                    return (
                        <li>
                            <input type="checkbox" id={x} name={x} value={x} />
                            <label for={x}>{x}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
}

const SignUpForm = withFirebase(SignUpFormBase);

export default Page;

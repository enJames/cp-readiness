'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

let hook = document.getElementById('hook');

//Components

class TodoComponent extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <h1>This is {this.props.newUser.name}'s Info:</h1>
                    <p><strong>Age:</strong> <span>{this.props.newUser.age}</span></p>
                    <p><strong>Occupation:</strong> <span>{this.props.newUser.occupation}</span></p>
                    <h3>Below are {this.props.newUser.name}'s devices:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Device Name</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{this.props.newUser.devices.lenovo.name}</td>
                                <td>{this.props.newUser.devices.lenovo.category}</td>
                                <td>{this.props.newUser.devices.lenovo.price}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{this.props.newUser.devices.samsung.name}</td>
                                <td>{this.props.newUser.devices.samsung.category}</td>
                                <td>{this.props.newUser.devices.samsung.price}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{this.props.newUser.devices.hp.name}</td>
                                <td>{this.props.newUser.devices.hp.category}</td>
                                <td>{this.props.newUser.devices.hp.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1>Hi</h1>
                    <h3>It is {new Date().toLocaleTimeString()}.</h3>
                </div>
            </div>
        )
    }
}
class User {
    constructor(name, age, occupation, devices) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.devices = devices;
    }
}
let myDevices = {
    lenovo: {
        category: "Phone",
        name: "Vibe S1",
        price: "85,000"
    },
    samsung: {
        category: "Tablet",
        name: "Galaxy Tab(10.4 inch)",
        price: "55,000"
    },
    hp: {
        category: "Laptop",
        name: "HP (1TB)",
        price: "96,000"
    }
}

let newUser = new User("King", "28", "Software Engineer", myDevices)

ReactDOM.render(<TodoComponent newUser ={newUser}/>, hook);

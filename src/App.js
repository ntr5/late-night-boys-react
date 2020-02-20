import React, { Component } from 'react';
import './App.css'
import NavBar from './NavBar'
import Welcome from './welcome';


export default class  extends Component {
    constructor() {
        super()

        this.state = {
            name: "Nate"
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <Welcome />
                <Welcome name={this.state.name}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
                <Welcome name={"Someone else"}/>
            </div>
        )
    }
}
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list'

//Components
export default class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            todos: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({
            term: event.target.value
        });
    }
    onSubmit(event) {
        alert('Click!')
        event.preventDefault();
        this.setState({
            term: '',
            todos: [...this.state.todos, this.state.term]
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Add Todo</button>
                </form>
                <List todos={this.state.todos}/>
            </div>
        )
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

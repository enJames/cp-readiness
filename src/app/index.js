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
        }
    }
    render() {
        return(
            <div>
                <form>
                    <input/>
                    <button>Add Todo</button>
                </form>
                <List />
            </div>
        )
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

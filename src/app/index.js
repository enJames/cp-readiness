const React = require('react');
const ReactDOM = require('react-dom');
const createReactClass = require('create-react-class');

let hook = document.getElementById('hook');

//Components

let TodoComponent = createReactClass({
    render: function() {
        return(
            <h1>Hello World!</h1>
        )
    }
});

ReactDOM.render(<TodoComponent/>, hook);

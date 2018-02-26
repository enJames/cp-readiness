import React from 'react';

const List = props => (
    <ul>
        {
            props.todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
    </ul>
)

export default List;

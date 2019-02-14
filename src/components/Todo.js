import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                 <h3> {this.props.todo_name} </h3>
            </div>
        );
    }
}

export default Todo;
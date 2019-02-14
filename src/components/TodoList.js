import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
    state = {
        todolist: [ "todo "]
    }


    render() {
        return (
            <div>
                 <h1> Todo List to help you organize</h1>
                {this.state.item_list.map( item => {
                    return(<Todo item_name={item}/>)
                })} 
            </div>
        );
    }
}

export default TodoList;
import React from 'react';

const ToDo = ({todos, deleteTodo})=> {

    const todoList = todos.length ? (todos.map(todo=> {
        return (
            <div className="collection-item" key={todo.id} onClick={()=> {deleteTodo(todo.id)}}>
                <span>{todo.content}</span>
            </div>
        )
    })) : (<p className="center"> You dont have any ToDo </p>);

    return(
        <div className="todo collection">
            {todoList}
        </div>
    );
};

export default ToDo
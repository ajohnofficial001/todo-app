import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import "./styles.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return <div className="container"> 
            <div className="todos">
              <span className="todos__heading">Tasks</span>
              {todos.map((todo) => (
              <SingleTodo 
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
              />
            ))}
            </div>
         </div>;

};

export default TodoList;


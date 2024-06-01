import { v4 as uuidv4 } from 'uuid';

const Todo =[
    { task : "mow the yard", id : uuidv4()},
    { task : "mow the yard1", id : uuidv4()},
    { task : "mow the yard2", id : uuidv4()},
    { task : "mow the yard3", id : uuidv4()}
];

export function TodoList(){
    return (
        <ul>
            {Todo.map((todo)=>{
                return <li key={todo.id}>{todo.task}</li>;
            })}
        </ul>
    );
}

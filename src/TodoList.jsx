import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, taskList: "apple", cost: null },
    { id: 2, taskList: "pizza", cost: null }
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [enteredCost, setCost] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTaskList = {
      id: Date.now(),
      taskList: newTodo,
      cost: enteredCost.trim() !== '' ? enteredCost : null
    };

    setTodo([...todo, newTaskList]);
    setNewTodo('');
    setCost('');
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter(ref => ref.id !== id));
  };

  return (
    <>
      <div>
        <h1>React Todo App</h1>
        <h2>Total Tasks: {todo.length}</h2> 

        <input
          type="text"
          placeholder="Enter the task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter the cost (optional)"
          value={enteredCost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
        <button onClick={addTodo}>Add Todo</button>


        <ul>
          {todo.map((tdb) => (
            <li key={tdb.id}>
              {tdb.taskList}
              {tdb.cost !== null && <span>—Cost: ₹{tdb.cost}</span>}
              <button onClick={() => deleteTodo(tdb.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
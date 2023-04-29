import { people } from "./Scientist_data.js";

export default function App() {
  const todos = [
    { id: 1, text: "wake up", done: true },
    { id: 2, text: "brush", done: false },
    { id: 3, text: "exercise", done: false },
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList array={todos} name="alice" />
      <AddTodo />
      <Scientist />
    </div>
  );
}

function Scientist() {
  const arr = people.map((person) => {
    return (
      <li key={person.id}>
        <h4>{person.name}</h4>
        <p>
          My man was an accomplished {person.profession}. I mean I am not gay
          but I can appreciate a good sigma man. His biggest accomplishment
          being his work with "{person.accomplishment}".
        </p>
      </li>
    );
  });
  return (
    <article>
      <h3>Scientists</h3>
      <ul>{arr}</ul>
    </article>
  );
}

function Sample({ name }) {
  return <h1>hello {name}!</h1>;
}

function TodoList(props) {
  return (
    <>
      <Sample {...props} />
      <ul>
        {props.array.map((todo, index) => (
          <li key={todo["id"]}>
            {index + 1} {todo["text"]}
          </li>
        ))}
      </ul>
    </>
  );
}

function AddTodo() {
  function HandleAddTodo(event) {
    event.preventDefault();
    console.log(event.target.elements.addTodo.value);
  }
  return (
    <form onSubmit={HandleAddTodo}>
      <input name="addTodo" placeholder="Add todo" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

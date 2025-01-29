import { use } from "react";

function App() {
  const element = [1, 2, 3, 4, 5, "Hello World"];
  const users = [
    { id: 1, name: "Faizan", age: 24 },
    { id: 2, name: "Faheem", age: 60 },
    { id: 3, name: "Moaz", age: 22 },
  ];
  console.log("Element: ", element);

  return (
    <>
      <div>
        <h1>Eleement</h1>
        <ul>
          {element.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
        <br />
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}, {user.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

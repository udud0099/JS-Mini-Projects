import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>hi bro</h1>
      <p>total joke is {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <h1>{joke.content}</h1>
        </div>
      ))}
    </>
  );
}

export default App;

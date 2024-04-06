import  { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  // Sample jokes array containing objects with id and joke properties
  const sampleJokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
    { id: 3, joke: "Why couldn't the bicycle stand up by itself? It was two-tired." },
    { id: 4, joke: "Parallel lines have so much in common. It's a shame they'll never meet." },
    { id: 5, joke: "I'm reading a book on anti-gravity. It's impossible to put down!" }
  ];

  // Assigning sampleJokes to jokes state
  useState(() => {
    setJokes(sampleJokes);
  }, []);

  return (
    <>
      <h1>Chai or Full stack</h1>
      <p>Jokes : {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;

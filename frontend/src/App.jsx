import { useState } from "react";
import "./App.css";

function App() {
	const [jokes, setJokes] = useState([]);
	return (
		<>
			<h1>here are my jokes</h1>
			<p>JOKES: {jokes.length}</p>

			{jokes.map((joke, index) => {
				<div key={joke.id}>
					<h2>{joke.title}</h2>
					<h2>{joke.content}</h2>
				</div>;
			})}
		</>
	);
}

export default App;

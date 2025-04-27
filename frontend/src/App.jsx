import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [jokes, setJokes] = useState([]);

	const fetchData = () => {
		axios
			//ab kbhi bhi yha url nhi dalenge hum proxy set kr denge vite.config me vo directly url pr chla jayega
			.get("/api/jokes")
			.then((response) => {
				setJokes(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<h1>here are my jokes</h1>
			<p>JOKES: {jokes.length}</p>
			<button onClick={fetchData}>click me</button>
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

import {useState} from "react";
import "./App.css"; // optional, if you want to add styles

function App() {
	const [name, setName] = useState("React Learner");

	return (
		<div className='App'>
			<h1>Hello, React!</h1>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Enter your name'
			/>
			<MyMessage name={name} />
			<Counter />
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrease
			</button>
			<button onClick={() => setCount(0)}>Reset Count</button>
		</div>
	);
}

function MyMessage(props) {
	return <p>Welcome, {props.name}! Glad you're here.</p>;
}

export default App;

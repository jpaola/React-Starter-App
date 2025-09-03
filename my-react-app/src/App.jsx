import { useState } from "react";
import "./App.css"; // optional, if you want to add styles
import Counter from "./Components/Counter";

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


function MyMessage(props) {
	return <p>Welcome, {props.name}! Glad you're here.</p>;
}

export default App;

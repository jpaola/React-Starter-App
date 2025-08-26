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
		</div>
	);
}

function MyMessage(props) {
	return <p>Welcome, {props.name}! Glad you're here.</p>;
}

export default App;

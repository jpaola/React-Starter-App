import { useState } from "react";
/** 
How prevCount => prevCount + 1 Works

When you call:
setCount(prevCount => prevCount + 1)

You're not assigning prevCount yourself — React does that for you.

🔍 Here’s What’s Actually Happening:

When you call setCount(), you can give it either:
(1) A value (e.g. setCount(count + 1)), or
(2) A function (e.g. setCount(prev => prev + 1))

If you pass a function, React calls that function, passing in the most recent state value as its argument.

📦 Think of it like:

function updateCount(currentState) {
  return currentState + 1;
}

setCount(updateCount);

React does this:

const newValue = updateCount(actualLatestState);

✅ Why This Is Safer Sometimes, the state might not be what you
expect due to: 

(1) Asynchronous updates 
(2) Batching (React combines
updates to optimize performance) 
(3) Multiple state updates firing at once

Using the functional updater form guarantees you're always
working with the true latest state, not a possibly stale value. 


Rule of Thumb: 
Situation Use setState(value)? 
Updating based on a fixed value ✅ Yes 🚫 Not necessary 
ex.
setCount(0);         // ✅ fine
setName("Taylor");   // ✅ fine

Use setState(prev => newValue)? 
Updating based on previous state 🚫 Risky ✅ Recommended 
ex.
setCount(count + 1);            // ❌ might be stale
setCount(prevCount => prevCount + 1);  // ✅ correct

🧪 Mental Shortcut:
Does the new state depend on what it used to be?
If yes → use the functional form.
*/
export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)} disabled={count === 0}>
                Decrease
            </button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
}

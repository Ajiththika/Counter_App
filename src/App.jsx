import { useState } from "react";

function App() {
  // State
  const [count, setCount] = useState(0);

  // Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Simple Counter App</h1>
      
      <p className="text-2xl mb-4">Current Count: <span className="font-semibold">{count}</span></p>

      <div className="flex gap-4 mb-6">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

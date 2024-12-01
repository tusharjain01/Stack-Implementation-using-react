import { useState } from "react";

function App() {
  const [elements, setElements] = useState([
    {
      id: Math.random().toString(16),
      value: 1,
    },
    {
      id: Math.random().toString(16),
      value: 2,
    },
  ]);
  const [input, setInput] = useState(0);

  const ElementComponent = ({ id, value }) => {
    return (
      <div
        key={id}
        id={id}
        className="flex flex-row items-center justify-center p-5 m-2 border-2 border-black"
      >
        {value}
      </div>
    );
  };

  const pushHandler = (e) => {
    e.preventDefault(); // Prevent page refresh
    setElements((prev) => [
      {
        id : Math.random().toString(16),
        value : input
      },...prev
    ]);
  };

  const popHandler = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (elements.length > 0) {
      const removeId = elements.at(0).id;
      console.log(elements);
      const filteredArray = elements.filter((element) => element.id !== removeId);
      setElements([...filteredArray]);
    }
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row h-screen w-screen">
      <div className="basis-1/2 h-full w-full flex items-center justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={pushHandler}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numberInput"
            >
              Enter a number
            </label>
            <input
              type="number"
              id="numberInput"
              placeholder="Enter a number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 invalid:border-red-400"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Push
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={popHandler}
          >
            Pop
          </button>
          <div className="mt-4">
            <label className="font-bold mr-4" htmlFor="isEmpty">
              Is Empty
            </label>
            <input
              type="text"
              id="isEmpty"
              className="border rounded text-center"
              value={elements.length > 0 ? "False" : "True"}
              readOnly
            />
          </div>
          <div className="mt-4">
            <label className="font-bold mr-4" htmlFor="topElement">
              Top Element
            </label>
            <input
              type="text"
              id="topElement"
              className="border rounded text-center"
              value={
                elements.length > 0
                  ? `${elements.at(0).value}`
                  : "Stack is Empty"
              }
              readOnly
            />
          </div>
        </form>
      </div>
      <div className="basis-1/2 flex items-center justify-center h-full w-full overflow-auto">
        <div className="h-4/5 border-2 border-sky-500 w-3/5 flex flex-col flex-nowrap overflow-y-auto">
          {elements.length > 0 ? (
            elements
              .map((element) => (
                <ElementComponent
                  key={element.id}
                  id={element.id}
                  value={element.value}
                />
              ))
          ) : (
            <h2>Empty</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

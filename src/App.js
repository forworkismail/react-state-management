function App() {
  return (
    <div className="App container mx-auto px-4 py-10">
      <div>
        <h1 className="text-3xl font-bold">Budget</h1>
        <div className="p-2">
          <h3 className="font-bold">Your Balance</h3>
          <p className="text-green-400">2,550.3</p>
        </div>
        <div
          className="py-1 flex flex-row justify-evenly  rounded
      shadow-lg"
        >
          <div className="flex flex-col text-center">
            <span className=" font-semibold">Income:</span>
            <span className="text-green-400 px-2 rounded">1,045.50</span>
          </div>
          <div className="flex flex-col text-center">
            <span className=" font-semibold">Expense:</span>
            <span className="text-red-400 px-2 rounded">623.3</span>
          </div>
        </div>
      </div>

      <div className="my-4 rounded-xl shadow-lg px-2 py-4 flex flex-col">
        <h3 className=" font-bold py-2 text-center">History</h3>
        <div>
          <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
            <p>1. ABC</p>
            <p>1300</p>
          </div>
          <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
            <p>2. ABC</p>
            <p>200</p>
          </div>
          <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
            <p>3. ABC</p>
            <p>400</p>
          </div>
          <div className="flex flex-row justify-evenly  text-sm py-2 font-bold">
            <p>4. ABC</p>
            <p>800</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Add new transaction</h1>
          </div>
          <form className="space-y-6 mb-0">
            <div>
              <label for="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <input
                  name="description"
                  type="text"
                  placeholder="Type a description"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none
                  focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label for="value" className="block text-sm font-medium text-gray-700">
                Value
              </label>
              <div className="mt-1">
                <input
                  name="value"
                  type="number"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none
                  focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className='class="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight
               uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

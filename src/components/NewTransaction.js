import React from 'react';

function NewTransaction() {
  return (
    <div className="mt-8">
      <div className="bg-white py-8 px-6 shadow rounded-lg">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Add new transaction</h1>
        </div>
        <form className="space-y-6 mb-0">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="value" className="block text-sm font-medium text-gray-700">
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
  );
}

export default NewTransaction;

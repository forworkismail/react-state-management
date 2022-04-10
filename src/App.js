import { useState } from 'react';
import History from './components/History';
import MainHeader from './components/MainHeader';
import NewTransaction from './components/NewTransaction';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = (description, value) => {
    const result = {
      id: entries.length + 1,
      description,
      value
    };
    setEntries([...entries, result]);
  };
  return (
    <div className="App container mx-auto px-4 py-10">
      <MainHeader title="Budget" />
      <div className="my-4 rounded-xl shadow-lg px-2 py-4 flex flex-col">
        <h3 className=" font-bold py-2 text-center">History</h3>
        {entries.map((entry) => {
          return <History key={entry.id} {...entry} />;
        })}
      </div>
      <NewTransaction addEntry={addEntry} />
    </div>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: '$100',
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: '$20',
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300',
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: '$50',
    isExpense: true
  }
];

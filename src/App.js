import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEntryRedux } from './actions/entries.action';
import History from './components/History';
import MainHeader from './components/MainHeader';
import NewTransaction from './components/NewTransaction';

function App() {
  const [total, setTotal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  const addEntry = (description, value) => {
    dispatch(
      addEntryRedux({
        id: entries.length + 1,
        description,
        value: parseInt(value),
        isExpense: false
      })
    );
  };

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += entry.value);
      }
      return (totalIncomes += entry.value);
    });
    let total = totalIncomes - totalExpenses;
    setTotal(total);
    setTotalIncome(totalIncomes);
    setTotalExpense(totalExpenses);
  }, [entries]);

  return (
    <div className="App container mx-auto px-4 py-10">
      <MainHeader title="Budget" total={total} income={totalIncome} expense={totalExpense} />
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

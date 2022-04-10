import History from './components/History';
import MainHeader from './components/MainHeader';
import NewTransaction from './components/NewTransaction';

function App() {
  return (
    <div className="App container mx-auto px-4 py-10">
      <MainHeader title="Budget" />
      <History />
      <NewTransaction />
    </div>
  );
}

export default App;

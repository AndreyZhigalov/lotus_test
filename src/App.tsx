import MembersTable from './components/MembersTable';
import Notice from './components/Notice';
import Title from './components/Title';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header__container">
        <Title />
      </header>
      <main className="content">
        <Notice />
        <div className="wrapper">
          <MembersTable />
        </div>
      </main>
    </div>
  );
}

export default App;

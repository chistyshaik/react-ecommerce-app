import AppRouter from "./AppRouter";
import './App.css'
import AppProvider from "./contexts/AppProvider";
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <PageHeader/>
        <AppRouter/>
      </div>
    </AppProvider>
  );
}

export default App;

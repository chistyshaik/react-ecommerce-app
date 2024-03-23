import AppRouter from "./AppRouter";
import './App.css'
import AppProvider from "./contexts/AppProvider";
import PageHeader from "./components/PageHeader";
import UserProvider from "./contexts/UserProvider";

function App() {
  return (
    <AppProvider>
      <UserProvider>
        <div className="App">
          <PageHeader/>
          <AppRouter/>
        </div>
      </UserProvider>
    </AppProvider>
  );
}

export default App;

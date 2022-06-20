import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <>
      <UserProvider>
        <Login />
      </UserProvider>
    </>
  );
}

export default App;

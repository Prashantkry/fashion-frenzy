import "./App.css";
import AdminDashboard from "./admin/AdminDashboard";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <SignIn />
      <AdminDashboard />
    </UserContextProvider>
  );
}

export default App;

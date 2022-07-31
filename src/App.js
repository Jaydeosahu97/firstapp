import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

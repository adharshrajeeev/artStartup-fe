import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignupPage from "./pages/Signup/SignupPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignupPage from "./pages/Signup/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import React, { useEffect } from "react";

export function AuthorizeUser({ children }: any) {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to={'/login'} />;

  return children;
}

export function ProtectUser({ children }: any) {
  const token = localStorage.getItem('token');

  if (token) return <Navigate to={'/'} />;

  return children;
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <AuthorizeUser>
              <HomePage />
            </AuthorizeUser>
          } />
          <Route path='/login' element={
            <ProtectUser>
              <Login />
            </ProtectUser>
          } />
          <Route path='/signUp' element={
            <ProtectUser>
              <SignupPage />
            </ProtectUser>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
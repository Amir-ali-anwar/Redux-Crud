import React from 'react'
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from "./components/sharedLayout";
import { AllTodo, AddTodo, Error, Login, ProtectedRoute } from "./pages/";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="/add-Todo" element={<AddTodo />}></Route>
          <Route path="/all-Todo" element={<AllTodo />}></Route>
          {/* <Route path="/edit/:id" element={<Edit />}></Route> */}
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
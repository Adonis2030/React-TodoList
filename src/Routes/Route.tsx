import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import TodoList from "../pages/TodoList";

interface LayoutType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <TodoList />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

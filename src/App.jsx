import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <h1>Vite + React</h1>;
      <HomePage />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/tasks"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            }
          />
        </Routes>
      </Layout> */}
      ;
    </>
  );
}

export default App;

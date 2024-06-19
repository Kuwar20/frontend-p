import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout } from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

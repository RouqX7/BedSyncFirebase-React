import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "./components/HomeAdmin/list/List";
import New from "./components/HomeAdmin/new/New";
import Single from "./components/HomeAdmin/single/Single";
import AdminHome from "./components/HomeAdmin/DashBoard/AdminHome";

import { wardInputs, userInputs } from "./components/formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/AdminUsers">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="ward">
            <Route index element={<List />} />
            <Route path=":wardId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={wardInputs} title="Add New Ward" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

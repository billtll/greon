import { HashRouter, Navigate, Route, Routes } from "react-router";

import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import AppHome from "./pages/AppHome";
import FavoriteItem from "./pages/FavoriteItem";
import Film from "./pages/Film";
import Category from "./pages/Category";
import History from "./pages/History";
import AddFilm from "./pages/AddFilm";
import UsageTutorial from "./pages/UsageTutorial";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<AppHome />} />
          <Route path="home/film" element={<Film />} />
          <Route path="category" element={<Category />} />
          <Route path="history" element={<History />} />
          <Route path="account">
            <Route index element={<Navigate replace to="favorite" />} />
            <Route path="favorite" element={<FavoriteItem />} />
            <Route path="add-film" element={<AddFilm />} />
          </Route>
        </Route>
        <Route path="app/usage-tutorial" element={<UsageTutorial />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

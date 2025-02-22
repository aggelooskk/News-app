import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import TrendingScreen from "./Screens/TrendingScreen";
import MarketScreen from "./Screens/MarketScreen";
import SportsScreen from "./Screens/SportsScreen";
import GamingScreen from "./Screens/GamingScreen";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="/trending" element={<TrendingScreen />} />
      <Route path="/market" element={<MarketScreen />} />
      <Route path="/sports" element={<SportsScreen />} />
      <Route path="/gaming" element={<GamingScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

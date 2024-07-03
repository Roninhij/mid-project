import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./Pages/Movie";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/:movieId",
        element: <Movie />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   path: "register",
      //   element: <Register />,
      // },
    ],
  },
];
function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
export default App;

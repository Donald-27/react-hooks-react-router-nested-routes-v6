// src/routes.js
import App from "./App";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/directors", element: <Directors /> },
      { path: "/actors", element: <Actors /> },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: ":id",
            element: <Movie />
          }
        ]
      }
    ]
  }
];

export default routes;

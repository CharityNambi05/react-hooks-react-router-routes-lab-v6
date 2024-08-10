
// routes.js
import Home from './components/Home';         // Import your components
import Directors from './components/Directors';
import Actors from './components/Actors';
import Movie from './components/Movie';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
];

export default routes;


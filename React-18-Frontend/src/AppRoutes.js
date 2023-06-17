import { GuestList } from "./components/guests/guest-list";
import Guest from "./components/guests/guest";
import HomePage from "./components/home/index";

const AppRoutes = [
  {
    index: true,
    element: <GuestList />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/guest-list',
    element: <GuestList />
  },
  {
    path: '/guest',
    element: <Guest />
  }
];

export default AppRoutes;

import { GuestList } from "./components/guests/guest-list";
import Guest from "./components/guests/guest";
//import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <GuestList />
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

import Home from "../components/Home";
import Prop from "../components/Prop";
import Generic from "../pages/Generic";
import Signin from "../pages/Signin";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
    search: "?",
    hidden: false,
    private: true,
  },
  {
    id: 2,
    title: "Properies",
    path: "/properties",
    element: <Prop />,
    search: "?",
    hidden: false,
    private: true,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    element: <Generic />,
    search: "?",
    hidden: false,
    private: true,
  },
  {
    id: 4,
    title: "Sign in",
    path: "/signin",
    element: <Signin />,
    search: "?",
    hidden: true,
    private: true,
  },
  {
    id: 5,
    title: "Sign up",
    path: "/signup",
    element: <Generic />,
    search: "?",
    hidden: true,
    private: true,
  },
];

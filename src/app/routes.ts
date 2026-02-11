import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./pages/Landing";
import { Platform } from "./pages/Platform";
import { Solutions } from "./pages/Solutions";
import { Pricing } from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "platform", Component: Platform },
      { path: "solutions", Component: Solutions },
      { path: "pricing", Component: Pricing },
    ],
  },
]);

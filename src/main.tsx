import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./utils/Router.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import { store } from "./app/store.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

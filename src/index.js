import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const ImportOnInteraction = React.lazy(() => import("ImportOnInteration"));
const ImportOnVisibility = React.lazy(() => import("ImportOnVisibility"));
const router = createBrowserRouter([
  {
    path: "/1",
    element: (
      <React.Suspense fallback={<div>Loading ImportOnInteraction page</div>}>
        <ImportOnInteraction />
      </React.Suspense>
    ),
  },
  {
    path: "/2",
    element: (
      <React.Suspense fallback={<div>Loading ImportOnVisibility page</div>}>
        <ImportOnVisibility />
      </React.Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

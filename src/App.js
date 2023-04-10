import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pagina's
import PageNotFound from "./pages/PageNotFound";
import Home, { loadHomeData, deleteTodoDocument } from "./pages/Home";
import AddTodo, { AddTodoAction } from "./pages/AddTodo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: loadHomeData,
          action: deleteTodoDocument,
        },
        {
          path: "/add",
          element: <AddTodo />,
          action: AddTodoAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

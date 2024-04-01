import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>,
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./layout/Head";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Head></Head>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
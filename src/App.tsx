import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Home, { loader as populatedLoad } from "./Components/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Detail,{loader as detailLoad} from "./Components/Detail";

function App() {
  const root = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home />, loader: populatedLoad },
        {path:'detail/:id',element:<Detail/>,loader:detailLoad}
      
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={root} />
    </QueryClientProvider>
  );
}

export default App;

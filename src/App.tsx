import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Home, { loader as populatedLoad } from "./Components/Home/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Detail,{loader as detailLoad} from "./Components/Home/Detail";
import Categorie,{loader as loadCate} from "./Components/Categorie";
import Movies,{loader as loadMovies} from "./Components/Movies";
import Recommended,{loader as loadRecom} from "./Components/Recommened";
import MovieRoot from "./pages/movieRoot";
function App() {
  const root = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home />, loader: populatedLoad },
        {path:'detail/:id',element:<Detail/>,loader:detailLoad},
        {path:'movies',element:<MovieRoot/>,children:[
          {index : true, element:<Movies/>, loader:loadMovies},
          {path:'categorie/:id',element:<Categorie/>,loader:loadCate}, 
          {path:'recommended',element:<Recommended/>,loader:loadRecom},
        ]},
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

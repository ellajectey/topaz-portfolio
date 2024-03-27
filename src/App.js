import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import About from "./pages/about";
import Project from "./pages/project";
import Admin from "./pages/admin";





const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Project /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/admin", element: <Admin /> }
  
]);

function App() {
  return (
    < >
     
     
     <RouterProvider router={router}/>
        
    </>
  );
}

export default App;

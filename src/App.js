import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import About from "./pages/about";





const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> }
  
]);

function App() {
  return (
    < >
     
     
     <RouterProvider router={router}/>
        
    </>
  );
}

export default App;

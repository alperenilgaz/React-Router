import { RouterProvider, createBrowserRouter } from "react-router-dom";
//pages
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
//layout
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import Faq from "./Pages/Help/Faq";
import {Contact, contactAction} from "./Pages/Help/Contact";
import { usersLoader,Users } from "./Pages/Users";
import { UserDetails, UserDetailsLoader } from "./Pages/UserDetails";
import NotFound from "./Pages/NotFound";

function App() {
  

  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {path:'/',element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'about',element:<About/>},
        {
          path:'help',
          element:<HelpLayout/>,
          children:[
            {path:'contact',element:<Contact/>, action:contactAction},
            {path:'faq',element:<Faq/>},
          ]
        },
        {
          path:'users',
          children:[
            {index:true,element:<Users/>,loader:usersLoader},
            {path:':userId',element:<UserDetails/>, loader:UserDetailsLoader}
          ]
        },
       
        
        
      ]
    },
    {path:"*",element:<NotFound/>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
